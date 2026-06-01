import React from 'react';
import Root from '@theme-original/Root';
import useDocusaurusContext from '@docusaurus/core/lib/client/exports/useDocusaurusContext';
import { translate } from '@docusaurus/core/lib/client/exports/Translate';
import { Context as DocusaurusContext } from '@docusaurus/core/lib/client/docusaurusContext';

export default function RootWrapper({ children }) {
  const contextValue = useDocusaurusContext();

  const translatedTitle = translate({
    id: 'siteConfig.title',
    message: contextValue.siteConfig.title,
  });

  const translatedTagline = translate({
    id: 'siteConfig.tagline',
    message: contextValue.siteConfig.tagline,
  });

  const modifiedContext = {
    ...contextValue,
    siteConfig: {
      ...contextValue.siteConfig,
      title: translatedTitle,
      tagline: translatedTagline,
    },
  };

  return (
    <DocusaurusContext.Provider value={modifiedContext}>
      <Root>{children}</Root>
    </DocusaurusContext.Provider>
  );
}
