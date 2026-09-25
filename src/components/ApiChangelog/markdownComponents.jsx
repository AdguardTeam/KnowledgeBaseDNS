import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import {Prism} from 'prism-react-renderer';
import {slugify} from './helpers';

// Hoisted for stable identity (inline definitions would remount the nodes the
// scrollspy tracks). Renders h2 version titles with the `#` hash-link and an id
// matching parseVersions (helpers.js).
const headingText = (children) =>
  React.Children.toArray(children)
    .filter((child) => typeof child === 'string')
    .join(' ');

const versionHeading = ({node: {tagName}, children}) => (
  <Heading as={tagName} id={slugify(headingText(children))}>
    {children}
  </Heading>
);

// Language from a `language-*` class, or null for plain/inline code.
const getCodeLanguage = (className) => /language-(\w+)/.exec(className || '')?.[1] ?? null;

const markdownCode = ({className, children}) => {
  const language = getCodeLanguage(className);
  if (!language || !Prism.languages[language]) {
    return <code className={className}>{children}</code>;
  }
  return <CodeBlock language={language}>{String(children).trimEnd()}</CodeBlock>;
};

// CodeBlock renders its own <pre>; drop ReactMarkdown's wrapper when the code
// child (type `markdownCode`) renders a CodeBlock.
const markdownPre = ({children}) => {
  const child = React.Children.only(children);
  if (child.type !== markdownCode) {
    return <pre>{children}</pre>;
  }
  const language = getCodeLanguage(child.props.className);
  return language && Prism.languages[language] ? children : <pre>{children}</pre>;
};

export const markdownComponents = {
  h2: versionHeading,
  code: markdownCode,
  pre: markdownPre,
};
