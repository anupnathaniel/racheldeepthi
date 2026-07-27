"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Preferences = {
  analytics: boolean;
  externalMedia: boolean;
};

type ConsentContextValue = {
  preferences: Preferences | null;
  setPreferences: (preferences: Preferences) => void;
  allowExternalMedia: () => void;
};

const defaultPreferences: Preferences = { analytics: false, externalMedia: false };
const ConsentContext = createContext<ConsentContextValue>({
  preferences: null,
  setPreferences: () => undefined,
  allowExternalMedia: () => undefined,
});

const STORAGE_KEY = "truly-nourish-consent-v1";

export function useConsent() {
  return useContext(ConsentContext);
}

export function CookieConsent({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferenceState] = useState<Preferences | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [draft, setDraft] = useState<Preferences>(defaultPreferences);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setBannerVisible(true);
        return;
      }
      try {
        setPreferenceState(JSON.parse(stored) as Preferences);
      } catch {
        setBannerVisible(true);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const open = () => {
      setDraft(preferences || defaultPreferences);
      setDialogVisible(true);
    };
    window.addEventListener("open-cookie-preferences", open);
    return () => window.removeEventListener("open-cookie-preferences", open);
  }, [preferences]);

  const persist = (next: Preferences) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setPreferenceState(next);
    setBannerVisible(false);
    setDialogVisible(false);
  };

  const value: ConsentContextValue = {
    preferences,
    setPreferences: persist,
    allowExternalMedia: () => persist({ ...(preferences || defaultPreferences), externalMedia: true }),
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {bannerVisible ? (
        <section className="cookie-banner" aria-label="Cookie and external media preferences">
          <div>
            <h2>Your privacy choices</h2>
            <p>Essential services keep the site working. Optional analytics and external media stay off unless you choose to allow them.</p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="button" onClick={() => persist({ analytics: true, externalMedia: true })}>
              Accept optional services
            </button>
            <button type="button" className="button button-secondary" onClick={() => persist(defaultPreferences)}>
              Reject optional services
            </button>
            <button type="button" className="button button-quiet" onClick={() => {
              setDraft(defaultPreferences);
              setDialogVisible(true);
            }}>
              Manage preferences
            </button>
          </div>
        </section>
      ) : null}
      {dialogVisible ? (
        <div className="dialog-backdrop" role="presentation">
          <section className="preference-dialog" role="dialog" aria-modal="true" aria-labelledby="preference-title">
            <div className="dialog-heading">
              <div>
                <p className="eyebrow">Privacy controls</p>
                <h2 id="preference-title">Manage preferences</h2>
              </div>
              <button type="button" className="dialog-close" onClick={() => setDialogVisible(false)} aria-label="Close cookie preferences">Close</button>
            </div>
            <div className="preference-row">
              <div><strong>Essential</strong><p>Required for navigation, security and your privacy choices.</p></div>
              <span>Always active</span>
            </div>
            <label className="preference-row">
              <span><strong>Analytics</strong><span>Helps understand site use if a privacy-respecting provider is configured.</span></span>
              <input type="checkbox" checked={draft.analytics} onChange={(event) => setDraft({ ...draft, analytics: event.target.checked })} />
            </label>
            <label className="preference-row">
              <span><strong>External media</strong><span>Allows YouTube players and other approved third-party embeds to load.</span></span>
              <input type="checkbox" checked={draft.externalMedia} onChange={(event) => setDraft({ ...draft, externalMedia: event.target.checked })} />
            </label>
            <div className="button-row">
              <button type="button" className="button" onClick={() => persist(draft)}>Save preferences</button>
              <button type="button" className="button button-secondary" onClick={() => persist(defaultPreferences)}>Reject optional services</button>
            </div>
          </section>
        </div>
      ) : null}
    </ConsentContext.Provider>
  );
}
