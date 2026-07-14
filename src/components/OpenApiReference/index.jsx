import React, {lazy, Suspense} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import 'swagger-ui-react/swagger-ui.css';

const SPEC_URL = '/api/swagger/openapi.json';
const SwaggerUI = lazy(() => import('swagger-ui-react'));

export default function OpenApiReference() {
  return (
    <BrowserOnly fallback={<p>Loading API reference…</p>}>
      {() => (
        <div className="openapi-reference">
          <Suspense fallback={<p>Loading API reference…</p>}>
            <SwaggerUI
              url={SPEC_URL}
              docExpansion="list"
              deepLinking
              filter
              defaultModelsExpandDepth={1}
              supportedSubmitMethods={[]}
            />
          </Suspense>
        </div>
      )}
    </BrowserOnly>
  );
}
