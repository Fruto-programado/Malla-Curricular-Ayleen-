const malla = [
  // Primer año
  {
    titulo: "1° Semestre",
    ramos: [
      { id: 'intro_psico', nombre: "Introducción a la psicología", abre: ['bases_personalidad', 'fund_epistemologia'] },
      { id: 'neurofisio', nombre: "Neurofisiología", abre: ['neuro_cog'] },
      { id: 'etica', nombre: "Ética y deontología en la psicología" },
      { id: 'metodo1', nombre: "Metodología de la investigación I", abre: ['metodo2'] },
      { id: 'tecnologia', nombre: "Tecnología e innovación" }
    ]
  },
  {
    titulo: "2° Semestre",
    ramos: [
      { id: 'ciclo_infanto', nombre: "Ciclo evolutivo infanto juvenil", abre: ['ciclo_adulto'] },
      { id: 'bases_personalidad', nombre: "Bases de la personalidad", abre: ['procesos_afectivos', 'simiopatologia'] },
      { id: 'neuro_cog', nombre: "Neurociencia cognitiva", abre: ['procesos_cognitivos'] },
      { id: 'fund_epistemologia', nombre: "Fundamentos epistemológicos del comportamiento humano", abre: ['psico_social'] },
      { id: 'metodo2', nombre: "Metodología de la investigación II", abre: ['tecnicas_recoleccion'] }, // ACTUALIZADO
      { id: 'ingles_basico', nombre: "Inglés básico", abre: ['ingles_tecnico'] }
    ]
  },
  // Segundo año
  {
    titulo: "3° Semestre",
    ramos: [
      { id: 'ciclo_adulto', nombre: "Ciclo evolutivo adulto", abre: ['clinica_adulto'] },
      { id: 'procesos_afectivos', nombre: "Procesos afectivos y motivacionales", abre: ['genero_identidad'] },
      { id: 'procesos_cognitivos', nombre: "Procesos cognitivos", abre: ['procesos_aprendizaje'] },
      { id: 'simiopatologia', nombre: "Semiología de la patología mental", abre: ['estructuras_clinicas', 'clinica_adulto'] },
      { id: 'psico_social', nombre: "Psicología social", abre: ['psico_comunitaria'] },
      { id: 'tecnicas_recoleccion', nombre: "Técnicas de recolección de datos", abre: ['modulo_inicial', 'tesis1'] }
    ]
  },
  {
    titulo: "4° Semestre",
    ramos: [
      { id: 'procesos_aprendizaje', nombre: "Procesos de aprendizaje", abre: ['psico_educacional'] },
      { id: 'estructuras_clinicas', nombre: "Estructuras clínicas y trastornos de la personalidad", abre: ['enfoque_terapia1'] },
      { id: 'genero_identidad', nombre: "Género, identidad y diversidad" },
      { id: 'psico_comunitaria', nombre: "Psicología comunitaria", abre: ['psico_juridica'] },
      { id: 'modulo_inicial', nombre: "Módulo integrador inicial: elaboración de proyectos" }
    ]
  },
  // Tercer año
  {
    titulo: "5° Semestre",
    ramos: [
      { id: 'ciclo_familiar', nombre: "Ciclo vital familiar", abre: ['psicogerontologia'] },
      { id: 'psico_educacional', nombre: "Psicología educacional", abre: ['evaluacion_psicoeducativa'] },
      { id: 'psico_juridica', nombre: "Psicología jurídica", abre: ['diseno_gestion_psicosocial'] },
      { id: 'psico_trabajo', nombre: "Psicología del trabajo y las organizaciones", abre: ['atraccion_reclutamiento'] },
      { id: 'clinica_infanto', nombre: "Introducción a la clínica infanto juvenil", abre: ['psicodiag_infanto'] },
      { id: 'enfoque_terapia1', nombre: "Enfoques en terapias psicológica I", abre: ['enfoque_terapia2'] },
      { id: 'desarrollo_sostenible', nombre: "Desarrollo sostenible" }
    ]
  },
  {
    titulo: "6° Semestre",
    ramos: [
      { id: 'psicogerontologia', nombre: "Psicogerontología" },
      { id: 'evaluacion_psicoeducativa', nombre: "Evaluación psicoeducativa", abre: ['intervencion_psicoeducativa'] },
      { id: 'diseno_gestion_psicosocial', nombre: "Diseño y gestión de proyectos psicosociales" },
      { id: 'atraccion_reclutamiento', nombre: "Atracción, reclutamiento y selección de personas", abre: ['desarrollo_cambio_org'] },
      { id: 'clinica_adulto', nombre: "Introducción a la clínica adultos", abre: ['psicodiag_adulto'] },
      { id: 'enfoque_terapia2', nombre: "Enfoques de terapia psicológica II" },
      { id: 'ingles_tecnico', nombre: "Inglés técnico" }
    ]
  },
  // Cuarto año
  {
    titulo: "7° Semestre",
    ramos: [
      { id: 'intervencion_psicoeducativa', nombre: "Intervención psicoeducativa" },
      { id: 'desarrollo_cambio_org', nombre: "Desarrollo y cambio organizacional", abre: ['gestion_personas'] },
      { id: 'psicodiag_adulto', nombre: "Psicodiagnóstico en psicología adulto", abre: ['intervencion_adulto'] },
      { id: 'psicodiag_infanto', nombre: "Psicodiagnóstico en psicología infanti juvenil", abre: ['intervencion_infanto'] },
      { id: 'tesis1', nombre: "Tesis de licenciatura en psicología I", abre: ['integrador_intermedio'] },
      { id: 'responsabilidad_social', nombre: "Responsabilidad social y emprendimiento" }
    ]
  },
  {
    titulo: "8° Semestre",
    ramos: [
      { id: 'gestion_personas', nombre: "Gestión estratégica de personas", abre: ['electivo1'] },
      { id: 'intervencion_adulto', nombre: "Intervención en psicología adulto", abre: ['electivo1'] },
      { id: 'intervencion_infanto', nombre: "Intervención en psicología infanto juvenil", abre: ['electivo1'] },
      { id: 'integrador_intermedio', nombre: "Integrador intermedio: tesis de licenciatura en psicología II", abre: ['practica1'] },
      { id: 'vida_laboral', nombre: "Preparación para la vida laboral", abre: ['electivo1'] }
    ]
  },
  // Quinto año
  {
    titulo: "9° Semestre",
    ramos: [
      { id: 'practica1', nombre: "Práctica profesional I", abre: ['integrador_final'] },
      { id: 'electivo1', nombre: "Electivo de especialización profesional I", abre: ['electivo2'] }
    ]
  },
  {
    titulo: "10° Semestre",
    ramos: [
      { id: 'integrador_final', nombre: "Módulo integrador final práctica profesional II" },
      { id: 'electivo2', nombre: "Electivo de especialización profesional II" }
    ]
  }
];

