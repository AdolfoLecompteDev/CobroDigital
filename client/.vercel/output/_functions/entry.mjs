import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C-hh3BOl.mjs';
import { manifest } from './manifest_WwL9acKU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cliente/_id_.astro.mjs');
const _page2 = () => import('./pages/cobrador/_id_.astro.mjs');
const _page3 = () => import('./pages/dashboard.astro.mjs');
const _page4 = () => import('./pages/nuevo-cliente.astro.mjs');
const _page5 = () => import('./pages/nuevo-cobrador.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cliente/[id].astro", _page1],
    ["src/pages/cobrador/[id].astro", _page2],
    ["src/pages/dashboard.astro", _page3],
    ["src/pages/nuevo-cliente.astro", _page4],
    ["src/pages/nuevo-cobrador.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "61d4e9f5-3188-457e-a39d-32379b838858",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
