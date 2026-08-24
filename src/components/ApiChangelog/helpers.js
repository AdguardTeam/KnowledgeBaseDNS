import {defaultUrlTransform} from 'react-markdown';

// Cut everything before the first `## ` heading (its relative link would 404).
export const stripIntro = (markdown) => {
  const headingIndex = markdown.search(/^##\s/m);
  return headingIndex === -1 ? markdown : markdown.slice(headingIndex);
};

// Resolve relative URLs against the current page so they cannot 404.
export const absolutizeUrl = (url, key, node) => {
  const safeUrl = defaultUrlTransform(url, key, node);
  if (!safeUrl || /^(?:[a-z][a-z\d+.-]*:|#)/i.test(safeUrl)) {
    return safeUrl || null;
  }
  try {
    return new URL(safeUrl, window.location.href).toString();
  } catch {
    return safeUrl;
  }
};

// GitHub-style slugs matching Docusaurus heading ids.
export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Sidebar entries from the rendered markdown, so they can't drift from the anchors.
export const parseVersions = (markdown) =>
  [...markdown.matchAll(/^##\s+(v\d[^\r\n]*)$/gm)].map((match) => ({
    id: slugify(match[1]),
    title: match[1],
  }));
