<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Diseño de interfaces <em>web</em>
    p.mb-4(data-aos="fade-down") El diseño de interfaces <em>web</em> es el proceso mediante el cual se planifica, organiza y construye la forma en que los usuarios interactúan con un sitio <em>web</em> o aplicación digital. Una interfaz <em>web</em> funciona como el punto de conexión entre el usuario y el sistema, ya que a través de ella se presentan los contenidos, las funciones y las herramientas que permiten navegar, consultar información y ejecutar diferentes acciones dentro de una plataforma digital.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el desarrollo de soluciones tecnológicas, el diseño de interfaces no se limita únicamente al aspecto visual de una página. También implica la organización de la información, la disposición de los elementos interactivos, la claridad en la navegación y la facilidad con la que los usuarios pueden comprender y utilizar el sistema. Por esta razón, el diseño de interfaces integra principios de experiencia de usuario, usabilidad, accesibilidad y arquitectura de la información, con el propósito de crear entornos digitales funcionales y fáciles de utilizar.
    p.mb-4(data-aos="fade-down") Una interfaz bien diseñada permite que los usuarios encuentren rápidamente lo que buscan, comprendan cómo interactuar con el sistema y realicen sus tareas de manera eficiente. Esto contribuye a mejorar la satisfacción del usuario, optimizar el uso de la aplicación y fortalecer la calidad del producto digital.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") En el contexto del desarrollo <em>web</em>, el diseño de interfaces también facilita el trabajo conjunto entre diseñadores y desarrolladores, ya que establece una guía clara para la construcción visual y funcional del sistema. De esta manera, se garantiza que los componentes gráficos, los elementos interactivos y la estructura del contenido respondan a los objetivos del proyecto y a las necesidades de los usuarios.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Tipos de interfaces <em>web</em>
    figure.mb-4
      img(src='@/assets/curso/tema3/img02.png', alt='Imagen decorativa')
    p(data-aos="fade-down") Las interfaces <em>web</em> pueden clasificarse según su forma de funcionamiento, el nivel de interacción que ofrecen al usuario y la manera en que presentan la información dentro de un sitio o aplicación. Comprender estos tipos permite seleccionar el enfoque de diseño más adecuado según las necesidades del proyecto y el tipo de experiencia que se desea ofrecer al usuario.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunos de los tipos de interfaces <em>web</em> más utilizados en el desarrollo de sitios y aplicaciones digitales.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 a) Interfaces <em>web</em> estáticas
    p(data-aos="fade-down") Presentan contenido fijo que no cambia en función de la interacción del usuario. En este tipo de interfaces, la información se visualiza de la misma manera para todos los visitantes, sin realizar modificaciones dinámicas en el contenido.
    p(data-aos="fade-down") Este tipo de interfaz suele desarrollarse principalmente con HTML y CSS, lo que permite crear páginas sencillas, rápidas y fáciles de mantener.
    p.mb-4(data-aos="fade-down") Entre sus principales características se destacan:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img03.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Contenido fijo que no depende de bases de datos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Estructura simple y de fácil implementación.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Alta velocidad de carga.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Bajo consumo de recursos del servidor.
    p.mb-4(data-aos="fade-down") Las interfaces estáticas se utilizan comúnmente en:
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Páginas institucionales informativas.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img08.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Portafolios personales.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img09.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Sitios <em>web</em> básicos o <em>landing pages</em>.
    .row.cajon.cajon.C02.p-4.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        h5 Cómo crear una interfaz <em>web</em> estática
        p De manera general, la creación de una interfaz <em>web</em> estática puede realizarse mediante los siguientes pasos:
      .col-lg-10.col-12.mb-4
        .row.justify-content-center.cajon.C09.p-4.mb-0
          .col-lg-9.col-12.order-lg-2.order-2
            ol.lista-ol--cuadro.lista-ol--separador.mb-0
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Obtener un servicio de alojamiento <em>web</em> (hosting) y registrar un dominio para el sitio.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Diseñar la estructura de las páginas utilizando HTML.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Aplicar estilos visuales mediante hojas de estilo CSS.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Publicar los archivos del sitio en el servidor para que puedan ser accesibles desde Internet.
          .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure.mb-0
              img(src='@/assets/curso/tema3/img10.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 b) Interfaces <em>web</em> dinámicas
    p(data-aos="fade-down") Permiten que el contenido cambie de acuerdo con la interacción del usuario o con la información almacenada en bases de datos. En este tipo de interfaces, los usuarios pueden enviar información, realizar consultas y recibir respuestas personalizadas.
    p(data-aos="fade-down") Para su funcionamiento se utilizan tecnologías como JavaScript, así como lenguajes de programación del lado del servidor y sistemas de gestión de bases de datos.
    p.mb-4(data-aos="fade-down") Entre sus principales características se encuentran:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Contenido generado de manera dinámica.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Interacción constante con el usuario.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Integración con bases de datos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img14.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down")  Actualización de información en tiempo real o bajo demanda.
    p.mb-4(data-aos="fade-down") Este tipo de interfaz se utiliza en:
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-3.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img15.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Plataformas educativas.
          .col-lg-3.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img16.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Tiendas en línea.
          .col-lg-3.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img17.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Sistemas de gestión empresarial.
          .col-lg-3.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img18.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Redes sociales y aplicaciones <em>web</em>.
    .row.cajon.cajon.C02.p-4.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        h5 Cómo crear una interfaz <em>web</em> dinámica
        p De manera general, el desarrollo de una interfaz <em>web</em> dinámica puede realizarse mediante los siguientes pasos:
      .col-lg-10.col-12.mb-4
        .row.justify-content-center.cajon.C09.p-4.mb-0
          .col.col-12
            ol.lista-ol--cuadro.lista-ol--separador.mb-0
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                p.mb-0 Elegir la plataforma o tecnología adecuada para el desarrollo del sitio <em>web</em>.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                p.mb-0 Diseñar y construir la estructura de la página utilizando HTML, CSS y JavaScript.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                p.mb-0 Incorporar funcionalidades dinámicas mediante programación y conexión con bases de datos o servicios del servidor.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                p.mb-0 Realizar pruebas de funcionamiento y publicar el sitio <em>web</em> en el servidor para su uso por parte de los usuarios.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 c) Interfaces <em>web</em> responsivas
    p(data-aos="fade-down") Son aquellas que se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos, como computadores, tabletas o teléfonos móviles. Este enfoque de diseño busca garantizar que el contenido sea accesible y funcional sin importar el dispositivo utilizado.
    p(data-aos="fade-down") La implementación de interfaces responsivas se basa en el uso de técnicas de diseño flexible, hojas de estilo adaptativas y estructuras de diseño que permiten reorganizar los elementos de la página según el tamaño de la pantalla.
    p.mb-4(data-aos="fade-down") Entre sus principales características se destacan:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img19.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Adaptación automática a distintos dispositivos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Mejor experiencia de navegación en móviles.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img21.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Uso de estructuras flexibles de diseño.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img22.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Mayor accesibilidad y usabilidad.
    p.mb-4(data-aos="fade-down") En la actualidad, el diseño responsivo es un estándar en el desarrollo <em>web</em>, debido al crecimiento del uso de dispositivos móviles para acceder a Internet.
    .row.cajon.cajon.C02.p-4.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        h5 Cómo crear una interfaz <em>web</em> responsiva
        p De manera general, el desarrollo de una interfaz <em>web</em> responsiva puede realizarse mediante los siguientes pasos:
      .col-lg-10.col-12.mb-4
        .row.justify-content-center.cajon.C09.p-4.mb-0
          .col.col-12
            ol.lista-ol--cuadro.lista-ol--separador.mb-0
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                |  Diseñar la estructura del sitio considerando diferentes tamaños de pantalla.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Utilizar CSS con técnicas de diseño flexible, como Flexbox, CSS <em>Grid</em> y media queries.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Optimizar imágenes, tipografías y elementos visuales para distintos dispositivos.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Realizar pruebas en diferentes resoluciones y dispositivos para garantizar su correcta visualización.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 d) Interfaces <em>web</em> orientadas a aplicaciones (<em>web</em> Apps): 
    p(data-aos="fade-down") Ofrecen una experiencia similar a la de una aplicación instalada en un computador o dispositivo móvil. Estas interfaces permiten realizar tareas complejas directamente desde el navegador, con altos niveles de interactividad.
    p(data-aos="fade-down") Generalmente utilizan tecnologías modernas de desarrollo <em>web</em> que permiten actualizar el contenido sin necesidad de recargar completamente la página.
    p.mb-4(data-aos="fade-down") Entre sus principales características se encuentran:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img23.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Alta interactividad con el usuario.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down")  Actualización dinámica del contenido.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Integración con múltiples servicios y bases de datos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img26.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Experiencia de uso similar a una aplicación móvil o de escritorio.
    p.mb-4(data-aos="fade-down") Este tipo de interfaz se encuentra en plataformas como:
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img27.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Sistemas de gestión empresarial.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img28.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Aplicaciones colaborativas en línea.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema3/img29.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Plataformas de productividad y almacenamiento en la nube.
    .row.cajon.cajon.C02.p-4.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        h5 Cómo crear una interfaz <em>web</em> orientada a aplicaciones
        p De manera general, el desarrollo de una interfaz <em>web</em> orientada a aplicaciones puede realizarse mediante los siguientes pasos:
      .col-lg-10.col-12.mb-0
        .row.justify-content-center.cajon.C09.p-4.mb-0
          .col-lg-10.col-12.order-lg-2.order-2
            ol.lista-ol--cuadro.lista-ol--separador.mb-0
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Definir las funcionalidades y tareas que realizará la aplicación.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Diseñar la estructura de la interfaz y los componentes interactivos.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Implementar la lógica del sistema utilizando tecnologías <em>frontend</em> y su integración con el <em>backend</em>.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Realizar pruebas de funcionamiento, rendimiento y experiencia de usuario antes de su publicación.
          .col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure.mb-0
              img(src='@/assets/curso/tema3/img30.svg', alt='Imagen decorativa')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Diseño intuitivo y usable de interfaces
    p.mb-4(data-aos="fade-down") En el desarrollo de interfaces <em>web</em>, no basta con crear entornos visualmente atractivos. Es fundamental que las interfaces sean fáciles de comprender, eficientes de utilizar y agradables para el usuario. En este sentido, el diseño intuitivo y la usabilidad se convierten en aspectos clave para garantizar una interacción efectiva entre las personas y los sistemas digitales.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img31.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El <b>diseño intuitivo</b> se refiere a la capacidad que tiene una interfaz para ser comprendida y utilizada de manera natural, sin que el usuario necesite instrucciones complejas o capacitación previa. Una interfaz intuitiva aprovecha patrones de interacción conocidos, de modo que el usuario puede identificar rápidamente cómo navegar, dónde hacer clic o cómo completar una tarea.
    p(data-aos="fade-down") Este tipo de diseño se apoya en la experiencia previa de los usuarios con otros sistemas digitales, lo que permite reducir la confusión y facilitar el aprendizaje. Cuando una interfaz es intuitiva, los usuarios pueden concentrarse en sus objetivos y no en entender cómo funciona la herramienta.
    p.mb-0(data-aos="fade-down") Entre las principales características del diseño intuitivo se encuentran:
    .row.mb-0
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/img32.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-4 col-xl-4")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img33.svg", alt="Imagen decorativa").img100.m-auto
                  p Presentación simple y clara de los elementos de la interfaz.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img34.svg", alt="Imagen decorativa").img100.m-auto
                  p Uso de patrones de interacción conocidos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img35.svg", alt="Imagen decorativa").img100.m-auto
                  p Claridad en los mensajes, botones y acciones.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img36.svg", alt="Imagen decorativa").img100.m-auto
                  p Reducción de la carga cognitiva del usuario.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img37.svg", alt="Imagen decorativa").img100.m-auto
                  p Coherencia en la organización y funcionamiento de los elementos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img38.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p.mb-0 Por otra parte, la usabilidad se enfoca en evaluar qué tan fácil, eficiente y satisfactorio resulta para un usuario interactuar con un sistema. No se trata únicamente de cómo debería funcionar una interfaz en teoría, sino de cómo funciona realmente cuando las personas la utilizan.
    p(data-aos="fade-down") La <b>usabilidad</b> busca que los usuarios puedan realizar sus tareas con el menor esfuerzo posible, reduciendo errores y mejorando la eficiencia en la interacción.
    p.mb-4(data-aos="fade-down") Entre los principales componentes de la usabilidad se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img39.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Eficacia
            p.mb-4(data-aos="fade-down") Que se refiere a la capacidad del usuario para completar correctamente las tareas propuestas.        
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img40.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Eficiencia
            p.mb-4(data-aos="fade-down") Relacionada con el tiempo y el esfuerzo que el usuario necesita para lograr sus objetivos.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img41.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Satisfacción
            p.mb-4(data-aos="fade-down") Que corresponde a la percepción positiva del usuario durante la interacción con el sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img42.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-2(data-aos="fade-down") El diseño intuitivo y usable se aplica en numerosos contextos digitales. En plataformas educativas, por ejemplo, permite que los aprendices se concentren en el aprendizaje sin dificultades para navegar por los contenidos. En entornos empresariales, contribuye a mejorar la productividad y disminuir errores en los procesos.
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Asimismo, en servicios digitales como la banca en línea, el comercio electrónico o los sistemas de salud, la usabilidad es especialmente importante, ya que una interfaz confusa puede generar errores, desconfianza o abandono del sistema.
    p.mb-4(data-aos="fade-down") Para lograr interfaces realmente intuitivas y usables, se suelen aplicar algunos principios fundamentales de diseño, entre los cuales destacan:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img43.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Simplicidad
            h5.t2.mb-2 Simplicidad
            p.mb-0 Evitando elementos innecesarios que puedan generar distracciones.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img44.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Consistencia
            h5.t2.mb-2 Consistencia
            p.mb-0 Manteniendo patrones visuales y de interacción similares en todo el sistema.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img45.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Retroalimentación
            h5.t2.mb-2 Retroalimentación
            p.mb-0 Proporcionando respuestas claras ante las acciones del usuario.
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img46.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Visibilidad
            h5.t2.mb-2 Visibilidad
            p.mb-0 Mostrando de forma clara las opciones y funciones disponibles.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img47.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Control del usuario
            h5.t2.mb-2 Control del usuario
            p.mb-0 Permitiendo que las personas tengan la posibilidad de corregir acciones o decidir cómo interactuar con el sistema.
    p.mb-0(data-aos="fade-down") En conclusión, el diseño intuitivo y usable de interfaces no solo mejora la experiencia del usuario, sino que también aumenta la eficiencia del sistema y facilita la adopción de las soluciones digitales. Por esta razón, constituye uno de los pilares fundamentales en el desarrollo de interfaces <em>web</em> modernas.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 <em><em>Mockup</em></em> y prototipado de interfaces
    //- p.mb-4(data-aos="fade-down") Las estructuras de selección en JavaScript permiten tomar decisiones dentro de un programa, ejecutando diferentes bloques de código según se cumplan o no determinadas condiciones. Las siguientes son este tipo de estructuras:
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img48.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el proceso de diseño de interfaces <em>web</em>, es fundamental contar con herramientas que permitan visualizar, analizar y validar la estructura y el funcionamiento de una interfaz antes de su desarrollo final. En este contexto, los <em><em>Mockup</em>s</em> y los prototipos se utilizan como representaciones visuales que facilitan la planificación, la comunicación entre equipos y la evaluación temprana de las soluciones de diseño.
    p.mb-4(data-aos="fade-down") El uso de estas herramientas permite detectar posibles problemas de usabilidad, organización de contenidos o interacción antes de iniciar la etapa de programación, lo que contribuye a optimizar el proceso de desarrollo y reducir errores en fases posteriores.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 a) <em>Mockup</em> en el diseño de interfaces
    p.mb-4(data-aos="fade-down") Un <em>Mockup</em> es una representación visual detallada de una interfaz que muestra cómo se verá el diseño final de una página <em>web</em> o aplicación. A diferencia del <em>wireframe</em>, que se centra principalmente en la estructura, el <em>Mockup</em> incluye elementos visuales más definidos como colores, tipografías, iconos, imágenes y estilos gráficos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C07.p-4
          p.mb-0(data-aos="fade-down") El objetivo del <em>Mockup</em> es ofrecer una vista cercana al diseño final del producto digital, permitiendo evaluar la apariencia estética y la organización visual de la interfaz.
    p.mb-4(data-aos="fade-down") Entre las principales características de un <em>Mockup</em> se encuentran:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img49.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Representación visual de alta fidelidad.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img50.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Inclusión de elementos gráficos y estilos visuales.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img51.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Definición de tipografías, colores y componentes de diseño.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img52.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Presentación cercana al diseño final del producto.
    p.mb-4(data-aos="fade-down") El <em>Mockup</em> es especialmente útil para validar decisiones de diseño con clientes, diseñadores y desarrolladores, ya que permite visualizar de forma clara cómo se estructurarán los elementos en la interfaz.
    .tarjeta.tarjeta--C11.p-4.py-2.mb-3.d-inline-block.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.lista-ul__vineta
          h5.mb-0 Cómo crear un <em>Mockup</em> de una interfaz
    .row.BG03.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Definir los objetivos de la interfaz")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se identifican las necesidades del usuario y las funcionalidades que debe cumplir la página o aplicación.
          .row(numero="2" titulo="Tomar como base el <em>wireframe</em>")
            .col-12.mb-4.mb-md-0
              p.mb-0 El <em>Mockup</em> generalmente se construye a partir de un <em>wireframe</em> previamente elaborado, en el cual ya se ha definido la estructura de la interfaz.
          .row(numero="3" titulo="Incorporar elementos visuales")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se agregan colores, tipografías, iconos, botones, imágenes y estilos gráficos que representen el diseño final.
          .row(numero="4" titulo="Organizar los componentes de la interfaz")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se ajusta la distribución de menús, secciones, formularios y contenidos para asegurar una presentación clara y coherente.
          .row(numero="5" titulo="Revisar y validar el diseño")
            .col-12.mb-4.mb-md-0
              p.mb-0 Finalmente, el <em>Mockup</em> se revisa con el equipo de diseño o desarrollo para realizar ajustes antes de avanzar hacia el prototipado o la programación.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img53.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 b) Prototipado de interfaces
    p.mb-4(data-aos="fade-down") Consiste en la creación de una versión simulada o interactiva de una interfaz que permite representar el funcionamiento de un sistema antes de su implementación definitiva. A diferencia del <em>Mockup</em>, el prototipo puede incluir navegación entre pantallas, botones interactivos y simulaciones de comportamiento del sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C07.p-4
          p.mb-0(data-aos="fade-down") El objetivo del prototipo es evaluar la interacción del usuario con la interfaz, identificar posibles mejoras y validar la experiencia de uso antes de iniciar la etapa de desarrollo.
    p.mb-4(data-aos="fade-down") Entre las características principales del prototipado se destacan:
    .row.mb-4(data-aos="flip-up") 
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img54.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Simulación de la navegación entre diferentes pantallas.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img55.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Interacción con botones, menús y elementos funcionales.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img56.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Evaluación temprana de la experiencia de usuario.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img57.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Posibilidad de realizar pruebas con usuarios.
    p.mb-4(data-aos="fade-down") Los prototipos pueden desarrollarse con distintos niveles de detalle, dependiendo del momento del proceso de diseño.
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-4.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema3/img58.svg', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            p.mb-0 Prototipos de baja fidelidad, que representan ideas iniciales mediante esquemas simples.
      .col-lg-4.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema3/img59.svg', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            p.mb-0 Prototipos de media fidelidad, que incluyen mayor organización de contenidos y algunos elementos visuales.
      .col-lg-4.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema3/img60.svg', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            p.mb-0 Prototipos de alta fidelidad, que simulan con gran precisión el funcionamiento y la apariencia final del sistema.
    .tarjeta.tarjeta--C11.p-4.py-2.mb-3.d-inline-block.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.lista-ul__vineta
          h5.mb-0 Cómo crear un prototipo de interfaz
    .row.BG03.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Definir los objetivos y funcionalidades")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se identifican las tareas que el usuario podrá realizar dentro de la interfaz y los elementos interactivos que serán necesarios.
          .row(numero="2" titulo="Tomar como base el <em>Mockup</em> o el <em>wireframe</em>")
            .col-12.mb-4.mb-md-0
              p.mb-0 El prototipo se construye a partir del diseño visual previamente definido, incorporando los elementos que simulan la interacción.
          .row(numero="3" titulo="Agregar interacciones y navegación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se establecen enlaces entre pantallas, botones funcionales, menús desplegables u otros componentes que permitan simular el comportamiento real de la interfaz.
          .row(numero="4" titulo="Realizar pruebas con usuarios")
            .col-12.mb-4.mb-md-0
              p.mb-0 El prototipo se utiliza para evaluar la experiencia de uso, identificando dificultades de navegación, comprensión o interacción.
          .row(numero="5" titulo="Ajustar y mejorar el diseño")
            .col-12.mb-4.mb-md-0
              p.mb-0 Con base en los resultados de las pruebas, se realizan modificaciones antes de iniciar el desarrollo definitivo del sistema.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img61.png', alt='Imagen decorativa')
    .row.BG01.justify-content-center.align-items-stretch.mb-4.px-4.py-4.mb-0
      .row.justify-content-center.align-items-center.mb-4
        .col.col-lg-6.col-12.mb-lg-0.mb-3.order-lg-2.order-2
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
            p.mb-4.text-bold(data-aos="fade-down") El uso de <em><em>Mockup</em>s</em> y prototipos aporta múltiples beneficios dentro del desarrollo de interfaces <em>web</em>:
            ul.lista-ul--color.mt-4(data-aos="fade-down")
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Facilita la visualización de la interfaz antes de programarla.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Permite validar decisiones de diseño con diferentes actores del proyecto.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Mejora la comunicación entre diseñadores, desarrolladores y clientes.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Reduce errores en etapas posteriores del desarrollo.
              li.mb-0
                i.fas.fa-cloud-arrow-down
                p.mb-0 Favorece la evaluación de la experiencia de usuario.
            p.mb-0(data-aos="fade-down") 
        .col.col-lg-4.col-8.order-lg-1.order-1
          figure
            img(src='@/assets/curso/tema3/img62.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C07.p-4
          p.mb-0(data-aos="fade-down") En conjunto, estas herramientas permiten transformar ideas y requerimientos en representaciones visuales claras que guían el proceso de diseño y desarrollo de interfaces digitales.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Plataformas y herramientas para el diseño de interfaces
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img63.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El diseño de interfaces <em>web</em> requiere el uso de plataformas y herramientas especializadas que permiten planificar, visualizar y probar la estructura y apariencia de una aplicación antes de su desarrollo final. Estas herramientas facilitan la creación de <em>wireframe</em>s, <em><em>Mockup</em>s</em> y prototipos interactivos, lo que contribuye a mejorar la comunicación entre diseñadores, desarrolladores y otros integrantes del equipo de trabajo.
    p.mb-4(data-aos="fade-down") Actualmente existen diversas plataformas que apoyan el proceso de diseño de interfaces, cada una con características particulares orientadas a la colaboración, la creación visual o la simulación de interacciones. A continuación, se presentan algunas de las herramientas más utilizadas en el diseño de interfaces digitales.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Herramientas más utilizadas
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Herramienta
                th(data-aos="fade-down")(style= "width: 25%") Tipo de herramienta
                th(data-aos="fade-down")(style= "width: 25%") Características principales
                th(data-aos="fade-down")(style= "width: 25%") Uso en el diseño de interfaces
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Figma
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Plataforma de diseño colaborativo en línea.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite diseñar interfaces, crear prototipos interactivos y trabajar de forma colaborativa en tiempo real.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Diseño de interfaces <em>web</em>, creación de <em><em>Mockup</em>s</em> y prototipos.
              tr
                td(data-aos="fade-down") Adobe XD
                td(data-aos="fade-down") Herramienta de diseño de experiencia de usuario.
                td(data-aos="fade-down") Facilita la creación de <em>wireframe</em>s, diseño visual y prototipado de interfaces interactivas.
                td(data-aos="fade-down") Diseño y validación de experiencias de usuario.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Sketch
                td(data-aos="fade-down")(style="background-color: #F0F8FF") <em>Software</em>de diseño vectorial.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Orientado al diseño de interfaces digitales, especialmente para aplicaciones <em>web</em> y móviles.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Creación de <em>layouts</em>, componentes y prototipos.
              tr
                td(data-aos="fade-down") Balsamiq
                td(data-aos="fade-down") Herramienta para <em>wireframe</em>s de baja fidelidad.
                td(data-aos="fade-down") Permite crear bocetos rápidos de interfaces con un enfoque estructural.
                td(data-aos="fade-down") Diseño inicial de estructuras de interfaz.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") InVision
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Plataforma de prototipado y colaboración.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite convertir diseños en prototipos interactivos y compartirlos para revisión.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Pruebas de interacción y validación del diseño.
    p.mb-0(data-aos="fade-down") El uso de estas herramientas facilita el proceso de diseño de interfaces, ya que permiten visualizar las ideas, validar la experiencia de usuario y realizar ajustes antes de iniciar el desarrollo del sistema. De esta manera, se optimiza el proceso de programación y se reduce la posibilidad de errores en las etapas posteriores del proyecto.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
