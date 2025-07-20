const malla = [
  // ... (copiar la definición completa de la malla del ejemplo anterior aquí) ...
  // Puedes usar exactamente el bloque del ejemplo anterior, ¡ya está ajustado!
];

// Guardado en localStorage
const storageKey = 'mallaAprobada';
let aprobados = JSON.parse(localStorage.getItem(storageKey) || '{}');

function isRamoDesbloqueado(ramo) {
  if (!ramo.requiere) return true;
  return ramo.requiere.every(id => aprobados[id]);
}
function renderMalla() {
  const colores = ['', 'pastel2', 'pastel3', 'pastel4', 'pastel5', 'pastel6', 'pastel7', 'pastel8'];
  const container = document.getElementById('malla');
  container.innerHTML = '';
  malla.forEach((semestreObj, i) => {
    const divSem = document.createElement('div');
    divSem.className = 'semestre';
    divSem.innerHTML = `<h2>${semestreObj.semestre}</h2>`;
    semestreObj.ramos.forEach((ramo, j) => {
      const pastel = colores[(j % colores.length) || 1];
      const estaAprobado = !!aprobados[ramo.id];
      const desbloqueado = isRamoDesbloqueado(ramo);
      const divRamo = document.createElement('div');
      divRamo.className = `ramo ${pastel}` +
        (desbloqueado ? '' : ' bloqueado') +
        (estaAprobado ? ' aprobado' : '');
      divRamo.dataset.id = ramo.id;

      // Check
      const check = document.createElement('span');
      check.className = 'check';
      check.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 12l4 4 8-8" stroke="#279d47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      divRamo.appendChild(check);

      // Nombre y detalle
      const info = document.createElement('div');
      info.className = 'nombre';
      info.textContent = ramo.nombre;
      divRamo.appendChild(info);

      // Detalle de requisitos y abre
      if (ramo.requiere || ramo.abre) {
        const detalle = document.createElement('div');
        detalle.className = 'detalle';
        if (ramo.requiere) {
          detalle.innerHTML += `<b>Requiere:</b> ${ramo.requiere.map(id => getNombreById(id)).join(', ')}<br>`;
        }
        if (ramo.abre) {
          detalle.innerHTML += `<b>Abre:</b> ${ramo.abre.map(id => getNombreById(id)).join(', ')}`;
        }
        divRamo.appendChild(detalle);
      }

      // Click para aprobar/desaprobar
      if (desbloqueado) {
        divRamo.onclick = () => {
          if (aprobados[ramo.id]) {
            delete aprobados[ramo.id];
          } else {
            aprobados[ramo.id] = true;
          }
          localStorage.setItem(storageKey, JSON.stringify(aprobados));
          renderMalla();
        }
      }

      divSem.appendChild(divRamo);
    });
    container.appendChild(divSem);
  });
}

// Buscar nombre de ramo por ID
function getNombreById(id) {
  for (const semestreObj of malla) {
    for (const ramo of semestreObj.ramos) {
      if (ramo.id === id) return ramo.nombre;
    }
  }
  return id;
}

window.onload = renderMalla;
