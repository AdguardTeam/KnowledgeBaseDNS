import {useEffect, useState} from 'react';

// A heading is "current" while at or above the reading line (below the navbar).
const NAVBAR_SELECTOR = '.navbar';
const READING_LINE_OFFSET = 24;
// Near the bottom, the last version is active even if its short section
// never reaches the reading line.
const BOTTOM_EDGE_TOLERANCE = 1;

const getReadingLine = () => {
  const navbar = document.querySelector(NAVBAR_SELECTOR);
  return (navbar ? navbar.getBoundingClientRect().height : 0) + READING_LINE_OFFSET;
};

const isAtBottom = () =>
  window.innerHeight + window.scrollY >=
  document.documentElement.scrollHeight - BOTTOM_EDGE_TOLERANCE;

// Last heading at or above the reading line; at the very bottom, the last one.
const computeActive = (headings) => {
  if (isAtBottom()) {
    return headings[headings.length - 1].id;
  }
  const line = getReadingLine();
  let active = null;
  for (const heading of headings) {
    if (heading.getBoundingClientRect().top <= line) {
      active = heading.id;
    } else {
      break;
    }
  }
  return active;
};

// Highlights the version heading at or above the reading line; rAF-throttled
// recompute on scroll/resize, plus a seed call for deep links and reloads.
export function useScrollSpy(contentRef, versions) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (versions.length === 0) {
      return;
    }

    const headings = versions
      .map(({id}) => contentRef.current?.querySelector(`#${id}`))
      .filter(Boolean);
    if (headings.length === 0) {
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        setActiveId(computeActive(headings));
        ticking = false;
      });
    };

    setActiveId(computeActive(headings));
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [contentRef, versions]);

  return activeId;
}
