import {useEffect, useState} from 'react';
import {stripIntro} from './helpers';

const CHANGELOG_URL = '/api/CHANGELOG.md';
const FETCH_TIMEOUT_MS = 10000;

// Session cache: navigating back must not refetch; a reload picks up updates.
let cachedMarkdown = null;

// Fetches the changelog (abort timeout, session cache) and returns `retry`.
export function useChangelogFetch() {
  const [state, setState] = useState(() =>
    cachedMarkdown === null
      ? {status: 'loading', markdown: ''}
      : {status: 'ready', markdown: cachedMarkdown},
  );

  useEffect(() => {
    if (cachedMarkdown !== null) {
      return;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    fetch(CHANGELOG_URL, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        cachedMarkdown = stripIntro(text);
        setState({status: 'ready', markdown: cachedMarkdown});
      })
      .catch(() => {
        setState({status: 'error', markdown: ''});
      })
      .finally(() => clearTimeout(timeoutId));
    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  return {state};
}
