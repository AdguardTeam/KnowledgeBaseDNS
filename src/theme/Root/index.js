import React, { useMemo } from 'react';
import Root from '@theme-original/Root';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import { Context as DocusaurusContext } from '@docusaurus/core/lib/client/docusaurusContext';

export default function RootWrapper({ children }) {
  const contextValue = useDocusaurusContext();

  const translatedTitle = translate({
    id: 'siteConfig.title',
    message: contextValue.siteConfig.title,
    description: 'The site title used in the browser tab and metadata',
  });

  const translatedTagline = translate({
    id: 'siteConfig.tagline',
    message: contextValue.siteConfig.tagline,
    description: 'The site tagline used in meta description',
  });

  const modifiedContext = useMemo(() => ({
    ...contextValue,
    siteConfig: {
      ...contextValue.siteConfig,
      title: translatedTitle,
      tagline: translatedTagline,
    },
  }), [contextValue, translatedTitle, translatedTagline]);

  return (
    <DocusaurusContext.Provider value={modifiedContext}>
      <Root>{children}</Root>
    </DocusaurusContext.Provider>
  );
}
