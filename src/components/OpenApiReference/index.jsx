import React, {lazy, Suspense} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {translate} from '@docusaurus/Translate';
import 'swagger-ui-react/swagger-ui.css';

const SPEC_URL = '/api/swagger/openapi.json';
const SwaggerUI = lazy(() => import('swagger-ui-react'));

export default function OpenApiReference() {
  const loadingMessage = translate({
    id: 'apiReference.loading',
    message: 'Loading API reference…',
    description:
      'Placeholder shown while the API reference (Swagger UI) is being loaded',
  });
  return (
    <BrowserOnly fallback={<p role="status">{loadingMessage}</p>}>
      {() => (
        <div className="openapi-reference">
          <Suspense fallback={<p role="status">{loadingMessage}</p>}>
            <SwaggerUI
              url={SPEC_URL}
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
