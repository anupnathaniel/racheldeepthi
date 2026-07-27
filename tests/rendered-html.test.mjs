import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const outputDirectory = path.resolve("out");

function pageFile(route = "/") {
  const cleanRoute = route.replace(/^\/|\/$/g, "");
  return cleanRoute
    ? path.join(outputDirectory, cleanRoute, "index.html")
    : path.join(outputDirectory, "index.html");
}

async function readPage(route = "/") {
  return readFile(pageFile(route), "utf8");
}

test("exports the complete Truly Nourish home page", async () => {
  const html = await readPage();

  assert.match(html, /Transform Your Health/);
  assert.match(html, /class="home-hero"/);
  assert.match(html, /Rachel Deepthi/);
  assert.match(html, /M\.Sc\., RD, CDE/);
  assert.match(html, /Client Transformations &amp; Testimonials/);
  assert.match(html, /client-transformation-01\.jpg/);
  assert.match(html, /client-transformation-04\.jpg/);
  assert.match(html, /truly-nourish-logo-v2\.png/);
  assert.match(html, /icons\/whatsapp\.svg/);
  assert.match(html, /wa\.me\/919361774528/);
  assert.doesNotMatch(html, /Follow Rachel for Practical Nutrition Guidance/);
  assert.doesNotMatch(html, /Build Better Health Through Small, Informed Choices/);
  assert.doesNotMatch(html, /Because Your Health Deserves More Than Generic Advice/);
});

test("exports every public route and program detail page", async () => {
  const routes = [
    "/about",
    "/accessibility",
    "/community-impact",
    "/contact",
    "/corporate-wellness",
    "/disclaimer",
    "/media",
    "/privacy",
    "/programs",
    "/programs/weight-management",
    "/terms",
    "/video-notice",
    "/videos",
  ];

  for (const route of routes) {
    const html = await readPage(route);
    assert.match(html, /<h1\b/i, route);
    assert.doesNotMatch(html, /class="page-hero"/i, route);
    assert.doesNotMatch(html, /class="page-intro"/i, route);
  }
});

test("exports the WhatsApp enquiry handoff", async () => {
  const html = await readPage("/contact");

  assert.match(html, /Message Rachel/);
  assert.match(html, /Send Enquiry on WhatsApp/);
  assert.match(html, /Rachel’s business WhatsApp/);
  assert.match(html, /completed in this form will open as a message/);
  assert.match(html, /<option>WhatsApp<\/option>/);
  assert.match(html, /wa\.me\/919361774528/);
});

test("exports the simplified media and programs pages", async () => {
  const mediaHtml = await readPage("/media");
  assert.match(mediaHtml, /Scope of Sports Nutrition as a Profession/);
  assert.match(mediaHtml, /fruits-nuts-media-v1\.jpg/);
  assert.doesNotMatch(mediaHtml, /Select a thumbnail to play/);
  assert.doesNotMatch(mediaHtml, /Nutrition Conversation \d+/);

  const programsHtml = await readPage("/programs");
  assert.match(programsHtml, /rachel-consultation-programs-v1\.jpg/);
  assert.match(programsHtml, /Not sure where to begin/);
  assert.doesNotMatch(programsHtml, /programs-focus-section/);
});

test("exports required GitHub Pages assets and discovery files", async () => {
  const files = [
    "404.html",
    "robots.txt",
    "sitemap.xml",
    "icons/whatsapp.svg",
    "images/rachel-deepthi-portrait-v2.jpg",
    "truly-nourish-favicon-v3.ico",
  ];

  for (const file of files) {
    await access(path.join(outputDirectory, file));
  }
});
