import React, {useLayoutEffect, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import Translate from '@docusaurus/Translate';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChangelogSidebar from './ChangelogSidebar';
import {absolutizeUrl, parseVersions} from './helpers';
import {markdownComponents} from './markdownComponents';
import {useChangelogFetch} from './useChangelogFetch';
import {useScrollSpy} from './useScrollSpy';

// Fallback link where the /api/ rewrite is absent (e.g. the preview domain).
const SOURCE_URL = 'https://adguard-dns.io/api/CHANGELOG.md';

function ApiChangelogInner({loadingMessage, retryLabel, versionsLabel}) {
  const {state, retry} = useChangelogFetch();
  // Sidebar entries from the rendered markdown, so they can't drift from the anchors.
  const versions = useMemo(() => parseVersions(state.markdown), [state.markdown]);
  // Root for locating version headings.
  const contentRef = useRef(null);
  // Version in view; drives the sidebar highlight.
  const activeId = useScrollSpy(contentRef, versions);
  // Portal into the doc content row so the sidebar sits where the TOC would.
  const [portalTarget, setPortalTarget] = useState(null);

  useLayoutEffect(() => {
    if (state.status !== 'ready') {
      setPortalTarget(null);
      return;
    }
    setPortalTarget(contentRef.current?.closest('.row') ?? null);
  }, [state.status]);

  if (state.status === 'loading') {
    return <p role="status">{loadingMessage}</p>;
  }

  if (state.status === 'error') {
    return (
      <div role="alert">
        <p>
          <Translate
            id="apiChangelog.error"
            description="Error message shown when the API changelog cannot be loaded. {link} is a link to the original changelog on adguard-dns.io"
            values={{
              link: (
                <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer">
                  {SOURCE_URL}
                </a>
              ),
            }}>
            {'Failed to load the changelog. You can view the original at {link}.'}
          </Translate>
        </p>
        <button type="button" className="button button--primary" onClick={retry}>
          {retryLabel}
        </button>
      </div>
    );
  }

  const versionsSidebar = (
    <ChangelogSidebar
      versions={versions}
      activeId={activeId}
      versionsLabel={versionsLabel}
    />
  );

  return (
    <div className="changelog">
      <div className="changelog__content" ref={contentRef}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          urlTransform={absolutizeUrl}
          components={markdownComponents}
        >
          {state.markdown}
        </ReactMarkdown>
      </div>
      {portalTarget ? createPortal(versionsSidebar, portalTarget) : versionsSidebar}
    </div>
  );
}

export default ApiChangelogInner;
