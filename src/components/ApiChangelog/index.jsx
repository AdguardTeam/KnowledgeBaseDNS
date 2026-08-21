import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {translate} from '@docusaurus/Translate';
import ApiChangelogInner from './ApiChangelogInner';
import './styles.css';

export default function ApiChangelog() {
  const loadingMessage = translate({
    id: 'apiChangelog.loading',
    message: 'Loading changelog…',
    description: 'Placeholder shown while the API changelog is being loaded',
  });
  const versionsLabel = translate({
    id: 'apiChangelog.versions',
    message: 'Versions',
    description: 'Accessible name of the version list sidebar on the API changelog page',
  });
  return (
    <BrowserOnly fallback={<p role="status">{loadingMessage}</p>}>
      {() => (
        <ApiChangelogInner
          loadingMessage={loadingMessage}
          versionsLabel={versionsLabel}
        />
      )}
    </BrowserOnly>
  );
}
