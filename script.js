// ----- Definición de la estructura de la malla y dependencias -----

const malla = [
  // Año 1
  {
    semestre: '1° Año - 1er Semestre',
    ramos: [
      {
        id: 'intro_psico',
        nombre: 'Introducción a la psicología',
        abre: ['bases_personalidad', 'fund_epistemologia']
      },
      {
        id: 'neurofisio',
        nombre: 'Neurofisiología',
        abre: ['neuro_cog']
      },
      {
        id: 'etica',
        nombre: 'Ética y deontología en la psicología'
      },
      {
        id: 'metodo1',
        nombre: 'Metodología de la investigación I',
        abre: ['metodo2']
      }
    ]
  },
  {
    semestre: '1° Año - 2do Semestre',
    ramos: [
      {
        id: 'ciclo_infanto',
        nombre: 'Ciclo evolutivo infanto juvenil',
        abre: ['ciclo_adulto']
      },
      {
        id: 'bases_personalidad',
        nombre: 'Bases de la personalidad',
        requiere: ['intro_psico'],
        abre: ['proc_afectivos', 'semiologia']
      },
      {
        id: 'neuro_cog',
        nombre: 'Neurociencia cognitiva',
        requiere: ['neurofisio'],
        abre: ['proc_cognitivos']
      },
      {
        id: 'fund_epistemologia',
        nombre: 'Fundamentos epistemológicos del comportamiento humano',
        requiere: ['intro_psico'],
        abre: ['psico_social']
      },
      {
        id: 'metodo2',
        nombre: 'Metodología de la investigación II',
        requiere: ['metodo1'],
        abre: ['tecnicas_recoleccion']
      },
      {
        id: 'ingles_basico',
        nombre: 'Inglés básico',
        abre: ['ingles_tecnico']
      }
    ]
  },
  // Año 2
  {
    semestre: '2° Año - 1er Semestre',
    ramos: [
      {
        id: 'ciclo_adulto',
        nombre: 'Ciclo evolutivo adulto',
        requiere: ['ciclo_infanto'],
        abre: ['clinica_adultos']
      },
      {
        id: 'proc_afectivos',
        nombre: 'Procesos afectivos y motivacionales',
        requiere: ['bases_personalidad'],
        abre: ['genero']
      },
      {
        id: 'proc_cognitivos',
        nombre: 'Procesos cognitivos',
        requiere: ['neuro_cog'],
        abre: ['proc_aprendizaje']
      },
      {
        id: 'semiologia',
        nombre: 'Semiología de la patología mental',
        requiere: ['bases_personalidad'],
        abre: ['estructuras_clinicas', 'clinica_adultos']
      },
      {
        id: 'psico_social',
        nombre: 'Psicología social',
        requiere: ['fund_epistemologia'],
        abre: ['psico_comunitaria']
      },
      {
        id: 'tecnicas_recoleccion',
        nombre: 'Técnicas de recolección de datos',
        requiere: ['metodo2'],
        abre: ['mod_integrador', 'tesis1']
      }
    ]
  },
  {
    semestre: '2° Año - 2do Semestre',
    ramos: [
      {
        id: 'proc_aprendizaje',
        nombre: 'Procesos de aprendizaje',
        requiere: ['proc_cognitivos'],
        abre: ['psico_educacional']
      },
      {
        id: 'estructuras_clinicas',
        nombre: 'Estructuras clínicas y trastornos de la personalidad',
        requiere: ['semiologia'],
        abre: ['enfoques_terapia1']
      },
      {
        id: 'genero',
        nombre: 'Género, identidad y diversidad',
        requiere: ['proc_afectivos']
      },
      {
        id: 'psico_comunitaria',
        nombre: 'Psicología comunitaria',
        requiere: ['psico_social'],
        abre: ['psico_juridica']
      },
      {
        id: 'mod_integrador',
        nombre: 'Módulo integrador inicial: elaboración de proyectos',
        requiere: ['tecnicas_recoleccion']
      }
    ]
  },
  // Año 3
  {
    semestre: '3° Año - 1er Semestre',
    ramos: [
      {
        id: 'ciclo_familiar',
        nombre: 'Ciclo vital familiar',
        abre: ['psicogeronto']
      },
      {
        id: 'psico_educacional',
        nombre: 'Psicología educacional',
        requiere: ['proc_aprendizaje'],
        abre: ['eval_psicoeducativa']
      },
      {
        id: 'psico_juridica',
        nombre: 'Psicología jurídica',
        requiere: ['psico_comunitaria'],
        abre: ['diseno_gestion']
      },
      {
        id: 'psico_trabajo',
        nombre: 'Psicología del trabajo y las organizaciones',
        abre: ['reclutamiento']
      },
      {
        id: 'clinica_infanto',
        nombre: 'Introducción a la clínica infanto juvenil',
        abre: ['psicodiag_infanto']
      },
      {
        id: 'enfoques_terapia1',
        nombre: 'Enfoques en terapias psicológica I',
        requiere: ['estructuras_clinicas'],
        abre: ['enfoques_terapia2']
      },
      {
        id: 'desarrollo_sost',
        nombre: 'Desarrollo sostenible'
      }
    ]
  },
  {
    semestre: '3° Año - 2do Semestre',
    ramos: [
      {
        id: 'psicogeronto',
        nombre: 'Psicogerontología',
        requiere: ['ciclo_familiar']
      },
      {
        id: 'eval_psicoeducativa',
        nombre: 'Evaluación psicoeducativa',
        requiere: ['psico_educacional'],
        abre: ['intervencion_psicoeducativa']
      },
      {
        id: 'diseno_gestion',
        nombre: 'Diseño y gestión de proyectos psicosociales',
        requiere: ['psico_juridica']
      },
      {
        id: 'reclutamiento',
        nombre: 'Atracción, reclutamiento y selección de personas',
        requiere: ['psico_trabajo'],
        abre: ['desarrollo_cambio_org']
      },
      {
        id: 'clinica_adultos',
        nombre: 'Introducción a la clínica adultos',
        requiere: ['ciclo_adulto', 'semiologia'],
        abre: ['psicodiag_adulto']
      },
      {
        id: 'enfoques_terapia2',
        nombre: 'Enfoques de terapia psicológica II',
        requiere: ['enfoques_terapia1']
      },
      {
        id: 'ingles_tecnico',
        nombre: 'Inglés técnico',
        requiere: ['ingles_basico']
      }
    ]
  },
  // Año 4
  {
    semestre: '4° Año - 1er Semestre',
    ramos: [
      {
        id: 'intervencion_psicoeducativa',
        nombre: 'Intervención psicoeducativa',
        requiere: ['eval_psicoeducativa']
      },
      {
        id: 'desarrollo_cambio_org',
        nombre: 'Desarrollo y cambio organizacional',
        requiere: ['reclutamiento'],
        abre: ['gestion_estrategica']
      },
      {
        id: 'psicodiag_adulto',
        nombre: 'Psicodiagnóstico en psicología adulto',
        requiere: ['clinica_adultos'],
        abre: ['intervencion_adulto']
      },
      {
        id: 'psicodiag_infanto',
        nombre: 'Psicodiagnóstico en psicología infanti juvenil',
        requiere: ['clinica_infanto'],
        abre: ['intervencion_infanto']
      },
      {
        id: 'tesis1',
        nombre: 'Tesis de licenciatura en psicología I',
        requiere: ['tecnicas_recoleccion'],
        abre: ['integrador_intermedio']
      },
      {
        id: 'responsabilidad_social',
        nombre: 'Responsabilidad social y emprendimiento'
      }
    ]
  },
  {
    semestre: '4° Año - 2do Semestre',
    ramos: [
      {
        id: 'gestion_estrategica',
        nombre: 'Gestión estratégica de personas',
        requiere: ['desarrollo_cambio_org'],
        abre: ['electivo1']
      },
      {
        id: 'intervencion_adulto',
        nombre: 'Intervención en psicología adulto',
        requiere: ['psicodiag_adulto'],
        abre: ['electivo1']
      },
      {
        id: 'intervencion_infanto',
        nombre: 'Intervención en psicología infanto juvenil',
        requiere: ['psicodiag_infanto'],
        abre: ['electivo1']
      },
      {
        id: 'integrador_intermedio',
        nombre: 'Integrador intermedio: tesis de licenciatura en psicología II',
        requiere: ['tesis1'],
        abre: ['practica1']
      },
      {
        id: 'prep_vida_laboral',
        nombre: 'Preparación para la vida laboral',
        abre: ['electivo1']
      }
    ]
  },
  // Año 5
  {
    semestre: '5° Año - 1er Semestre',
    ramos: [
      {
        id: 'practica1',
        nombre: 'Práctica profesional I',
        requiere: ['integrador_intermedio'],
        abre: ['mod_integrador_final']
      },
      {
        id: 'electivo1',
        nombre: 'Electivo de especialización profesional I',
        requiere: ['gestion_estrategica', 'intervencion_adulto', 'intervencion_infanto', 'prep_vida_laboral'],
        abre: ['electivo2']
      }
    ]
  },
  {
    semestre: '5° Año - 2do Semestre',
    ramos: [
      {
        id: 'mod_integrador_final',
        nombre: 'Módulo integrador final práctica profesional II',
        requiere: ['practica1']
      },
      {
        id: 'electivo2',
        nombre: 'Electivo de especialización profesional II',
        requiere: ['electivo1']
      }
    ]
  }
];

// -------- UTILIDADES DE ESTADO Y PERSISTENCIA --------------
const storageKey = 'mallaAprobada';
let aprobados = JSON.parse(localStorage.getItem(storageKey) || '{}');

// --------- LÓGICA DE RENDER Y DESBLOQUEO -------------------
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
      divRamo.appendChild
