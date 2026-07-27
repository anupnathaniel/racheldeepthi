"use client";

import { useState } from "react";
import type { VideoItem } from "@/data/videos";
import { useConsent } from "@/components/consent/cookie-consent";

function VideoCard({ video }: { video: VideoItem }) {
  const { preferences, allowExternalMedia } = useConsent();
  const [playing, setPlaying] = useState(false);
  const mediaAllowed = Boolean(preferences?.externalMedia);

  return (
    <article className="video-card">
      <div className="video-frame">
        {playing && mediaAllowed ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={`YouTube player: ${video.title}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="video-thumbnail">
            {/* YouTube supplies the thumbnail for its own embedded video. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <span className="video-thumbnail-shade" aria-hidden="true" />
            <button
              type="button"
              className="play-button"
              onClick={() => {
                if (!mediaAllowed) {
                  allowExternalMedia();
                }
                setPlaying(true);
              }}
              aria-label={`${mediaAllowed ? "Play" : "Allow YouTube and play"} ${video.title}`}
            >
              <span aria-hidden="true">▶</span>
              <span className="sr-only">{mediaAllowed ? "Play video" : "Allow YouTube and play"}</span>
            </button>
          </div>
        )}
      </div>
      <div className="video-card-body">
        <h2>{video.title}</h2>
      </div>
    </article>
  );
}

export function VideoLibrary({ videos }: { videos: VideoItem[] }) {
  return (
    <div className="video-grid video-gallery-all">
      {videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </div>
  );
}