// --- Render de la malla y lógica de desbloqueo ---

const idToBtn = {};
const aprobados = {};

function renderMalla() {
  const cont = document.getElementById('contenedor-malla');
  cont.innerHTML = '';
  malla.forEach((sem, idx) => {
    const card = document.createElement('div');
    card.className = 'semestre-card';
    card.innerHTML = `<div class="semestre-titulo">${sem.titulo}</div>`;
    sem.ramos.forEach(ramo => {
      const btn = document.createElement('button');
      btn.className = 'ramo-btn';
      btn.id = ramo.id;
      btn.innerHTML = `
        <span class="ramo-nombre">${ramo.nombre}</span>
        <span class="check">✔️</span>
      `;
      btn.onclick = () => toggleAprobado(ramo.id);
      card.appendChild(btn);
      idToBtn[ramo.id] = btn;
    });
    cont.appendChild(card);
  });
  actualizarEstado();
}

function toggleAprobado(id) {
  if (idToBtn[id].classList.contains('bloqueado')) return;
  aprobados[id] = !aprobados[id];
  actualizarEstado();
}

function actualizarEstado() {
  Object.values(idToBtn).forEach(btn => {
    btn.classList.remove('aprobado', 'bloqueado');
    btn.disabled = false;
  });

  malla[0].ramos.forEach(ramo => {
    if (!aprobados[ramo.id]) idToBtn[ramo.id].classList.remove('aprobado', 'bloqueado');
  });

  const desbloqueados = new Set(malla[0].ramos.map(r => r.id));
  let cambios = true;
  while (cambios) {
    cambios = false;
    malla.forEach(sem =>
      sem.ramos.forEach(ramo => {
        if (desbloqueados.has(ramo.id)) return;
        if (!ramo.abre) return;
        let requisitos = [];
        malla.forEach(s =>
          s.ramos.forEach(r => {
            if (r.abre && r.abre.includes(ramo.id)) requisitos.push(r.id);
          })
        );
        if (requisitos.every(rid => aprobados[rid])) {
          desbloqueados.add(ramo.id);
          cambios = true;
        }
      })
    );
  }

  Object.entries(idToBtn).forEach(([id, btn]) => {
    if (
