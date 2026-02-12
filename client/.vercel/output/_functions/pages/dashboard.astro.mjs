/* empty css                                */
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, n as renderScript, l as renderComponent } from '../chunks/astro/server_CKbJxenY.mjs';
import 'piccolore';
import { a as $$Layout, $ as $$Icon } from '../chunks/Layout_CArJpYBf.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ResumenRapido = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="stats-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${[1, 2, 3, 4].map(() => renderTemplate`<div class="bg-white p-6 rounded-[2.2rem] border border-slate-100 shadow-sm animate-pulse flex items-center gap-5"> <div class="bg-slate-50 w-12 h-12 rounded-xl"></div> <div class="space-y-2"><div class="h-2 w-16 bg-slate-50 rounded"></div><div class="h-4 w-20 bg-slate-50 rounded"></div></div> </div>`)} </div> ${renderScript($$result, "C:/Users/adolf/Downloads/cobro_digital/client/src/components/ResumenRapido.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/adolf/Downloads/cobro_digital/client/src/components/ResumenRapido.astro", void 0);

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel de Control - CobroDigital" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="max-w-7xl mx-auto px-6 pt-8 flex justify-between items-center"> <div id="user-tag" class="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-slate-100 shadow-sm"> <div id="role-icon" class="w-2.5 h-2.5 rounded-full animate-pulse"></div> <span id="role-text" class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Verificando...</span> </div> <button id="logout-btn" class="group flex items-center gap-2 text-slate-400 hover:text-red-500 font-black text-[10px] uppercase tracking-[0.2em] transition-all"> <div class="bg-slate-100 group-hover:bg-red-50 p-2.5 rounded-xl transition-colors"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:log-out", "class": "w-4 h-4" })} </div>
Finalizar Sesión
</button> </nav> <div class="max-w-7xl mx-auto px-6 py-10"> <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8"> <div> <h1 class="text-5xl font-black text-slate-900 tracking-tighter flex items-center gap-4"> <div class="bg-blue-600 p-3 rounded-[1.2rem] shadow-lg shadow-blue-200"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:layout-grid", "class": "text-white w-7 h-7" })} </div>
Central
</h1> <p class="text-slate-500 font-bold mt-2 ml-1 uppercase text-[9px] tracking-[0.3em]">Operaciones de Cartera en Tiempo Real</p> </div> <div class="flex flex-wrap gap-4"> <a id="btn-nuevo-cobrador" href="/nuevo-cobrador" class="hidden bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-4 rounded-2xl font-black flex items-center gap-3 transition-all active:scale-95 text-xs uppercase tracking-widest group"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:shield-plus", "class": "w-4 h-4 text-blue-600" })}
Personal
</a> <a href="/nuevo-cliente" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl shadow-blue-100 transition-all active:scale-95 text-xs uppercase tracking-widest group"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:plus-circle", "class": "w-5 h-5" })}
Registrar Crédito
</a> </div> </div> <div id="stats-container" class="hidden mb-16 animate-in fade-in duration-1000"> <div class="flex items-center gap-3 mb-6 pl-1"> <div class="w-1.5 h-4 bg-emerald-500 rounded-full"></div> <h2 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Balance de Utilidades</h2> </div> ${renderComponent($$result2, "ResumenRapido", $$ResumenRapido, {})} </div> <div id="cobradores-container" class="hidden mb-16"> <div class="mb-6 flex items-center gap-3 pl-1"> <div class="w-1.5 h-4 bg-blue-600 rounded-full"></div> <h2 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Cobradores en Ruta</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="lista-cobradores"></div> </div> <div class="mb-6 flex items-center justify-between px-1"> <div class="flex items-center gap-3"> <div class="w-1.5 h-4 bg-slate-800 rounded-full"></div> <h2 id="list-title" class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Cargando Cartera...</h2> </div> <div id="client-badge" class="hidden bg-blue-50 text-blue-600 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter border border-blue-100">
0 Registros
</div> </div> <div id="grid-clientes" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20"> ${[1, 2, 3, 4].map(() => renderTemplate`<div class="bg-white h-52 rounded-[2rem] border border-slate-100 animate-pulse"></div>`)} </div> </div> ` })} ${renderScript($$result, "C:/Users/adolf/Downloads/cobro_digital/client/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/adolf/Downloads/cobro_digital/client/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/adolf/Downloads/cobro_digital/client/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
