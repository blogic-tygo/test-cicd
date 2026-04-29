import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    {
      provide: 'SSR_ALLOWED_ORIGINS',
      useValue: ['http://localhost:4000', 'http://127.0.0.1:4000']
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
