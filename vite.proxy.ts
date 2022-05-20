import { ProxyOptions } from 'vite';
import packageJson from './package.json';

const host = 'http://localhost:3000';

export const proxyConfig: Record<string, string | ProxyOptions> = {
  [packageJson.homepage + 'api']: {
    target: 'https://test-apps-ninja02.konturlabs.com',
    changeOrigin: true,
  },
  '/tiles/stats': 'https://zigzag.kontur.io',
  '/tiles/users': 'https://zigzag.kontur.io',
  '/tiles/public.hot_projects': 'https://test-api02.konturlabs.com',
}

/* Replace api url that require CORS to proxy */
export function replaceUrlWithProxy(originalUrl: string): string {
  return Object.entries(proxyConfig).reduce((url, rule) => {
    const proxyTarget = typeof rule[1] === 'string' ? rule[1] : rule[1].target;
    if (proxyTarget) {
      return url.replace(String(proxyTarget), host);
    } else {
      return url;
    }
  }, originalUrl);
}

