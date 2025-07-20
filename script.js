const malla = [
  // 1er año
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

  // 2do año
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

  // 3er año
  {
    titulo: "5° Semestre",
    ramos: [
      { id: 'ciclo_familiar', nombre: "Ciclo vital familiar", abre: ['psicogeronto'] },
      { id: 'psico_educacional', nombre: "Psicología educacional", requiere: ['proc_aprendizaje'], abre: ['eval_psicoeducativa'] },
      { id: 'psico_juridica', nombre: "Psicología jurídica", requiere: ['psico_comunitaria'], abre: ['diseno_gestion'] },
      { id: 'psico_trabajo', nombre: "Psicología del trabajo y las organizaciones", abre: ['reclutamiento'] },
      { id: 'clinica_infanto', nombre: "Introducción a la clínica infanto juvenil", abre: ['psicodiag_infanto'] },
      { id: 'enfoques_terapia1', nombre: "Enfoques en terapias psicológica I", requiere: ['estructuras_clinicas'], abre: ['enfoques_terapia2'] },
      { id: 'desarrollo_sost', nombre: "Desarrollo sostenible" }
    ]
  },
  {
    titulo: "6° Semestre",
    ramos: [
      { id: 'psicogeronto', nombre: "Psicogerontología", requiere: ['ciclo_familiar'] },
      { id: 'eval_psicoeducativa', nombre: "Evaluación psicoeducativa", requiere: ['psico_educacional'], abre: ['intervencion_psicoeducativa'] },
      { id: 'diseno_gestion', nombre: "Diseño y gestión de proyectos psicosociales", requiere: ['psico_juridica'] },
      { id: 'reclutamiento', nombre: "Atracción, reclutamiento y selección de personas", requiere: ['psico_trabajo'], abre: ['desarrollo_cambio_org'] },
      { id: 'clinica_adultos', nombre: "Introducción a la clínica adultos", requiere: ['ciclo_adulto','semiologia'], abre: ['psicodiag_adulto'] },
      { id: 'enfoques_terapia2', nombre: "Enfoques de terapia psicológica II", requiere: ['enfoques_terapia1'] },
      { id: 'ingles_tecnico', nombre: "Inglés técnico", requiere: ['ingles_basico'] }
    ]
  },

  // 4to año
  {
    titulo: "7° Semestre",
    ramos: [
      { id: 'intervencion_psicoeducativa', nombre: "Intervención psicoeducativa", requiere: ['eval_psicoeducativa'] },
      { id: 'desarrollo_cambio_org', nombre: "Desarrollo y cambio organizacional", requiere: ['reclutamiento'], abre: ['gestion_estrategica'] },
      { id: 'psicodiag_adulto', nombre: "Psicodi_
