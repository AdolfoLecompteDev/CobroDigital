/* empty css                                   */
import { e as createComponent, r as renderTemplate, k as defineScriptVars, l as renderComponent, g as addAttribute, m as maybeRenderHead, h as createAstro } from '../../chunks/astro/server_CKbJxenY.mjs';
import 'piccolore';
import { $ as $$Icon, a as $$Layout } from '../../chunks/Layout_CArJpYBf.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$2 = createAstro();
const $$ModalCobro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ModalCobro;
  const { clienteNombre, cuotaSugerida, clienteId } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div id="modal-cobro" class="fixed inset-0 z-[100] hidden"> <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" id="close-modal-bg"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6"> <div class="bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-300"> <div class="bg-blue-600 p-8 text-white relative"> <button id="close-modal-btn" class="absolute top-6 right-6 hover:rotate-90 transition-transform p-1"> ', ' </button> <div class="flex items-center gap-4"> <div class="bg-white/20 p-3 rounded-2xl"> ', ' </div> <div> <h3 class="text-2xl font-black tracking-tight leading-none">Registrar Cobro</h3> <p id="modal-cliente-nombre" class="text-blue-100 text-xs mt-2 uppercase font-bold tracking-widest">', '</p> </div> </div> </div> <form class="p-10 space-y-8" id="form-cobro"> <div class="space-y-3"> <div class="flex justify-between items-center px-4"> <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">Monto Recibido</label> <span class="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Sugerido: $', '</span> </div> <div class="relative group"> <span class="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-300 group-focus-within:text-blue-600">$</span> <input type="number" name="monto" id="monto-input"', ' step="any" class="w-full pl-12 pr-6 py-6 bg-slate-50 border-2 border-transparent rounded-[2rem] text-4xl font-black text-slate-900 outline-none focus:bg-white focus:border-blue-600 transition-all" required> </div> <p class="text-[10px] text-slate-400 text-center font-medium italic">Puedes editar el monto si el cliente paga una cantidad diferente.</p> </div> <div id="modal-error" class="hidden text-red-600 text-[10px] font-black uppercase tracking-tighter text-center bg-red-50 p-4 rounded-2xl border border-red-100"></div> <button type="submit" id="btn-guardar-pago" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 transition-all active:scale-95 disabled:opacity-50 shadow-xl shadow-blue-100"> ', ' <span id="text-btn">CONFIRMAR PAGO</span> </button> </form> </div> </div> </div> <script>(function(){', `
  const modal = document.getElementById('modal-cobro');
  const openBtn = document.getElementById('open-modal-btn');
  const closeBtn = document.getElementById('close-modal-btn');
  const closeBg = document.getElementById('close-modal-bg');
  const formCobro = document.getElementById('form-cobro');
  const btnGuardar = document.getElementById('btn-guardar-pago');
  const modalError = document.getElementById('modal-error');
  const textBtn = document.getElementById('text-btn');

  // Abrir modal
  openBtn?.addEventListener('click', () => {
    modal?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  const cerrar = () => {
    modal?.classList.add('hidden');
    document.body.style.overflow = 'auto';
    if (modalError) modalError.classList.add('hidden');
  };

  closeBtn?.addEventListener('click', cerrar);
  closeBg?.addEventListener('click', cerrar);

  // Env\xEDo al backend
  formCobro?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(formCobro);
    const montoEnviado = Number(formData.get('monto'));

    if (montoEnviado <= 0) {
      if (modalError) {
        modalError.innerText = "\u274C EL MONTO DEBE SER MAYOR A 0";
        modalError.classList.remove('hidden');
      }
      return;
    }

    btnGuardar.disabled = true;
    if (textBtn) textBtn.innerText = "PROCESANDO COBRO...";

    try {
      const response = await fetch('http://localhost:8000/pagar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cliente_id: Number(clienteId),
          monto: montoEnviado,
          comentario: "Abono flexible"
        })
      });

      if (response.ok) {
        btnGuardar.classList.replace('bg-blue-600', 'bg-emerald-500');
        btnGuardar.classList.add('shadow-emerald-200');
        if (textBtn) textBtn.innerText = "\xA1PAGO REGISTRADO!";
        
        setTimeout(() => {
          window.location.reload(); 
        }, 1000);
      } else {
        const errData = await response.json();
        throw new Error(errData.detail || "Error al registrar pago");
      }
    } catch (err) {
      if (modalError) {
        modalError.innerText = "\u274C " + err.message;
        modalError.classList.remove('hidden');
      }
      btnGuardar.disabled = false;
      if (textBtn) textBtn.innerText = "REINTENTAR COBRO";
    }
  });
})();<\/script>`])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "lucide:x", "class": "w-8 h-8" }), renderComponent($$result, "Icon", $$Icon, { "name": "lucide:banknote", "class": "w-8 h-8" }), clienteNombre, cuotaSugerida, addAttribute(cuotaSugerida, "value"), renderComponent($$result, "Icon", $$Icon, { "name": "lucide:check-circle", "class": "w-7 h-7" }), defineScriptVars({ clienteId }));
}, "C:/Users/adolf/Downloads/cobro_digital/client/src/components/ModalCobro.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$ModalNuevaDeuda = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ModalNuevaDeuda;
  const { clienteId } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="modal-nueva-deuda" class="fixed inset-0 z-[100] hidden"> <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" id="close-deuda-bg"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6"> <div class="bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-300"> <div class="bg-slate-900 p-8 text-white relative"> <button id="close-deuda-btn" class="absolute top-6 right-6 hover:rotate-90 transition-transform"> ', ' </button> <div class="flex items-center gap-4"> <div class="bg-emerald-500 p-3 rounded-2xl"> ', ' </div> <div> <h3 class="text-2xl font-black tracking-tight leading-none">Nueva Deuda</h3> <p class="text-slate-400 text-[10px] mt-2 uppercase font-bold tracking-widest">Reactivar Financiamiento</p> </div> </div> </div> <form class="p-10 space-y-6" id="form-nueva-deuda"> <div class="space-y-2"> <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nuevo Capital</label> <input type="number" name="saldo" placeholder="Ej: 5000" class="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-2xl text-2xl font-black focus:bg-white focus:border-emerald-500 outline-none transition-all" required> </div> <div class="space-y-2"> <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nueva Tasa (%)</label> <input type="number" name="interes" placeholder="Ej: 20" class="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-2xl text-2xl font-black focus:bg-white focus:border-emerald-500 outline-none transition-all" required> </div> <button type="submit" id="btn-confirmar-deuda" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 rounded-[2rem] font-black text-xl transition-all active:scale-95 shadow-xl shadow-emerald-100">\nREACTIVAR CLIENTE\n</button> </form> </div> </div> </div> <script>(function(){', `
  const modal = document.getElementById('modal-nueva-deuda');
  const btnAbrir = document.getElementById('btn-nueva-deuda');
  const btnCerrar = document.getElementById('close-deuda-btn');
  const bgCerrar = document.getElementById('close-deuda-bg');
  const form = document.getElementById('form-nueva-deuda');

  btnAbrir?.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  const cerrar = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  [btnCerrar, bgCerrar].forEach(el => el?.addEventListener('click', cerrar));

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    
    // Obtenemos los datos actuales del cliente para no borrarlos (direcci\xF3n, etc)
    // En una app real podr\xEDas pedir solo monto e inter\xE9s y que el backend maneje el resto
    try {
      const res = await fetch(\`http://localhost:8000/clientes/\${clienteId}/nueva-deuda\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          saldo: Number(data.saldo),
          interes: Number(data.interes),
          // Enviamos placeholders para los campos obligatorios del esquema ClienteCreate
          nombre: document.getElementById('view-nombre').innerText,
          barrio: document.getElementById('view-barrio').innerText,
          direccion: document.getElementById('view-direccion').innerText,
          telefono: document.getElementById('view-telefono').innerText,
          cobrador_id: "system" // No se cambia el cobrador
        })
      });

      if (res.ok) {
        alert("\u2705 Cliente reactivado correctamente");
        window.location.reload();
      } else {
        alert("\u274C Error al reactivar deuda");
      }
    } catch (err) {
      console.error(err);
    }
  });
})();<\/script>`], ["", '<div id="modal-nueva-deuda" class="fixed inset-0 z-[100] hidden"> <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" id="close-deuda-bg"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6"> <div class="bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-300"> <div class="bg-slate-900 p-8 text-white relative"> <button id="close-deuda-btn" class="absolute top-6 right-6 hover:rotate-90 transition-transform"> ', ' </button> <div class="flex items-center gap-4"> <div class="bg-emerald-500 p-3 rounded-2xl"> ', ' </div> <div> <h3 class="text-2xl font-black tracking-tight leading-none">Nueva Deuda</h3> <p class="text-slate-400 text-[10px] mt-2 uppercase font-bold tracking-widest">Reactivar Financiamiento</p> </div> </div> </div> <form class="p-10 space-y-6" id="form-nueva-deuda"> <div class="space-y-2"> <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nuevo Capital</label> <input type="number" name="saldo" placeholder="Ej: 5000" class="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-2xl text-2xl font-black focus:bg-white focus:border-emerald-500 outline-none transition-all" required> </div> <div class="space-y-2"> <label class="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nueva Tasa (%)</label> <input type="number" name="interes" placeholder="Ej: 20" class="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-2xl text-2xl font-black focus:bg-white focus:border-emerald-500 outline-none transition-all" required> </div> <button type="submit" id="btn-confirmar-deuda" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 rounded-[2rem] font-black text-xl transition-all active:scale-95 shadow-xl shadow-emerald-100">\nREACTIVAR CLIENTE\n</button> </form> </div> </div> </div> <script>(function(){', `
  const modal = document.getElementById('modal-nueva-deuda');
  const btnAbrir = document.getElementById('btn-nueva-deuda');
  const btnCerrar = document.getElementById('close-deuda-btn');
  const bgCerrar = document.getElementById('close-deuda-bg');
  const form = document.getElementById('form-nueva-deuda');

  btnAbrir?.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  const cerrar = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  [btnCerrar, bgCerrar].forEach(el => el?.addEventListener('click', cerrar));

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    
    // Obtenemos los datos actuales del cliente para no borrarlos (direcci\xF3n, etc)
    // En una app real podr\xEDas pedir solo monto e inter\xE9s y que el backend maneje el resto
    try {
      const res = await fetch(\\\`http://localhost:8000/clientes/\\\${clienteId}/nueva-deuda\\\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          saldo: Number(data.saldo),
          interes: Number(data.interes),
          // Enviamos placeholders para los campos obligatorios del esquema ClienteCreate
          nombre: document.getElementById('view-nombre').innerText,
          barrio: document.getElementById('view-barrio').innerText,
          direccion: document.getElementById('view-direccion').innerText,
          telefono: document.getElementById('view-telefono').innerText,
          cobrador_id: "system" // No se cambia el cobrador
        })
      });

      if (res.ok) {
        alert("\u2705 Cliente reactivado correctamente");
        window.location.reload();
      } else {
        alert("\u274C Error al reactivar deuda");
      }
    } catch (err) {
      console.error(err);
    }
  });
})();<\/script>`])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "lucide:x", "class": "w-8 h-8" }), renderComponent($$result, "Icon", $$Icon, { "name": "lucide:refresh-cw", "class": "w-8 h-8 text-white" }), defineScriptVars({ clienteId }));
}, "C:/Users/adolf/Downloads/cobro_digital/client/src/components/ModalNuevaDeuda.astro", void 0);

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
  async function loadData() {
    try {
      const resClientes = await fetch(\`http://localhost:8000/clientes\`);
      const clientes = await resClientes.json();
      const cliente = clientes.find(c => c.id == id);

      if (!cliente) return window.location.href = '/dashboard';

      const resPagos = await fetch(\`http://localhost:8000/pagos/\${id}\`);
      const pagos = await resPagos.json();

      // Rellenar UI
      document.getElementById('view-nombre').innerText = cliente.nombre;
      document.getElementById('view-barrio').innerText = cliente.barrio;
      document.getElementById('view-telefono').innerText = cliente.telefono || 'Sin registro';
      document.getElementById('view-direccion').innerText = cliente.direccion || 'Sin direcci\xF3n';
      
      let tasa = cliente.interes || 0;
      let saldo = cliente.saldo || 0;

      // C\xE1lculo de utilidad (basado en el porcentaje guardado)
      let tasaParaCalculo = tasa > 100 ? 20 : tasa;
      const capitalOriginal = saldo / (1 + (tasaParaCalculo / 100));
      const ganancia = saldo - capitalOriginal;

      document.getElementById('view-tasa').innerText = \`\${tasa}%\`;
      document.getElementById('view-saldo').innerText = Math.round(saldo).toLocaleString('es-CO');
      document.getElementById('view-utilidad').innerText = \`$\${Math.round(ganancia).toLocaleString('es-CO')}\`;

      // Estado Badge
      const badge = document.getElementById('status-badge');
      badge.innerText = cliente.activo ? "Cuenta Activa" : "Pagado / Finalizado";
      badge.className = cliente.activo 
        ? "px-4 py-2 rounded-xl text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
        : "px-4 py-2 rounded-xl text-[10px] font-black uppercase bg-slate-500/20 text-slate-400 border border-slate-500/30";

      // Render Tabla de Pagos
      const tbody = document.getElementById('pagos-tbody');
      if (pagos && pagos.length > 0) {
        tbody.innerHTML = pagos.map(p => \`
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-10 py-6 text-sm">
              <div class="flex flex-col">
                <span class="font-bold">\${new Date(p.fecha).toLocaleDateString()}</span>
                <span class="text-[10px] text-slate-400 font-medium">\${new Date(p.fecha).toLocaleTimeString()}</span>
              </div>
            </td>
            <td class="px-10 py-6 text-center text-emerald-600 font-black text-lg">$\${p.monto.toLocaleString('es-CO')}</td>
            <td class="px-10 py-6 text-center text-slate-400 font-medium">$\${p.saldo_anterior.toLocaleString('es-CO')}</td>
            <td class="px-10 py-6 text-right">
              <span class="bg-blue-50 px-4 py-2 rounded-xl text-blue-700 font-black">
                $\${Math.max(0, p.saldo_anterior - p.monto).toLocaleString('es-CO')}
              </span>
            </td>
          </tr>
        \`).reverse().join(''); 
      } else {
        tbody.innerHTML = \`<tr><td colspan="4" class="p-20 text-center opacity-30 font-black uppercase text-xs tracking-widest text-slate-400">Sin movimientos registrados</td></tr>\`;
      }

      // L\xF3gica de Exportaci\xF3n a Excel (CSV con soporte para tildes)
      document.getElementById('exportExcelBtn')?.addEventListener('click', () => {
          let csvContent = "DATOS DEL CLIENTE\\n";
          csvContent += \`Nombre,\${cliente.nombre}\\n\`;
          csvContent += \`Barrio,\${cliente.barrio}\\n\`;
          csvContent += \`Saldo Actual,\${cliente.saldo}\\n\\n\`;
          csvContent += "HISTORIAL DE PAGOS\\n";
          csvContent += "Fecha,Hora,Abono,Saldo Anterior,Saldo Final\\n";

          if (pagos && pagos.length > 0) {
              pagos.forEach(p => {
                  const f = new Date(p.fecha);
                  const fila = [
                      f.toLocaleDateString(),
                      f.toLocaleTimeString(),
                      p.monto,
                      p.saldo_anterior,
                      (p.saldo_anterior - p.monto)
                  ].join(",");
                  csvContent += fila + "\\n";
              });
          }

          const blob = new Blob(["\\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute("download", \`Expediente_\${cliente.nombre.replace(/\\s+/g, '_')}.csv\`);
          link.click();
      });

      document.getElementById('loading-state').classList.add('hidden');
      document.getElementById('cliente-content').classList.remove('hidden');

    } catch (e) {
      console.error(e);
      document.getElementById('loading-state').innerHTML = \`<p class="text-red-500 font-bold">Error de conexi\xF3n con el servidor</p>\`;
    }
  }

  loadData();
})();<\/script>`], ["", " <script>(function(){", `
  async function loadData() {
    try {
      const resClientes = await fetch(\\\`http://localhost:8000/clientes\\\`);
      const clientes = await resClientes.json();
      const cliente = clientes.find(c => c.id == id);

      if (!cliente) return window.location.href = '/dashboard';

      const resPagos = await fetch(\\\`http://localhost:8000/pagos/\\\${id}\\\`);
      const pagos = await resPagos.json();

      // Rellenar UI
      document.getElementById('view-nombre').innerText = cliente.nombre;
      document.getElementById('view-barrio').innerText = cliente.barrio;
      document.getElementById('view-telefono').innerText = cliente.telefono || 'Sin registro';
      document.getElementById('view-direccion').innerText = cliente.direccion || 'Sin direcci\xF3n';
      
      let tasa = cliente.interes || 0;
      let saldo = cliente.saldo || 0;

      // C\xE1lculo de utilidad (basado en el porcentaje guardado)
      let tasaParaCalculo = tasa > 100 ? 20 : tasa;
      const capitalOriginal = saldo / (1 + (tasaParaCalculo / 100));
      const ganancia = saldo - capitalOriginal;

      document.getElementById('view-tasa').innerText = \\\`\\\${tasa}%\\\`;
      document.getElementById('view-saldo').innerText = Math.round(saldo).toLocaleString('es-CO');
      document.getElementById('view-utilidad').innerText = \\\`$\\\${Math.round(ganancia).toLocaleString('es-CO')}\\\`;

      // Estado Badge
      const badge = document.getElementById('status-badge');
      badge.innerText = cliente.activo ? "Cuenta Activa" : "Pagado / Finalizado";
      badge.className = cliente.activo 
        ? "px-4 py-2 rounded-xl text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
        : "px-4 py-2 rounded-xl text-[10px] font-black uppercase bg-slate-500/20 text-slate-400 border border-slate-500/30";

      // Render Tabla de Pagos
      const tbody = document.getElementById('pagos-tbody');
      if (pagos && pagos.length > 0) {
        tbody.innerHTML = pagos.map(p => \\\`
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-10 py-6 text-sm">
              <div class="flex flex-col">
                <span class="font-bold">\\\${new Date(p.fecha).toLocaleDateString()}</span>
                <span class="text-[10px] text-slate-400 font-medium">\\\${new Date(p.fecha).toLocaleTimeString()}</span>
              </div>
            </td>
            <td class="px-10 py-6 text-center text-emerald-600 font-black text-lg">$\\\${p.monto.toLocaleString('es-CO')}</td>
            <td class="px-10 py-6 text-center text-slate-400 font-medium">$\\\${p.saldo_anterior.toLocaleString('es-CO')}</td>
            <td class="px-10 py-6 text-right">
              <span class="bg-blue-50 px-4 py-2 rounded-xl text-blue-700 font-black">
                $\\\${Math.max(0, p.saldo_anterior - p.monto).toLocaleString('es-CO')}
              </span>
            </td>
          </tr>
        \\\`).reverse().join(''); 
      } else {
        tbody.innerHTML = \\\`<tr><td colspan="4" class="p-20 text-center opacity-30 font-black uppercase text-xs tracking-widest text-slate-400">Sin movimientos registrados</td></tr>\\\`;
      }

      // L\xF3gica de Exportaci\xF3n a Excel (CSV con soporte para tildes)
      document.getElementById('exportExcelBtn')?.addEventListener('click', () => {
          let csvContent = "DATOS DEL CLIENTE\\\\n";
          csvContent += \\\`Nombre,\\\${cliente.nombre}\\\\n\\\`;
          csvContent += \\\`Barrio,\\\${cliente.barrio}\\\\n\\\`;
          csvContent += \\\`Saldo Actual,\\\${cliente.saldo}\\\\n\\\\n\\\`;
          csvContent += "HISTORIAL DE PAGOS\\\\n";
          csvContent += "Fecha,Hora,Abono,Saldo Anterior,Saldo Final\\\\n";

          if (pagos && pagos.length > 0) {
              pagos.forEach(p => {
                  const f = new Date(p.fecha);
                  const fila = [
                      f.toLocaleDateString(),
                      f.toLocaleTimeString(),
                      p.monto,
                      p.saldo_anterior,
                      (p.saldo_anterior - p.monto)
                  ].join(",");
                  csvContent += fila + "\\\\n";
              });
          }

          const blob = new Blob(["\\\\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute("download", \\\`Expediente_\\\${cliente.nombre.replace(/\\\\s+/g, '_')}.csv\\\`);
          link.click();
      });

      document.getElementById('loading-state').classList.add('hidden');
      document.getElementById('cliente-content').classList.remove('hidden');

    } catch (e) {
      console.error(e);
      document.getElementById('loading-state').innerHTML = \\\`<p class="text-red-500 font-bold">Error de conexi\xF3n con el servidor</p>\\\`;
    }
  }

  loadData();
})();<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Expediente de Cliente - CobroDigital" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto px-6 py-12"> <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"> <a href="/dashboard" class="inline-flex items-center gap-2 text-slate-500 font-black hover:text-blue-600 transition-colors text-sm uppercase tracking-widest"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "w-5 h-5" })}
Volver al Tablero
</a> <div class="flex gap-3"> <button id="exportExcelBtn" class="flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:file-spreadsheet", "class": "w-4 h-4" })}
Exportar Movimientos
</button> <button id="btn-nueva-deuda" class="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:plus-circle", "class": "w-4 h-4" })}
Nueva Deuda
</button> </div> </div> <div id="loading-state" class="flex justify-center py-20"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div> </div> <div id="cliente-content" class="hidden flex flex-col gap-10"> <section class="bg-white rounded-[3rem] shadow-sm border border-slate-200 overflow-hidden"> <div class="bg-slate-900 px-10 py-7 flex justify-between items-center text-white"> <div class="flex items-center gap-4"> <div class="bg-blue-600 p-3 rounded-2xl"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:user", "class": "w-8 h-8 text-white" })} </div> <div> <h2 id="view-nombre" class="font-black text-2xl tracking-tight leading-none">---</h2> <p class="text-slate-400 text-xs mt-1 font-bold uppercase tracking-widest">Expediente ID: ${id}</p> </div> </div> <div id="status-badge" class="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"></div> </div> <div class="p-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-slate-100"> <div class="flex flex-col gap-1"> <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Contacto</span> <span id="view-telefono" class="text-lg font-bold text-blue-600">---</span> </div> <div class="flex flex-col gap-1"> <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Barrio / Sector</span> <span id="view-barrio" class="text-lg font-bold text-slate-700">---</span> </div> <div class="flex flex-col md:col-span-2 gap-1"> <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dirección Detallada</span> <span id="view-direccion" class="text-lg font-medium text-slate-500 italic leading-snug">---</span> </div> </div> <div class="bg-blue-50/50 px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-8"> <div> <p class="text-blue-900 font-black uppercase text-[10px] tracking-widest mb-1">Saldo Total a Cobrar</p> <div class="flex items-baseline gap-1"> <span class="text-blue-600 font-bold text-xl">$</span> <span id="view-saldo" class="text-5xl font-black text-blue-700 tracking-tighter">0</span> </div> </div> <div class="flex gap-4"> <div class="bg-white px-6 py-4 rounded-3xl border border-blue-100 shadow-sm text-center min-w-[120px]"> <p class="text-slate-400 font-black uppercase text-[9px] tracking-widest">Tasa Pactada</p> <p id="view-tasa" class="text-2xl font-black text-slate-800 tracking-tighter">0%</p> </div> <div class="bg-white px-6 py-4 rounded-3xl border border-emerald-100 shadow-sm text-center min-w-[140px]"> <p class="text-emerald-400 font-black uppercase text-[9px] tracking-widest">Utilidad Estimada</p> <p id="view-utilidad" class="text-2xl font-black text-emerald-600 tracking-tighter">$0</p> </div> </div> </div> </section> <section class="bg-white rounded-[3rem] shadow-sm border border-slate-200 overflow-hidden"> <div class="px-10 py-8 border-b border-slate-100 flex items-center justify-between"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:history", "class": "w-6 h-6 text-blue-600" })} <h3 class="font-black text-slate-900 uppercase text-sm tracking-widest">Historial de Pagos</h3> </div> </div> <div class="overflow-x-auto"> <table class="w-full text-left"> <thead> <tr class="bg-slate-50 text-[10px] text-slate-400 font-black uppercase tracking-widest"> <th class="px-10 py-6">Fecha y Hora</th> <th class="px-10 py-6 text-center">Abono</th> <th class="px-10 py-6 text-center">Saldo Anterior</th> <th class="px-10 py-6 text-right">Saldo Final</th> </tr> </thead> <tbody id="pagos-tbody" class="divide-y divide-slate-100 font-bold text-slate-700"></tbody> </table> </div> </section> <div class="flex justify-center pb-12"> <button id="open-modal-btn" class="group bg-blue-600 hover:bg-blue-700 text-white font-black px-16 py-6 rounded-[2.5rem] shadow-2xl shadow-blue-200 flex items-center gap-4 transition-all active:scale-95 text-xl uppercase tracking-widest"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:circle-dollar-sign", "class": "w-8 h-8 group-hover:rotate-12 transition-transform" })}
Registrar Cobro
</button> </div> </div> </div> ${renderComponent($$result2, "ModalCobro", $$ModalCobro, { "clienteId": id, "clienteNombre": "Cargando...", "cuotaSugerida": 0 })} ${renderComponent($$result2, "ModalNuevaDeuda", $$ModalNuevaDeuda, { "clienteId": id })} ` }), defineScriptVars({ id }));
}, "C:/Users/adolf/Downloads/cobro_digital/client/src/pages/cliente/[id].astro", void 0);

const $$file = "C:/Users/adolf/Downloads/cobro_digital/client/src/pages/cliente/[id].astro";
const $$url = "/cliente/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
