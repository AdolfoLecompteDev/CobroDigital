const r=JSON.parse(localStorage.getItem("currentUser"));r||(window.location.href="/");const i=document.getElementById("stats-container"),c=document.getElementById("cobradores-container"),d=document.getElementById("btn-nuevo-cobrador"),s=document.getElementById("grid-clientes"),n=document.getElementById("list-title");r.role==="admin"?(i?.classList.remove("hidden"),c?.classList.remove("hidden"),d?.classList.remove("hidden"),document.getElementById("role-text").innerText="Admin Master",document.getElementById("role-icon").classList.add("bg-emerald-500"),n.innerText="Cartera Global"):(document.getElementById("role-text").innerText=`Ruta: ${r.nombre||r.username}`,document.getElementById("role-icon").classList.add("bg-blue-500"),n.innerText="Mi Listado de Cobro");async function u(){try{const t=r.role==="admin"?"http://localhost:8000/clientes":`http://localhost:8000/clientes?cobrador_id=${r.username}`,[o,e]=await Promise.all([fetch(t),r.role==="admin"?fetch("http://localhost:8000/cobradores"):Promise.resolve(null)]),l=await o.json();if(b(l),e){const a=await e.json();g(a)}}catch{s.innerHTML='<div class="col-span-full text-center py-10 bg-red-50 rounded-3xl text-red-500 text-[10px] font-black uppercase tracking-widest">Error de Sincronización</div>'}}function b(t){const o=document.getElementById("client-badge");o.innerText=`${t.length} CLIENTES`,o.classList.remove("hidden"),s.innerHTML=t.map(e=>`
      <div class="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/5 transition-all group flex flex-col justify-between min-h-[260px]">
        <div>
          <div class="flex justify-between items-start mb-4">
            <div class="bg-slate-50 text-slate-400 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div class="text-right">
              <p class="text-[8px] font-black text-slate-300 uppercase tracking-tighter">Cuota</p>
              <p class="text-sm font-black text-slate-900">$${(e.cuota||0).toLocaleString()}</p>
            </div>
          </div>
          <h3 class="text-lg font-black text-slate-800 leading-tight mb-1 group-hover:text-blue-600 transition-colors">${e.nombre}</h3>
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-tight truncate">${e.barrio}</p>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-50 flex items-end justify-between">
          <div>
            <p class="text-[8px] text-slate-300 uppercase font-black mb-1">Saldo</p>
            <p class="text-xl font-black text-slate-900">$${e.saldo.toLocaleString()}</p>
          </div>
          <a href="/cliente/${e.id}" class="bg-slate-900 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg active:scale-90">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `).join("")}function g(t){const o=document.getElementById("lista-cobradores");o&&(o.innerHTML=t.map(e=>`
      <a href="/cobrador/${e.username}" class="bg-white rounded-2xl p-4 border border-slate-100 hover:border-blue-200 transition-all flex items-center gap-4 group">
        <div class="bg-blue-50 text-blue-600 p-2.5 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        </div>
        <div class="overflow-hidden">
          <p class="text-xs font-black text-slate-900 truncate">${e.nombre}</p>
          <p class="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">${e.zona||"Sin Zona"}</p>
        </div>
      </a>
    `).join(""))}document.getElementById("logout-btn").onclick=()=>{localStorage.removeItem("currentUser"),window.location.href="/"};u();
