/* empty css                                   */
import { e as createComponent, r as renderTemplate, k as defineScriptVars, m as maybeRenderHead, h as createAstro, l as renderComponent } from '../../chunks/astro/server_CKbJxenY.mjs';
import 'piccolore';
import { a as $$Layout, $ as $$Icon } from '../../chunks/Layout_CArJpYBf.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$ModalEditarCobrador = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ModalEditarCobrador;
  const { username } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="modal-editar-cobrador" class="fixed inset-0 z-[110] hidden"> <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-md" id="close-edit-bg"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6"> <div class="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200"> <div class="bg-blue-600 p-8 text-white"> <h3 class="text-2xl font-black tracking-tighter">Editar Perfil</h3> <p class="text-blue-200 text-[10px] font-bold uppercase tracking-widest mt-1">Usuario: ', '</p> </div> <form id="form-edit-cobrador" class="p-10 space-y-6"> <div class="space-y-2"> <label class="text-[10px] font-black uppercase text-slate-400 ml-2">Nombre Completo</label> <input type="text" id="edit-nombre" name="nombre" class="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 outline-none font-bold transition-all" required> </div> <div class="space-y-2"> <label class="text-[10px] font-black uppercase text-slate-400 ml-2">Zona de Trabajo</label> <input type="text" id="edit-zona" name="zona" class="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 outline-none font-bold transition-all" required> </div> <div class="space-y-2"> <label class="text-[10px] font-black uppercase text-slate-400 ml-2">Nueva Contrase\xF1a (Opcional)</label> <input type="password" name="password" placeholder="Dejar en blanco para no cambiar" class="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 outline-none font-bold transition-all"> </div> <div class="flex gap-3 pt-4"> <button type="button" id="btn-cancel-edit" class="flex-1 bg-slate-100 text-slate-500 py-4 rounded-2xl font-black text-xs uppercase hover:bg-slate-200 transition-all">Cancelar</button> <button type="submit" class="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">Guardar Cambios</button> </div> </form> </div> </div> </div> <script>(function(){', `
  const modal = document.getElementById('modal-editar-cobrador');
  const form = document.getElementById('form-edit-cobrador');
  
  const cerrarModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  document.getElementById('close-edit-bg').onclick = cerrarModal;
  document.getElementById('btn-cancel-edit').onclick = cerrarModal;

  form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(\`http://localhost:8000/cobradores/\${username}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username, // Requerido por el schema UserCreate
          nombre: data.nombre,
          zona: data.zona,
          password: data.password || "", // El backend maneja si es vac\xEDo
        })
      });

      if (res.ok) {
        alert("\u2705 Perfil actualizado");
        window.location.reload();
      } else {
        const error = await res.json();
        alert("\u274C Error: " + (error.detail || "No se pudo actualizar"));
      }
    } catch (err) {
      alert("\u274C Error de conexi\xF3n");
    }
  };
})();<\/script>`], ["", '<div id="modal-editar-cobrador" class="fixed inset-0 z-[110] hidden"> <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-md" id="close-edit-bg"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6"> <div class="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200"> <div class="bg-blue-600 p-8 text-white"> <h3 class="text-2xl font-black tracking-tighter">Editar Perfil</h3> <p class="text-blue-200 text-[10px] font-bold uppercase tracking-widest mt-1">Usuario: ', '</p> </div> <form id="form-edit-cobrador" class="p-10 space-y-6"> <div class="space-y-2"> <label class="text-[10px] font-black uppercase text-slate-400 ml-2">Nombre Completo</label> <input type="text" id="edit-nombre" name="nombre" class="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 outline-none font-bold transition-all" required> </div> <div class="space-y-2"> <label class="text-[10px] font-black uppercase text-slate-400 ml-2">Zona de Trabajo</label> <input type="text" id="edit-zona" name="zona" class="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 outline-none font-bold transition-all" required> </div> <div class="space-y-2"> <label class="text-[10px] font-black uppercase text-slate-400 ml-2">Nueva Contrase\xF1a (Opcional)</label> <input type="password" name="password" placeholder="Dejar en blanco para no cambiar" class="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl px-6 py-4 outline-none font-bold transition-all"> </div> <div class="flex gap-3 pt-4"> <button type="button" id="btn-cancel-edit" class="flex-1 bg-slate-100 text-slate-500 py-4 rounded-2xl font-black text-xs uppercase hover:bg-slate-200 transition-all">Cancelar</button> <button type="submit" class="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">Guardar Cambios</button> </div> </form> </div> </div> </div> <script>(function(){', `
  const modal = document.getElementById('modal-editar-cobrador');
  const form = document.getElementById('form-edit-cobrador');
  
  const cerrarModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  document.getElementById('close-edit-bg').onclick = cerrarModal;
  document.getElementById('btn-cancel-edit').onclick = cerrarModal;

  form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(\\\`http://localhost:8000/cobradores/\\\${username}\\\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username, // Requerido por el schema UserCreate
          nombre: data.nombre,
          zona: data.zona,
          password: data.password || "", // El backend maneja si es vac\xEDo
        })
      });

      if (res.ok) {
        alert("\u2705 Perfil actualizado");
        window.location.reload();
      } else {
        const error = await res.json();
        alert("\u274C Error: " + (error.detail || "No se pudo actualizar"));
      }
    } catch (err) {
      alert("\u274C Error de conexi\xF3n");
    }
  };
})();<\/script>`])), maybeRenderHead(), username, defineScriptVars({ username }));
}, "C:/Users/adolf/Downloads/cobro_digital/client/src/components/ModalEditarCobrador.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  let datosCobradorActual = null;

  async function loadCobradorData() {
    try {
      // 1. Obtener Clientes del Cobrador
      const resClientes = await fetch(\`http://localhost:8000/clientes?cobrador_id=\${id}\`);
      const clientes = await resClientes.json();

      // 2. Obtener Datos del Cobrador
      const resCobs = await fetch(\`http://localhost:8000/cobradores\`);
      const cobradores = await resCobs.json();
      const cobrador = cobradores.find(c => c.username === id);

      if (!cobrador) throw new Error("Cobrador no encontrado");
      datosCobradorActual = cobrador;

      // 3. C\xE1lculos de m\xE9tricas
      const totalCartera = clientes.reduce((acc, c) => acc + (c.saldo || 0), 0);
      const clientesActivos = clientes.filter(c => c.activo).length;

      // 4. Renderizar Card Principal con tu dise\xF1o original
      const cardContent = document.getElementById('card-content');
      cardContent.innerHTML = \`
        <div class="flex flex-col lg:flex-row gap-12 items-center relative w-full">
          <div class="text-center lg:text-left flex-1">
            <div class="inline-block px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
               Agente de Recaudo
            </div>
            <h1 class="text-6xl font-black mb-4 tracking-tighter">\${cobrador.nombre}</h1>
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 font-bold uppercase text-[11px] tracking-widest">
              <span class="flex items-center gap-2">
                <i class="w-2 h-2 bg-blue-500 rounded-full"></i> 
                ZONA: <span class="text-white">\${cobrador.zona || 'SIN ASIGNAR'}</span>
              </span>
              <span>USERNAME: <span class="text-white">\${cobrador.username}</span></span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div class="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Total Cartera</p>
                <p class="text-3xl font-black text-white">$\${totalCartera.toLocaleString()}</p>
            </div>
            <div class="bg-blue-600 p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/20">
                <p class="text-[10px] text-blue-200 font-black uppercase tracking-widest mb-2">Activos</p>
                <p class="text-3xl font-black text-white">\${clientesActivos}</p>
            </div>
          </div>
        </div>
      \`;
      
      document.getElementById('card-loader').classList.add('hidden');
      cardContent.classList.remove('hidden');

      // 5. Renderizar Lista de Clientes detallada
      document.getElementById('client-count').innerText = \`\${clientes.length} Clientes en Cartera\`;
      
      const grid = document.getElementById('clientes-grid');
      if (clientes.length === 0) {
        grid.innerHTML = \`<p class="col-span-full text-center py-20 text-slate-400 font-bold uppercase tracking-widest">No hay clientes asignados</p>\`;
      } else {
        grid.innerHTML = clientes.map(c => \`
          <a href="/cliente/\${c.id}" class="group bg-white p-8 rounded-[2.5rem] border border-slate-100 flex justify-between items-center shadow-sm hover:shadow-xl hover:border-blue-100 transition-all">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <span class="text-slate-400 font-black text-xl group-hover:text-blue-600">\${c.nombre.charAt(0)}</span>
              </div>
              <div>
                <p class="font-black text-slate-900 text-lg leading-none mb-1">\${c.nombre}</p>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">\${c.barrio || 'Sin barrio'}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-black text-blue-600 text-xl tracking-tight">$\${(c.saldo || 0).toLocaleString()}</p>
              <p class="text-[9px] font-black uppercase tracking-widest \${c.activo ? 'text-emerald-500' : 'text-slate-300'}">
                \${c.activo ? '\u25CF Al d\xEDa' : '\u25CF Finalizado'}
              </p>
            </div>
          </a>
        \`).join('');
      }

    } catch (error) {
      console.error(error);
      document.getElementById('cobrador-card').innerHTML = \`<p class="text-red-400 font-bold">Error al cargar datos del servidor</p>\`;
    }
  }

  // L\xD3GICA DEL BOT\xD3N EDITAR (Abre el Modal)
  document.getElementById('editBtn')?.addEventListener('click', () => {
    if (!datosCobradorActual) return;
    
    // Inyectamos los datos en el modal antes de mostrarlo
    const inputNombre = document.getElementById('edit-nombre');
    const inputZona = document.getElementById('edit-zona');
    
    if (inputNombre) inputNombre.value = datosCobradorActual.nombre;
    if (inputZona) inputZona.value = datosCobradorActual.zona;
    
    const modal = document.getElementById('modal-editar-cobrador');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  });

  loadCobradorData();
})();<\/script>`], ["", " <script>(function(){", `
  let datosCobradorActual = null;

  async function loadCobradorData() {
    try {
      // 1. Obtener Clientes del Cobrador
      const resClientes = await fetch(\\\`http://localhost:8000/clientes?cobrador_id=\\\${id}\\\`);
      const clientes = await resClientes.json();

      // 2. Obtener Datos del Cobrador
      const resCobs = await fetch(\\\`http://localhost:8000/cobradores\\\`);
      const cobradores = await resCobs.json();
      const cobrador = cobradores.find(c => c.username === id);

      if (!cobrador) throw new Error("Cobrador no encontrado");
      datosCobradorActual = cobrador;

      // 3. C\xE1lculos de m\xE9tricas
      const totalCartera = clientes.reduce((acc, c) => acc + (c.saldo || 0), 0);
      const clientesActivos = clientes.filter(c => c.activo).length;

      // 4. Renderizar Card Principal con tu dise\xF1o original
      const cardContent = document.getElementById('card-content');
      cardContent.innerHTML = \\\`
        <div class="flex flex-col lg:flex-row gap-12 items-center relative w-full">
          <div class="text-center lg:text-left flex-1">
            <div class="inline-block px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
               Agente de Recaudo
            </div>
            <h1 class="text-6xl font-black mb-4 tracking-tighter">\\\${cobrador.nombre}</h1>
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 font-bold uppercase text-[11px] tracking-widest">
              <span class="flex items-center gap-2">
                <i class="w-2 h-2 bg-blue-500 rounded-full"></i> 
                ZONA: <span class="text-white">\\\${cobrador.zona || 'SIN ASIGNAR'}</span>
              </span>
              <span>USERNAME: <span class="text-white">\\\${cobrador.username}</span></span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div class="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Total Cartera</p>
                <p class="text-3xl font-black text-white">$\\\${totalCartera.toLocaleString()}</p>
            </div>
            <div class="bg-blue-600 p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/20">
                <p class="text-[10px] text-blue-200 font-black uppercase tracking-widest mb-2">Activos</p>
                <p class="text-3xl font-black text-white">\\\${clientesActivos}</p>
            </div>
          </div>
        </div>
      \\\`;
      
      document.getElementById('card-loader').classList.add('hidden');
      cardContent.classList.remove('hidden');

      // 5. Renderizar Lista de Clientes detallada
      document.getElementById('client-count').innerText = \\\`\\\${clientes.length} Clientes en Cartera\\\`;
      
      const grid = document.getElementById('clientes-grid');
      if (clientes.length === 0) {
        grid.innerHTML = \\\`<p class="col-span-full text-center py-20 text-slate-400 font-bold uppercase tracking-widest">No hay clientes asignados</p>\\\`;
      } else {
        grid.innerHTML = clientes.map(c => \\\`
          <a href="/cliente/\\\${c.id}" class="group bg-white p-8 rounded-[2.5rem] border border-slate-100 flex justify-between items-center shadow-sm hover:shadow-xl hover:border-blue-100 transition-all">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <span class="text-slate-400 font-black text-xl group-hover:text-blue-600">\\\${c.nombre.charAt(0)}</span>
              </div>
              <div>
                <p class="font-black text-slate-900 text-lg leading-none mb-1">\\\${c.nombre}</p>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">\\\${c.barrio || 'Sin barrio'}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-black text-blue-600 text-xl tracking-tight">$\\\${(c.saldo || 0).toLocaleString()}</p>
              <p class="text-[9px] font-black uppercase tracking-widest \\\${c.activo ? 'text-emerald-500' : 'text-slate-300'}">
                \\\${c.activo ? '\u25CF Al d\xEDa' : '\u25CF Finalizado'}
              </p>
            </div>
          </a>
        \\\`).join('');
      }

    } catch (error) {
      console.error(error);
      document.getElementById('cobrador-card').innerHTML = \\\`<p class="text-red-400 font-bold">Error al cargar datos del servidor</p>\\\`;
    }
  }

  // L\xD3GICA DEL BOT\xD3N EDITAR (Abre el Modal)
  document.getElementById('editBtn')?.addEventListener('click', () => {
    if (!datosCobradorActual) return;
    
    // Inyectamos los datos en el modal antes de mostrarlo
    const inputNombre = document.getElementById('edit-nombre');
    const inputZona = document.getElementById('edit-zona');
    
    if (inputNombre) inputNombre.value = datosCobradorActual.nombre;
    if (inputZona) inputZona.value = datosCobradorActual.zona;
    
    const modal = document.getElementById('modal-editar-cobrador');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  });

  loadCobradorData();
})();<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Perfil de Cobrador - CobroDigital" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-6 py-10"> <div class="flex justify-between items-center mb-10"> <a href="/dashboard" class="flex items-center gap-2 text-slate-400 font-black hover:text-blue-600 transition-all uppercase tracking-widest text-[10px]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "w-5 h-5" })} Volver al Panel
</a> <div class="flex gap-3"> <button id="deleteBtn" class="group bg-white text-slate-400 p-4 rounded-2xl border border-slate-100 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:trash-2", "class": "w-6 h-6 group-hover:scale-110 transition-transform" })} </button> <button id="editBtn" class="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all uppercase tracking-widest text-xs"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:user-cog", "class": "w-5 h-5" })} Editar Perfil
</button> </div> </div> <div id="cobrador-card" class="bg-slate-900 rounded-[3.5rem] p-12 text-white mb-12 relative overflow-hidden min-h-[350px] flex items-center shadow-2xl shadow-slate-900/20"> <div id="card-loader" class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div> <div id="card-content" class="hidden w-full relative z-10"></div> <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div> </div> <div class="space-y-8"> <div class="flex items-center justify-between px-2"> <div class="flex items-center gap-4"> <div class="bg-blue-600 w-2 h-8 rounded-full"></div> <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight">Cartera Asignada</h2> </div> <span id="client-count" class="text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-5 py-2.5 rounded-full uppercase tracking-widest">
Cargando Clientes...
</span> </div> <div id="clientes-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6"> <div class="bg-white h-32 rounded-[2rem] animate-pulse border border-slate-50"></div> <div class="bg-white h-32 rounded-[2rem] animate-pulse border border-slate-50"></div> </div> </div> </div> ${renderComponent($$result2, "ModalEditarCobrador", $$ModalEditarCobrador, { "username": id })} ` }), defineScriptVars({ id }));
}, "C:/Users/adolf/Downloads/cobro_digital/client/src/pages/cobrador/[id].astro", void 0);

const $$file = "C:/Users/adolf/Downloads/cobro_digital/client/src/pages/cobrador/[id].astro";
const $$url = "/cobrador/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
