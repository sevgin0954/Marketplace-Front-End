import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { acceptHeaderInterceptorProvider } from './services-singleton/accept-header-interceptor-provider';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch(), withInterceptorsFromDi()), acceptHeaderInterceptorProvider]
};
