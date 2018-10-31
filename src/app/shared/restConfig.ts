import { BaseUrl } from './constants';

export function RestangularConfigFatory(RestangularProvider) {
  RestangularProvider.setBaseUrl(BaseUrl);
}
