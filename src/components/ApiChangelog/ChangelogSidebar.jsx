import React, {useEffect, useRef} from 'react';

const SCROLL_MARGIN = 8;

// Version list, portaled into the doc row as a col--3 column (like the TOC);
// reuses Docusaurus TOC classes so it matches the design.
export default function ChangelogSidebar({versions, activeId, versionsLabel}) {
  const asideRef = useRef(null);

  useEffect(() => {
    const container = asideRef.current;
    const link = container?.querySelector('.table-of-contents__link--active');
    if (!container || !link) {
      return;
    }
    const containerTop = container.getBoundingClientRect().top;
    const containerBottom = container.getBoundingClientRect().bottom;
    const linkTop = link.getBoundingClientRect().top;
    const linkBottom = link.getBoundingClientRect().bottom;
    if (linkTop < containerTop) {
      container.scrollTop += linkTop - containerTop - SCROLL_MARGIN;
    } else if (linkBottom > containerBottom) {
      container.scrollTop += linkBottom - containerBottom + SCROLL_MARGIN;
    }
  }, [activeId]);

  if (versions.length === 0) {
    return null;
  }
  return (
    <aside
      className="changelog__versions col col--3 thin-scrollbar"
      aria-label={versionsLabel}
      ref={asideRef}
    >
      <ul className="table-of-contents table-of-contents__left-border">
        {versions.map(({id, title}) => {
          const isActive = id === activeId;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`table-of-contents__link${isActive ? ' table-of-contents__link--active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
