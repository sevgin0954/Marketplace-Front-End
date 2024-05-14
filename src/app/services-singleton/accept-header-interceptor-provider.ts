import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { AcceptHeaderInterceptor } from "./accept-header-interceptor";

export const acceptHeaderInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: AcceptHeaderInterceptor, multi: true };