export default {
  global: {
    componenteFormativo: 'Finalización',
    descripcionCurso:
      'La finalización de archivos es un proceso muy sencillo, pero a la vez muy importante, dado que es el paso final en el cual se dan las últimas revisiones y se toman las medidas necesarias para que todo el proceso anterior salga lo más adecuado, por eso la necesidad de conocer y tener en cuenta esas referencias antes de proceder cualquier proceso de impresión o compartir estos archivos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Revisión de archivos para impresión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ortografía y digitación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manejo de textos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sangrados',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Sobreimpresión y trapping',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Modelos de color',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Vínculos e hipervínculos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Perfiles y acoplamientos',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Preparación de archivos para impresión',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Premedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Imposición y plegado',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Finalización de archivos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Clasificación de los archivos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Empaquetado',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Baumman, H. (2021). 12 características de comunicación digital que han creado nuevas formas de negocios. ',
      link:
        'https://www.crehana.com/cr/blog/negocios/caracteristicas-de-comunicacion-digital/',
    },
    {
      referencia:
        'BlogQuadrato. (2021). Características básicas de un sitio web.',
      link:
        'https://blog.quadrato.mx/caracteristicas-basicas-de-un-sitio-web-bien-desarrollado/',
    },
    {
      referencia: 'DesignerLifer. (2011). 10 reglas para el diseño editorial.',
      link:
        'https://dlifer.wordpress.com/2011/07/21/10-reglas-para-hacer-diseno-editorial-2/',
    },
    {
      referencia:
        'Giraldo, V. (2019). 15 errores comunes en la redacción publicitaria.',
      link: 'https://rockcontent.com/es/blog/errores-comunes-en-la-redaccion/',
    },
    {
      referencia:
        'Kliever, J. (s.f.). Por qué todo diseño necesita tres niveles de jerarquía. ',
      link:
        'https://www.canva.com/es_mx/aprende/todo-diseno-necesita-3-niveles-jerarquia-tipografica/',
    },
    {
      referencia:
        'Mancuzo, G. (2021). Contenidos digitales: características y tipos.',
      link:
        'https://blog.comparasoftware.com/contenidos-digitales-caracteristicas-y-tipos/',
    },
    {
      referencia: 'Vázquez Farías, E. (2014). Corrección de estilo.',
      link: 'https://www.uanl.mx/utilerias/chip/descarga/correccion_estilo.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Legible',
      significado:
        'Adjetivo que se utiliza para señalar que algo se puede leer.',
    },
    {
      termino: 'Marca de corte',
      significado:
        'Pequeñas líneas situadas en las esquinas de la página que indican por donde se ha de cortar el trabajo en guillotina para dejarlo a su tamaño final. Se colocan 3 mm fuera de la página para que al cortar no aparezcan en el libro.',
    },
    {
      termino: 'Marca de plegado',
      significado:
        'Líneas que indican por donde hay que doblar la hoja para obtener un cuadernillo. Se colocan fuera de la página para que desaparezcan al cortar.',
    },
    {
      termino: 'Marca de registro',
      significado:
        'Marcas en forma de cruces y círculos que se colocan en todas las planchas y que sirven para alinear todas las tintas entre sí. Cuando está perfectamente registrado se verán todas las marcas superpuestas, si algún color se desplaza se verá a simple vista una marca cian, magenta o amarilla o negra.',
    },
    {
      termino: 'Medianil o pliegue',
      significado: 'En imposición, zona por la que se dobla el papel.',
    },
    {
      termino: 'Página',
      significado:
        'Cada una de las dos caras de la hoja de un libro. En los programas de imposición la página define el tamaño del libro e incluye todos los elementos a imprimir.',
    },
    {
      termino: 'Pliego',
      significado:
        'Hoja de papel en la que se imprimen varias hojas de un libro. A menudo se utiliza el término pliego tanto para definir la hoja que sale de la máquina de imprimir, como para definir a la hoja una vez plegada, aunque es más correcto usar el término cuadernillo.',
    },
  ],
  complementario: [
    {
      texto:
        'Helloacademy UK. (2019). ¿Qué es sangrado y por qué su importancia? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZxHVeNICwzY',
    },
    {
      texto:
        'Mon Magán, (2020) ¿Cómo montar un fanzine? Imposición de un folleto. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YK9lF6dCXJs&t=9s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López escudero',
        cargo: 'Diseñadora instruccional ',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional ',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital ',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego Suarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Actividad didáctica',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Veimar Celis Meléndez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
