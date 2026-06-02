<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Maquetación de aplicaciones <em>web</em>
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La maquetación de aplicaciones <em>web</em> corresponde al proceso mediante el cual se organiza y estructura visualmente el contenido de una aplicación dentro de una página <em>web</em>, siguiendo un diseño previamente definido. A través de este proceso, los diseños conceptuales o gráficos se transforman en código que permite representar la interfaz en el navegador.
        br
        br
        p Para realizar la maquetación se utilizan principalmente tecnologías como HTML, encargado de definir la estructura del contenido, y CSS, que permite establecer la apariencia visual y la disposición de los elementos dentro de la página.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Desde el desarrollo de <em>software</em>, la maquetación funciona como una etapa intermedia entre el diseño de la interfaz y la programación de la lógica de la aplicación. Aunque no gestiona directamente la funcionalidad del sistema, sí determina cómo se presentan los contenidos, cómo se organizan los componentes y cómo interactúa el usuario con la información.
        p.mb-0(data-aos="fade-down") Una maquetación adecuada contribuye a que la interfaz sea clara, ordenada y coherente, lo que facilita la navegación y mejora la experiencia del usuario. Además, en las aplicaciones <em>web</em> actuales es necesario considerar aspectos como la adaptabilidad a diferentes dispositivos, el rendimiento del sitio y el cumplimiento de criterios de accesibilidad.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Lenguaje HTML y uso de etiquetas
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") HTML es un lenguaje de marcado diseñado para describir la estructura de los documentos que se publican en la <em>web</em>. Su función principal es organizar el contenido de una página, indicando qué partes corresponden a títulos, párrafos, enlaces, imágenes, listas, formularios u otros elementos.
        .cajon.cajon.C01.color-primario.px-4.py-2.mb-4
          p.mb-0(data-aos="fade-down") Desde el punto de vista del desarrollo de soluciones de <em>software</em>, HTML actúa como la capa estructural de una aplicación <em>web</em>. Es el primer nivel que el navegador interpreta para presentar la información al usuario. Una estructura HTML bien definida permite que el contenido sea comprendido no solo por las personas, sino también por navegadores, motores de búsqueda y tecnologías de asistencia.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img04.svg', alt='Imagen decorativa')
          .col-lg-9.col-12
            .cajon.cajon.C05.px-4.py-2.mb-0
              p.mb-0 HTML funciona mediante un sistema de etiquetas que rodean el contenido y le asignan un significado específico. Este enfoque permite separar el contenido de su presentación visual y de su comportamiento, facilitando el mantenimiento, la escalabilidad y la interoperabilidad del <em>software</em>.
    p.mb-0(data-aos="fade-down") Características principales:
    .row.mb-0
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema4/img05.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img06.svg", alt="Imagen decorativa").img100.m-auto
                  p HTML significa Lenguaje de Marcado de Hipertexto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p Es el lenguaje de marcado estándar para crear páginas <em>web</em>.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img08.svg", alt="Imagen decorativa").img100.m-auto
                  p Define la estructura de una página <em>web</em>.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img09.svg", alt="Imagen decorativa").img100.m-auto
                  p Los elementos HTML indican al navegador cómo mostrar el contenido visualmente.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img10.svg", alt="Imagen decorativa").img100.m-auto
                  p Las etiquetas HTML permiten identificar fragmentos de contenido como encabezados, párrafos, enlaces, imágenes u otros componentes de la página.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 Aprender mediante ejemplos
    p.mb-4(data-aos="fade-down") Con editores de texto como Bloc de notas en Windows, TextEdit en Mac o editores gratuitos disponibles en internet, es posible crear y editar código HTML y visualizar el resultado en un navegador <em>web</em>.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-12
        .tarjeta.tarjeta--C13.p-4.py-2.d-inline-block
          h5.mb-0 Ejemplo 1. Estructura básica de una página HTML
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12
        p.mb-0 A continuación, se presenta un ejemplo sencillo que demuestra la estructura mínima de un documento HTML.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.color-primario.p-0.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #69D7E5;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #6CB9FF;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFD453;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                //- Usamos '|' para escapar el texto HTML de forma segura
                p.text-white.mb-1.font-monospace &lt;!DOCTYPE html&gt;
                p.text-white.mb-1.font-monospace &lt;html lang="es"&gt;
                p.text-white.mb-1.font-monospace &lt;head&gt;
                p.text-white.mb-1.ms-3.font-monospace &lt;meta charset="UTF-8"&gt;
                p.text-white.mb-1.ms-3.font-monospace &lt;title&gt;Page Title&lt;/title&gt;
                p.text-white.mb-1.font-monospace &lt;/head&gt;
                p.text-white.mb-1.font-monospace &lt;body&gt;
                p.text-white.mb-1.ms-3.font-monospace &lt;h1&gt;Aquí es donde va el título del contenido textual&lt;/h1&gt;
                p.text-white.mb-1.ms-3.font-monospace &lt;p&gt;Aquí va el contenido textual o párrafo de la página HTML.&lt;/p&gt;
                p.text-white.mb-1.font-monospace &lt;/body&gt;
                p.text-white.mb-1.font-monospace &lt;/html&gt;
          figcaption
            b Nota: 
            | El código anterior puede copiarse en un editor de texto y guardarse con la extensión .html. Posteriormente, al abrir el archivo en un navegador web, se visualizará la página generada a partir de ese código.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Ejemplo de primer código HTML
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema4/img11.svg', alt='En la figura 5 se presenta el resultado de la ejecución de un código HTML básico en el navegador, donde se obtiene un título principal y un párrafo de contenido textual.')            
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema4/img12.svg', alt='En la figura 5 se presenta el resultado de la ejecución de un código HTML básico en el navegador, donde se obtiene un título principal y un párrafo de contenido textual.')   
    p.mb-4(data-aos="fade-down") En HTML existen diferentes etiquetas que permiten estructurar y organizar el contenido de una página <em>web</em>. A continuación, se presentan algunas de las etiquetas más utilizadas y su función dentro de una página.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Tipos de etiquetas HTML
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Etiqueta
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") &lt;h1&gt; a &lt;h6&gt;
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Define encabezados o títulos de diferentes niveles de importancia dentro de la página.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") &lt;h1&gt;Título&lt;/h1&gt;
              tr
                td(data-aos="fade-down") &lt;p&gt;
                td(data-aos="fade-down") Define un párrafo de texto.
                td(data-aos="fade-down") &lt;p&gt;Texto de ejemplo&lt;/p&gt;
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") &lt;a&gt;
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Crea enlaces o hipervínculos que permiten navegar a otras páginas o recursos.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") &lt;a href="https://google.com"&gt;Ir&lt;/a&gt;
              tr
                td(data-aos="fade-down") &lt;img&gt;
                td(data-aos="fade-down") Inserta una imagen en la página <em>web</em>.
                td(data-aos="fade-down") &lt;img src="img.jpg" alt="Imagen de ejemplo"&gt;
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") &lt;ul&gt;
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Define una lista no ordenada (con viñetas).
                td(data-aos="fade-down")(style="background-color: #F8F8FF") &lt;ul&gt;&lt;li&gt;Elemento&lt;/li&gt;&lt;/ul&gt;
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-12
        .tarjeta.tarjeta--C13.p-4.py-2.d-inline-block
          h5.mb-0 Ejemplo 2. Página con múltiples etiquetas HTML
    .row.justify-content-center.mb-4
      .col.col-12
        p.mb-0 A continuación, se presenta un ejemplo más completo de una página <em>web</em> que utiliza varias de las etiquetas HTML mencionadas anteriormente. Este ejemplo incluye encabezados, párrafos, enlaces de navegación, listas, imágenes, contenedores y un formulario básico.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-0
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #69D7E5;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #6CB9FF;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFD453;")
          .p-4(style="background-color: #0d0d2b; overflow-x: auto;")
            pre.p-0.m-0(style="background-color: transparent; border: none;")
              code.text-white.font-monospace(style="white-space: pre; color: #fff !important;")
                | &lt;!DOCTYPE html&gt;
                | &lt;html lang="es"&gt;
                | &lt;head&gt;
                |     &lt;meta charset="UTF-8"&gt;
                |     &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                |     &lt;title&gt;Ejemplo de etiquetas HTML&lt;/title&gt;
                | &lt;/head&gt;
                | &lt;body&gt;
                |     &lt;header&gt;
                |         &lt;h1&gt;Mi página <em>web</em>&lt;/h1&gt;
                |         &lt;p&gt;Este es un ejemplo de una página con varias etiquetas HTML.&lt;/p&gt;
                |     &lt;/header&gt;
                |     &lt;nav&gt;
                |         &lt;a href="#inicio"&gt;Inicio&lt;/a&gt; | &lt;a href="#contenido"&gt;Contenido&lt;/a&gt; | &lt;a href="#contacto"&gt;Contacto&lt;/a&gt;
                |     &lt;/nav&gt;
                |     &lt;section id="inicio"&gt;
                |         &lt;h2&gt;Encabezados en HTML&lt;/h2&gt;
                |         &lt;h1&gt;Encabezado h1&lt;/h1&gt;
                |         &lt;h2&gt;Encabezado h2&lt;/h2&gt;
                |         &lt;h3&gt;Encabezado h3&lt;/h3&gt;
                |         &lt;h4&gt;Encabezado h4&lt;/h4&gt;
                |         &lt;h5&gt;Encabezado h5&lt;/h5&gt;
                |         &lt;h6&gt;Encabezado h6&lt;/h6&gt;
                |     &lt;/section&gt;
                |     &lt;section id="contenido"&gt;
                |         &lt;h2&gt;Párrafos y formato de texto&lt;/h2&gt;
                |         &lt;p&gt;Este es un párrafo de ejemplo en HTML.&lt;/p&gt;
                |         &lt;p&gt;Aquí se utiliza &lt;strong&gt;texto en negrita&lt;/strong&gt; y &lt;em&gt;texto en cursiva&lt;/em&gt;.&lt;/p&gt;
                |         &lt;h2&gt;Imagen&lt;/h2&gt;
                |         &lt;img src="https://via.placeholder.com/300" alt="Imagen de ejemplo"&gt;
                |         &lt;h2&gt;Lista no ordenada&lt;/h2&gt;
                |         &lt;ul&gt;
                |             &lt;li&gt;Elemento 1&lt;/li&gt;
                |             &lt;li&gt;Elemento 2&lt;/li&gt;
                |             &lt;li&gt;Elemento 3&lt;/li&gt;
                |         &lt;/ul&gt;
                |         &lt;h2&gt;Lista ordenada&lt;/h2&gt;
                |         &lt;ol&gt;
                |             &lt;li&gt;Paso 1&lt;/li&gt;
                |             &lt;li&gt;Paso 2&lt;/li&gt;
                |             &lt;li&gt;Paso 3&lt;/li&gt;
                |         &lt;/ol&gt;
                |         &lt;div&gt;
                |             &lt;h3&gt;Contenedor div&lt;/h3&gt;
                |             &lt;p&gt;Este contenido se encuentra dentro de un contenedor &lt;strong&gt;div&lt;/strong&gt;.&lt;/p&gt;
                |         &lt;/div&gt;
                |     &lt;/section&gt;
                |     &lt;section id="contacto"&gt;
                |         &lt;h2&gt;Formulario de contacto&lt;/h2&gt;
                |         &lt;form&gt;
                |             &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
                |             &lt;input type="text" id="nombre" name="nombre"&gt;&lt;br&gt;&lt;br&gt;
                |             &lt;label for="correo"&gt;Correo electrónico:&lt;/label&gt;
                |             &lt;input type="email" id="correo" name="correo"&gt;&lt;br&gt;&lt;br&gt;
                |             &lt;button type="submit"&gt;Enviar&lt;/button&gt;
                |         &lt;/form&gt;
                |     &lt;/section&gt;
                |     &lt;footer&gt;
                |         &lt;p&gt;Pie de página - Ejemplo HTML&lt;/p&gt;
                |     &lt;/footer&gt;
                | &lt;/body&gt;
                | &lt;/html&gt;
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-2
        p.mb-0 Para usar este ejemplo:
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Abrir un editor de texto, por ejemplo, Visual Studio Code, Bloc de notas u otro editor de código.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Copiar el código HTML presentado anteriormente.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Guardar el archivo con el nombre index.html.
            li.mb-0
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Abrir el archivo guardado en cualquier navegador <em>web</em> para visualizar la página generada.
      .col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img13.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Página generada a partir del código anterior
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema4/img14.svg', alt='En la figura 6 se presenta la una Página <em>web</em> de ejemplo generada con múltiples etiquetas HTML.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema4/img15.svg', alt='En la figura 6 se presenta la una Página <em>web</em> de ejemplo generada con múltiples etiquetas HTML.')
    p.mb-0(data-aos="fade-down") Finalmente, al visualizar el resultado en el navegador se observa la estructura de la página con encabezados, párrafos, listas, imágenes y formularios. Sin embargo, el diseño visual aún es básico y carece de estilos avanzados o elementos dinámicos, los cuales se incorporan mediante hojas de estilo CSS y lenguajes de programación como JavaScript.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Hojas de estilo CSS
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img16.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Las hojas de estilo en cascada, conocidas como CSS (Cascading Style Sheets), son un lenguaje de diseño utilizado para describir la presentación de documentos escritos en HTML. Su función principal consiste en definir cómo deben mostrarse los distintos elementos estructurales de una página <em>web</em>, sin modificar el contenido en sí.
        p.mb-3(data-aos="fade-down") Desde la perspectiva del desarrollo de <em>software</em>, CSS permite separar responsabilidades dentro del desarrollo <em>web</em>. Mientras HTML se encarga de la estructura lógica y semántica del contenido, CSS se utiliza para controlar la apariencia visual, como colores, tipografías, tamaños, márgenes y distribución de los elementos en la página. Esta separación facilita el mantenimiento del código, mejora la reutilización de estilos y permite realizar cambios visuales sin alterar la estructura del documento.      
        p.mb-0(data-aos="fade-down") El término “en cascada” hace referencia al mecanismo mediante el cual se pueden aplicar múltiples reglas de estilo a un mismo elemento, siguiendo un orden de prioridad. Este sistema permite que los estilos se combinen y sobrescriban según su especificidad y ubicación dentro del documento.
    .row.cajon.cajon.C02.p-4.justify-content-center.align-items-center.mb-4
      .col-12.mb-0
        h5 Los estilos CSS pueden incorporarse en una página <em>web</em> de diferentes maneras:
        .row.justify-content-center.cajon.C09.p-4.mb-0
          .col-12.order-lg-2.order-2
            ol.lista-ol--cuadro.lista-ol--separador.mb-0
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Atributo <em>style</em>: permite aplicar estilos directamente dentro de una etiqueta HTML, lo que se conoce como estilo en línea.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Elemento &lt;style&gt;: permite definir estilos CSS dentro del mismo documento HTML, generalmente dentro de la sección &lt;head&gt;.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Elemento &lt;link&gt;: permite vincular un archivo externo de CSS que contiene los estilos de la página.
              li.mb-2
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Elemento &lt;head&gt;: sección del documento HTML donde normalmente se incluyen los elementos &lt;style&gt; y &lt;link&gt; para definir o enlazar los estilos.
    p.mb-0(data-aos="fade-down") Entre las propiedades más utilizadas en CSS se encuentran:
    .row.mb-0
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema4/img17.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-4 col-xl-4")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img18.svg", alt="Imagen decorativa").img100.m-auto
                  p color: define el color del texto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img19.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>font-family</em>: establece la fuente tipográfica del texto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img20.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>font-size</em>: determina el tamaño del texto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img21.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>border</em>: define los bordes de un elemento.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img22.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>padding</em>: controla el espacio interno entre el contenido y el borde del elemento.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img23.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>margin</em>: controla el espacio externo entre un elemento y otros elementos de la página.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-12
        .tarjeta.tarjeta--C13.p-4.py-2.d-inline-block
          h5.mb-0 Ejemplo de código HTML con CSS
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de una página HTML que incluye estilos CSS definidos dentro del mismo documento mediante la etiqueta &lt;style&gt;.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-0
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #69D7E5;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #6CB9FF;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFD453;")
          .p-4(style="background-color: #0d0d2b; overflow-x: auto;")
            pre.p-0.m-0(style="background-color: transparent; border: none;")
              code.text-white.font-monospace(style="white-space: pre; color: #fff !important;")
                | &lt;!DOCTYPE html&gt;
                | &lt;html lang="es"&gt;
                | 
                | &lt;head&gt;
                |     &lt;meta charset="UTF-8"&gt;
                |     &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                |     &lt;title&gt;Ejemplo de etiquetas HTML con CSS&lt;/title&gt;
                | 
                |     &lt;!-- Estilos CSS internos --&gt;
                |     &lt;style&gt;
                | 
                |         body {
                |             font-family: Arial, sans-serif;
                |             margin: 0;
                |             background-color: #f4f6f9;
                |         }
                | 
                |         header {
                |             background-color: #3498db;
                |             color: white;
                |             padding: 20px;
                |             text-align: center;
                |         }
                | 
                |         nav {
                |             background-color: #2c3e50;
                |             padding: 10px;
                |             text-align: center;
                |         }
                | 
                |         nav a {
                |             color: white;
                |             text-decoration: none;
                |             margin: 0 10px;
                |             font-weight: bold;
                |         }
                | 
                |         nav a:hover {
                |             color: #f1c40f;
                |         }
                | 
                |         section {
                |             padding: 20px;
                |             margin: 20px;
                |             background-color: white;
                |             border-radius: 8px;
                |             border: 1px solid #ddd;
                |         }
                | 
                |         h1, h2, h3, h4, h5, h6 {
                |             color: #2c3e50;
                |         }
                | 
                |         p {
                |             font-size: 16px;
                |             color: #555;
                |         }
                | 
                |         img {
                |             display: block;
                |             margin: 15px auto;
                |             border-radius: 8px;
                |         }
                | 
                |         ul, ol {
                |             margin-left: 20px;
                |         }
                | 
                |         li {
                |             margin: 5px 0;
                |         }
                | 
                |         div {
                |             border: 2px dashed #3498db;
                |             padding: 10px;
                |             margin-top: 10px;
                |             background-color: #ecf0f1;
                |         }
                | 
                |         form {
                |             margin-top: 15px;
                |         }
                | 
                |         input {
                |             padding: 8px;
                |             margin: 5px 0;
                |             width: 100%;
                |             max-width: 300px;
                |         }
                | 
                |         button {
                |             background-color: #3498db;
                |             color: white;
                |             padding: 10px 20px;
                |             border: none;
                |             border-radius: 5px;
                |             cursor: pointer;
                |         }
                | 
                |         button:hover {
                |             background-color: #2980b9;
                |         }
                | 
                |         footer {
                |             background-color: #2c3e50;
                |             color: white;
                |             text-align: center;
                |             padding: 15px;
                |             margin-top: 20px;
                |         }
                | 
                |     &lt;/style&gt;
                | &lt;/head&gt;
                | 
                | &lt;body&gt;
                | 
                |     &lt;!-- Encabezado de la página --&gt;
                |     &lt;header&gt;
                |         &lt;h1&gt;Mi página <em>web</em>&lt;/h1&gt;
                |         &lt;p&gt;Ejemplo de estructura HTML con estilos CSS.&lt;/p&gt;
                |     &lt;/header&gt;
                | 
                |     &lt;!-- Menú de navegación --&gt;
                |     &lt;nav&gt;
                |         &lt;a href="#inicio"&gt;Inicio&lt;/a&gt;
                |         &lt;a href="#contenido"&gt;Contenido&lt;/a&gt;
                |         &lt;a href="#contacto"&gt;Contacto&lt;/a&gt;
                |     &lt;/nav&gt;
                | 
                |     &lt;!-- Sección de encabezados --&gt;
                |     &lt;section id="inicio"&gt;
                |         &lt;h2&gt;Encabezados en HTML&lt;/h2&gt;
                |         &lt;h1&gt;Encabezado h1&lt;/h1&gt;
                |         &lt;h2&gt;Encabezado h2&lt;/h2&gt;
                |         &lt;h3&gt;Encabezado h3&lt;/h3&gt;
                |         &lt;h4&gt;Encabezado h4&lt;/h4&gt;
                |         &lt;h5&gt;Encabezado h5&lt;/h5&gt;
                |         &lt;h6&gt;Encabezado h6&lt;/h6&gt;
                |     &lt;/section&gt;
                | 
                |     &lt;!-- Contenido principal --&gt;
                |     &lt;section id="contenido"&gt;
                |         &lt;h2&gt;Párrafos y formato de texto&lt;/h2&gt;
                |         &lt;p&gt;Este es un párrafo de ejemplo en HTML.&lt;/p&gt;
                |         &lt;p&gt;
                |             Aquí se muestra &lt;strong&gt;texto en negrita&lt;/strong&gt; y
                |             &lt;em&gt;texto en cursiva&lt;/em&gt;.
                |         &lt;/p&gt;
                |         &lt;h2&gt;Imagen&lt;/h2&gt;
                |         &lt;img src="https://via.placeholder.com/300"
                |              alt="Imagen de ejemplo utilizada para ilustrar la inserción de imágenes en HTML"&gt;
                |         &lt;h2&gt;Lista no ordenada&lt;/h2&gt;
                |         &lt;ul&gt;
                |             &lt;li&gt;Elemento 1&lt;/li&gt;
                |             &lt;li&gt;Elemento 2&lt;/li&gt;
                |             &lt;li&gt;Elemento 3&lt;/li&gt;
                |         &lt;/ul&gt;
                |         &lt;h2&gt;Lista ordenada&lt;/h2&gt;
                |         &lt;ol&gt;
                |             &lt;li&gt;Paso 1&lt;/li&gt;
                |             &lt;li&gt;Paso 2&lt;/li&gt;
                |             &lt;li&gt;Paso 3&lt;/li&gt;
                |         &lt;/ol&gt;
                |         &lt;div&gt;
                |             &lt;h3&gt;Contenedor div&lt;/h3&gt;
                |             &lt;p&gt;
                |                 Este contenido está dentro de un contenedor
                |                 &lt;strong&gt;div&lt;/strong&gt;, el cual se utiliza para agrupar
                |                 elementos dentro de una página <em>web</em>.
                |             &lt;/p&gt;
                |         &lt;/div&gt;
                |     &lt;/section&gt;
                | 
                |     &lt;!-- Formulario --&gt;
                |     &lt;section id="contacto"&gt;
                |         &lt;h2&gt;Formulario de contacto&lt;/h2&gt;
                |         &lt;form action="#" method="post"&gt;
                |             &lt;label for="nombre"&gt;Nombre&lt;/label&gt;&lt;br&gt;
                |             &lt;input type="text" id="nombre" name="nombre"&gt;&lt;br&gt;&lt;br&gt;
                |             &lt;label for="correo"&gt;Correo electrónico&lt;/label&gt;&lt;br&gt;
                |             &lt;input type="email" id="correo" name="correo"&gt;&lt;br&gt;&lt;br&gt;
                |             &lt;button type="submit"&gt;Enviar&lt;/button&gt;
                |         &lt;/form&gt;
                |     &lt;/section&gt;
                | 
                |     &lt;!-- Pie de página --&gt;
                |     &lt;footer&gt;
                |         &lt;p&gt;Pie de página – Ejemplo de HTML y CSS&lt;/p&gt;
                |     &lt;/footer&gt;
                | 
                | &lt;/body&gt;
                | &lt;/html&gt;
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span HTML con estilos CSS
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema4/img24.svg', alt='En la figura 7 se presenta una página <em>web</em> de ejemplo donde se aplican estilos CSS para definir colores, tipografía, menús de navegación, secciones de contenido y formulario.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema4/img25.svg', alt='En la figura 7 se presenta una página <em>web</em> de ejemplo donde se aplican estilos CSS para definir colores, tipografía, menús de navegación, secciones de contenido y formulario.')
    p.mb-4(data-aos="fade-down") El desarrollo de este código HTML con integración de estilos CSS permite comprender de manera práctica cómo se construye y presenta una página <em>web</em> básica. A través del uso de etiquetas estructurales como &lt;header&gt;, &lt;nav,&gt; &lt;section&gt; y &lt;footer&gt;, se organiza el contenido de forma lógica y semántica, lo que facilita tanto la lectura del código como la navegación del usuario.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img26.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center.mb-0
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img27.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-3 La incorporación de CSS mediante la etiqueta &lt;style&gt; permite mejorar la apariencia visual del sitio <em>web</em> mediante propiedades como color, tipografía, márgenes, bordes y espaciados. Esto contribuye a crear interfaces más atractivas, organizadas y fáciles de usar.
        .cajon.cajon.C01.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Asimismo, el uso de elementos como listas, imágenes y formularios muestra cómo HTML permite estructurar diferentes tipos de contenido, mientras que CSS optimiza su presentación visual. La combinación de ambas tecnologías constituye la base del desarrollo <em>frontend</em> y resulta fundamental para la creación de aplicaciones <em>web</em> modernas.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C03.px-4.py-3
          .row.justify-content-around.align-items-center
            .col.col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img24.svg")
            .col.col-lg-7.col-12.mb-lg-0.mb-3
              h5.mb-0 Para complementar la información, acceder al video: 
              p.mb-0 Aplicando el CSS. 
            .col.col-lg-2.col-12.text-center.text-lg-start
              a.boton.color-acento-botones(href="https://www.youtube.com/embed/_qlj_FyUR-w?si=ty0Vf6iAWgLfsrf3" target="_blank")
                span Abrir video
                i.fas.fa-file-video
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Estilos y guías de estilo para la presentación <em>web</em>
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img28.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img29.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-3 Los estilos en la <em>web</em> se refieren al conjunto de características visuales que determinan la apariencia de una página o aplicación. Estos estilos son implementados principalmente mediante CSS (Cascading Style Sheets), el cual permite definir colores, tipografías, tamaños, espacios, alineaciones y otros aspectos visuales de la interfaz.
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Los estilos permiten transformar una estructura HTML básica en una interfaz visualmente organizada, atractiva y funcional. Además, facilitan la adaptación del contenido a diferentes dispositivos mediante técnicas como el diseño responsivo, lo cual mejora la accesibilidad y la experiencia de usuario.
        p.mb-0(data-aos="fade-down") Los estilos presentan diversas <b>características</b> que los convierten en un elemento fundamental dentro del desarrollo <em>web</em>:
    .row.BG01.justify-content-center.align-items-stretch.mb-4.px-4.py-4.mb-0
      .row.justify-content-center.mb-4
        .col.col-lg-7.col-12.mb-lg-0.mb-3
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
            ul.lista-ul--color.mt-4(data-aos="fade-down")
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Permiten separar el contenido del diseño.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Mejoran la apariencia visual de la interfaz.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Facilitan la reutilización de componentes de diseño.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Permiten mantener una consistencia visual en toda la aplicación.
              li.mb-0
                i.fas.fa-cloud-arrow-down
                p.mb-0 Favorecen la adaptación del contenido a diferentes dispositivos y tamaños de pantalla.
        .col.col-lg-3.col-8
          figure
            img(src='@/assets/curso/tema4/img30.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Existen diferentes formas de aplicar estilos en una página <em>web</em>, dependiendo de las necesidades del proyecto y de la organización del código.
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row.justify-content-center(titulo="a) Estilos en línea (<em>Inline</em> CSS)")
        .col-12.col-lg-12.order-lg-1.order-2
          p Se aplican directamente dentro de una etiqueta HTML utilizando el atributo <em>style</em>. Generalmente se utilizan para realizar pruebas rápidas o aplicar modificaciones puntuales. Sin embargo, no se recomiendan en proyectos grandes debido a que dificultan el mantenimiento del código y no permiten reutilizar estilos.
          h5.mb-4 Ejemplo en HTML:
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              .cajon.C11.p-4.h-100
                pre.m-0(style="background-color: transparent; border: none;")
                  code.text-white.font-monospace
                    | &lt;!DOCTYPE html&gt;
                    | &lt;html&gt;
                    | &lt;body&gt;
                    | 
                    | &lt;h1 style="color: blue;"&gt;Título en azul&lt;/h1&gt;
                    | &lt;p style="font-size: 18px;"&gt;Este es un párrafo con tamaño de letra personalizado.&lt;/p&gt;
                    | 
                    | &lt;/body&gt;
                    | &lt;/html&gt;
            .col.col-lg-2.col-4.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema4/img31.svg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="b) Estilos internos (<em>Internal</em> CSS)")
        .col-12.col-lg-12.order-lg-1.order-2
          p Se definen dentro del mismo archivo HTML, utilizando la etiqueta style ubicada en la sección <em>head</em> del documento. Esta forma se utiliza cuando los estilos solo serán aplicados a una página específica.
          h5.mb-4 Ejemplo en HTML:
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              .cajon.C11.p-4.h-100
                pre.m-0(style="background-color: transparent; border: none;")
                  code.text-white.font-monospace
                    | &lt;!DOCTYPE html&gt;
                    | &lt;html&gt;
                    | &lt;head&gt;
                    
                    | &lt;style&gt;
                    | h1 { color: red; }
                    | p { font-size: 18px; color: gray; }

                    | &lt;/style&gt;
                    | &lt;/head&gt;
                    | &lt;body&gt;

                    | &lt;h1&gt;Título en rojo&lt;/h1&gt;
                    | &lt;p&gt;Este es un párrafo con estilos internos.&lt;/p&gt;
                    | &lt;/body&gt;
                    | &lt;/html&gt;
            .col.col-lg-2.col-4.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema4/img32.svg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="c) Estilos externos (<em>External</em> CSS)")
        .col-12.col-lg-12.order-lg-1.order-2
          p Se escriben en un archivo independiente con extensión .css y posteriormente se enlazan al documento HTML mediante la etiqueta <em>link</em>. Esta es la forma más recomendada en el desarrollo profesional, ya que permite reutilizar estilos en múltiples páginas y facilita el mantenimiento del código.
          h5.mb-4 Ejemplo en HTML:
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              .cajon.C11.px-4.py-3.h-100
                pre.m-0(style="background-color: transparent; border: none;")
                  code.text-white.font-monospace
                    | &lt;!DOCTYPE html&gt;
                    | &lt;html&gt;
                    | &lt;head&gt;
                    | 
                    | &lt;link rel="stylesheet" href="estilos.css"&gt;
                    | 
                    | &lt;/head&gt;
                    | &lt;body&gt;
                    | 
                    | &lt;h1&gt;Título con CSS externo&lt;/h1&gt;
                    | &lt;p&gt;Este es un párrafo con estilos externos.&lt;/p&gt;
                    | 
                    | &lt;/body&gt;
                    | &lt;/html&gt;
            .col.col-lg-2.col-4.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema4/img33.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Con el fin de sintetizar las diferentes formas de aplicar estilos, a continuación, se presenta una comparación entre las principales formas de aplicar CSS en una página <em>web</em>.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Comparación de formas de aplicar estilos CSS
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Tipo de estilo
                th(data-aos="fade-down")(style= "width: 25%") Descripción
                th(data-aos="fade-down")(style= "width: 25%") Ventajas
                th(data-aos="fade-down")(style= "width: 25%") Limitaciones
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Estilos en línea (<em>Inline</em> CSS)
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Los estilos se aplican directamente dentro de una etiqueta HTML mediante el atributo <em>style</em>.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permiten realizar cambios rápidos en elementos específicos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") No permiten reutilización de estilos y dificultan el mantenimiento del código en proyectos grandes.
              tr
                td(data-aos="fade-down") Estilos internos (<em>Internal</em> CSS)
                td(data-aos="fade-down") Los estilos se definen dentro del mismo documento HTML mediante la etiqueta &lt;style&gt; ubicada en la sección &lt;head&gt;.
                td(data-aos="fade-down") Permiten aplicar estilos a una página completa sin crear archivos adicionales.
                td(data-aos="fade-down") Los estilos solo funcionan dentro de esa página y no se pueden reutilizar fácilmente en otros documentos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Estilos externos (<em>External</em> CSS)
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Los estilos se escriben en un archivo independiente con extensión .css y se enlazan al documento HTML mediante la etiqueta &lt;link&gt;.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Facilitan la reutilización de estilos, mejoran la organización del código y permiten mantener consistencia en múltiples páginas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Requieren crear y gestionar archivos adicionales dentro del proyecto.
    p.mb-4(data-aos="fade-down") Las <b>guías de estilo</b> son documentos o conjuntos de reglas que establecen cómo deben aplicarse los elementos visuales dentro de una página o aplicación <em>web</em>. Estas guías permiten mantener uniformidad en aspectos como el uso de colores, tipografías, tamaños de texto, espacios, botones, iconos y componentes de interfaz.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12.cajon.C01.p-4
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.order-lg-2.order-2
            p La implementación de guías de estilo facilita el trabajo colaborativo entre diseñadores y desarrolladores, además de garantizar que todas las páginas de una aplicación mantengan una apariencia coherente y profesional.
            p.mb-0 Los estilos y las guías de estilo son elementos fundamentales en la presentación <em>web</em>. Su correcta aplicación permite crear interfaces claras, atractivas y funcionales, mejorando la experiencia del usuario y facilitando el desarrollo y mantenimiento de aplicaciones <em>web</em>.
          .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img34.svg', alt='Imagen decorativa')
</template>
<script>
export default {
  name: 'Tema4',
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
