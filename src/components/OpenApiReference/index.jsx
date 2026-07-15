import React, {lazy, Suspense} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = lazy(() => import('swagger-ui-react'));

export default function OpenApiReference() {
  const specUrl = useBaseUrl('/api/swagger/openapi.json');

  return (
    <BrowserOnly fallback={<p>Loading API reference…</p>}>
      {() => (
        <div className="openapi-reference">
          <Suspense fallback={<p>Loading API reference…</p>}>
            <SwaggerUI
              url={specUrl}
              docExpansion="list"
              deepLinking
              filter={false}
              defaultModelsExpandDepth={1}
              supportedSubmitMethods={[]}
            />
          </Suspense>
        </div>
      )}
    </BrowserOnly>
  );
}
