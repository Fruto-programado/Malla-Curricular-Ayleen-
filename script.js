// Malla: cada objeto representa un semestre, cada ramo tiene id, nombre, dependencias
const malla = [
  {
    titulo: "1° Semestre",
    ramos: [
      { id: 'intro_psico', nombre: "Introducción a la psicología", abre: ['bases_personalidad','fund_epistemologia'] },
      { id: 'neurofisio', nombre: "Neurofisiología", abre: ['neuro_cog'] },
      { id: 'etica', nombre: "Ética y deontología en la psicología" },
      { id: 'metodo1', nombre: "Metodología de la investigación I", abre: ['metodo2'] }
    ]
  },
  {
    titulo: "2° Semestre",
    ramos: [
      { id: 'ciclo_infanto', nombre: "Ciclo evolutivo infanto juvenil", abre: ['ciclo_adulto'] },
      { id: 'bases_personalidad', nombre: "Bases de la personalidad", requiere: ['intro_psico'], abre: ['proc_afectivos','semiologia'] },
      { id: 'neuro_cog', nombre: "Neurociencia cognitiva", requiere: ['neurofisio'], abre: ['proc_cognitivos'] },
      { id: 'fund_epistemologia', nombre: "Fundamentos epistemológicos del comportamiento humano", requiere: ['intro_psico'], abre: ['psico_social'] },
      { id: 'metodo2', nombre: "Metodología de la investigación II", requiere: ['metodo1'], abre: ['tecnicas_recoleccion'] },
      { id: 'ingles_basico', nombre: "Inglés básico", abre: ['ingles_tecnico'] }
    ]
  },
  {
    titulo: "3° Semestre",
    ramos: [
      { id: 'ciclo_adulto', nombre: "Ciclo evolutivo adulto", requiere: ['ciclo_infanto'], abre: ['clinica_adultos'] },
      { id: 'proc_afectivos', nombre: "Procesos afectivos y motivacionales", requiere: ['bases_personalidad'], abre: ['genero'] },
      { id: 'proc_cognitivos', nombre: "Procesos cognitivos", requiere: ['neuro_cog'], abre: ['proc_aprendizaje'] },
      { id: 'semiologia', nombre: "Semiología de la patología mental", requiere: ['bases_personalidad'], abre: ['estructuras_clinicas','clinica_adultos'] },
      { id: 'psico_social', nombre: "Psicología social", requiere: ['fund_epistemologia'], abre: ['psico_comunitaria'] },
      { id: 'tecnicas_recoleccion', nombre: "Técnicas de recolección de datos", requiere: ['metodo2'], abre: ['mod_integrador','tesis1'] }
    ]
  },
  {
    titulo: "4° Semestre",
    ramos: [
      { id: 'proc_aprendizaje', nombre: "Procesos de aprendizaje", requiere: ['proc_cognitivos'], abre: ['psico_educacional'] },
      { id: 'estructuras_clinicas', nombre: "Estructuras clínicas y trastornos de la personalidad", requiere: ['semiologia'], abre: ['enfoques_terapia1'] },
      { id: 'genero', nombre: "Género, identidad y diversidad", requiere: ['proc_afectivos'] },
      { id: 'psico_comunitaria', nombre: "Psicología comunitaria", requiere: ['psico_social'], abre: ['psico_juridica'] },
      { id: 'mod_integrador', nombre: "Módulo integrador inicial: elaboración de proyectos", requiere: ['tecnicas_recoleccion'] }
    ]
  },
  // ... sigue igual con los siguientes semestres ...
  // Agrega el resto siguiendo el patrón, o dime si quieres que te lo complete hasta 10 semestres
];

// Estado de ramos aprobados (localStorage)
const storageKey = 'malla_psico_aprobada';
let aprobados = JSON.parse(localStorage.getItem(storageKey) || '{}');

function isDesbloqueado(ramo) {
  if (!ramo.requiere) return true;
  return ramo.requiere.every(id => aprobados[id]);
}

// Render
function renderMalla() {
  const cont = document.getElementById('contenedor-malla');
  cont.innerHTML = '';
  malla.forEach((semestre, semIdx) => {
    const card = document.createElement('div');
    card.className = 'semestre-card';
    card.innerHTML = `<div class="semestre-titulo">${semestre.titulo}</div>`;
    semestre.ramos.forEach(ramo => {
      const desbloqueado = isDesbloqueado(ramo);
      const estaAprobado = !!aprobados[ramo.id];
      const btn = document.createElement('button');
      btn.className = 'ramo-btn' + (estaAprobado ? ' aprobado' : '') + (desbloqueado ? '' : ' bloqueado');
      btn.innerHTML = `
        ${ramo.nombre}
        <span class="check">${estaAprobado ? '✔️' : ''}</span>
      `;
      btn.onclick = () => {
        if (!desbloqueado) return;
        if (estaAprobado) {
          delete aprobados[ramo.id];
        } else {
          aprobados[ramo.id] = true;
        }
        localStorage.setItem(storageKey, JSON.stringify(aprobados));
        renderMalla();
      };
      card.appendChild(btn);
    });
    cont.appendChild(card);
  });
}

window.onload = renderMalla;
