export default {
  global: {
    Name: 'Diseño y desarrollo de aplicaciones <em>web</em>.',
    Description:
      'El componente formativo aborda los principios del diseño y desarrollo de aplicaciones <em>web</em>, incluyendo la organización de la información, el diseño de contenidos e interfaces, la maquetación mediante HTML y CSS, y los fundamentos de las tecnologías <em>frontend</em>. Estos elementos permiten comprender cómo se estructuran, presentan e implementan aplicaciones <em>web</em> funcionales, intuitivas y orientadas a la experiencia del usuario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Arquitectura de la información en aplicaciones <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Organización de la información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sistemas de navegación en sitios <em>web</em>',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de contenido e información <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características y distribución del contenido <em>web</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Formatos y tipos de archivos para la publicación de recursos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Diseño de información: <em>wireframe</em>, jerarquía de información y retículas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño de interfaces <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de interfaces <em>web</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diseño intuitivo y usable de interfaces',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<em>Mockup</em> y prototipado de interfaces',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Plataformas y herramientas para el diseño de interfaces',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Maquetación de aplicaciones <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Lenguaje HTML y uso de etiquetas',
            hash: 't_4_1',
          },
          { numero: '4.2', titulo: 'Hojas de estilo CSS', hash: 't_4_2' },
          {
            numero: '4.3',
            titulo:
              'Estilos y guías de estilo para la presentación <em>web</em>',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tecnologías <em>frontend</em> para el desarrollo <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Funcionalidades de la tecnología <em>frontend</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Tipos de datos y funciones en el desarrollo <em>frontend</em>',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Uso de librerías en el desarrollo <em>frontend</em>',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio <em>web</em>',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'API (Interfaz de Programación de Aplicaciones)',
      significado:
        'conjunto de reglas y herramientas que permiten la comunicación entre diferentes aplicaciones o sistemas para intercambiar información y funcionalidades.',
    },
    {
      termino: 'Aplicación <em>web</em>',
      significado:
        '<em>Software</em>que se ejecuta en un navegador y permite a los usuarios interactuar con servicios o contenidos a través de Internet.',
    },
    {
      termino: 'Arquitectura de la información',
      significado:
        'organización estructurada de contenidos y funcionalidades dentro de una aplicación o sitio <em>web</em> para facilitar su comprensión, navegación y uso.',
    },
    {
      termino: '<em>Backend</em>',
      significado:
        'parte de una aplicación que se ejecuta en el servidor y se encarga del procesamiento de datos, la lógica del sistema y la comunicación con bases de datos.',
    },
    {
      termino: 'CSS (Cascading Style Sheets)',
      significado:
        'lenguaje utilizado para definir la apariencia visual de los elementos de una página <em>web</em>, como colores, tipografías, tamaños y distribución.',
    },
    {
      termino: '<em>frontend</em>',
      significado:
        'parte visible de una aplicación <em>web</em> con la que interactúa el usuario, desarrollada mediante tecnologías como HTML, CSS y JavaScript.',
    },
    {
      termino: 'Framework',
      significado:
        'conjunto de herramientas, bibliotecas y estructuras que facilitan el desarrollo de aplicaciones al proporcionar una base organizada para la programación.',
    },
    {
      termino: 'HTML (HyperText Markup Language)',
      significado:
        'lenguaje de marcado utilizado para estructura y organizar el contenido de las páginas <em>web</em>.',
    },
    {
      termino: 'Interfaz de usuario (UI)',
      significado:
        'conjunto de elementos visuales mediante los cuales una persona interactúa con un sistema o aplicación, como botones, menús, formularios e íconos.',
    },
    {
      termino: 'JavaScript',
      significado:
        'lenguaje de programación que permite agregar interactividad, dinamismo y funcionalidades avanzadas a las páginas <em>web</em>.',
    },
    {
      termino: 'Librería',
      significado:
        'conjunto de funciones o componentes reutilizables que facilitan la implementación de tareas específicas en el desarrollo de software.',
    },
    {
      termino: 'Prototipo',
      significado:
        'representación preliminar de una aplicación o interfaz que permite visualizar y evaluar su estructura, funcionamiento y experiencia de usuario antes del desarrollo final.',
    },
    {
      termino: '<em>Responsive design</em> (Diseño responsivo)',
      significado:
        'enfoque de diseño que permite que una interfaz <em>web</em> se adapte automáticamente a diferentes tamaños de pantalla, como computadores, tabletas y dispositivos móviles.',
    },
    {
      termino: 'UX (experiencia de usuario)',
      significado:
        'conjunto de percepciones y sensaciones que experimenta una persona al interactuar con un sistema, producto o servicio digital.',
    },
    {
      termino: '<em>wireframe</em>',
      significado:
        'representación visual esquemática de una interfaz que muestra la distribución de los elementos y la estructura básica de una página o aplicación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Córcoles Tendero, J. E., & Montero Simarro, F. (2014). Diseño de interfaces <em>web</em>. RA-MA Editorial.',
      link: '',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). <em>Aplicando el CSS</em> [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=_qlj_FyUR-w',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). <em>¿Cómo realizar un wireframe</em>? [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=94UTvXQqRfM',
    },
    {
      referencia:
        'Gutiérrez, C. (2008). Diseño <em>web</em> y arquitectura de información para sitios 2.0. <em>Cuadernos.Info</em>, (22), 44–51.',
      link: 'https://doi.org/10.7764/cdi.22.90',
    },
    {
      referencia:
        'Pérez-Montoro, M. (2010). <em>Arquitectura de la información en entornos web</em>. Ediciones Trea.',
      link: '',
    },
    {
      referencia:
        'Powell, T. A. (2000). <em>web design: The complete reference</em>. Osborne/McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Rosenfeld, L., Morville, P., & Arango, J. (2024). <em>Arquitectura de la información</em> (4.ª ed.). O’Reilly Media.',
      link: '',
    },
    {
      referencia:
        'Romero, E. (s. f.). <em>¿Qué es la retícula en diseño gráfico y para qué sirve?</em> Inesem Business School.',
      link:
        'https://www.inesem.es/revistadigital/diseno-y-artes-graficas/que-es-la-reticula-en-diseno-grafico',
    },
    {
      referencia:
        'Tidwell, J., Brewer, C., & Valencia, A. (2024). <em>Diseño de interfaces</em> (3.ª ed.). O’Reilly Media.',
      link: '',
    },
    {
      referencia: 'Untitled. (s. f.). <em>CodePen</em>.',
      link: 'https://codepen.io/pen/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
