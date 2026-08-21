import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import {Prism} from 'prism-react-renderer';
import {slugify} from './helpers';

// Hoisted so their identity stays stable: inline definitions would remount the
// heading nodes the scrollspy tracks.
const versionHeading = ({children}) => {
  const text = React.Children.toArray(children)
    .filter((child) => typeof child === 'string')
    .join(' ');
  return <h2 id={slugify(text)}>{children}</h2>;
};

const markdownCode = ({className, children}) => {
  const language = /language-(\w+)/.exec(className || '')?.[1];
  if (!language || !Prism.languages[language]) {
    return <code className={className}>{children}</code>;
  }
  return <CodeBlock language={language}>{String(children).trimEnd()}</CodeBlock>;
};

export const markdownComponents = {h2: versionHeading, code: markdownCode};
