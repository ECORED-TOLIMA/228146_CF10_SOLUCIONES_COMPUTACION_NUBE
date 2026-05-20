<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diseño de contenido e información <em>web</em>
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El diseño de contenido e información <em>web</em> es un proceso que se enfoca en estructurar, organizar y presentar los contenidos digitales de manera clara, accesible y comprensible para los usuarios. Este proceso integra aspectos de comunicación, diseño visual y experiencia de usuario (UX), con el propósito de facilitar la interacción con los sitios o aplicaciones <em>web</em>.
    p.mb-4(data-aos="fade-down") Un diseño adecuado del contenido permite que la información se distribuya de forma lógica, facilitando la lectura, la navegación y el acceso a los recursos disponibles. Para lograrlo, se aplican principios relacionados con la organización del contenido, el uso de formatos digitales apropiados y el diseño de estructuras visuales que orienten al usuario dentro del entorno <em>web</em>.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')
      .col-lg-8.col-12
        .cajon.cajon.C05.px-4.py-3.mb-0
          p.mb-0 En este contexto, el diseño de información se apoya en herramientas y técnicas que permiten planificar la estructura de las páginas, establecer jerarquías de contenido y definir la disposición de los elementos en la interfaz. De esta manera, se busca mejorar la comprensión del contenido, optimizar la experiencia del usuario y garantizar que la información cumpla su propósito dentro del sistema digital.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Características y distribución del contenido <em>web</em>
    p(data-aos="fade-down") El contenido <em>web</em> constituye uno de los elementos más importantes dentro del diseño de aplicaciones digitales, ya que representa la información que los usuarios consultan, interpretan e interactúan dentro de un sitio <em>web</em>. Una adecuada organización del contenido permite que la información sea clara, accesible y fácil de comprender, lo que mejora la experiencia del usuario y facilita la navegación dentro del sistema.
    p(data-aos="fade-down") En el diseño de contenido <em>web</em> es necesario considerar una serie de características que orientan la forma en que se presentan los elementos visuales, los textos y los recursos interactivos dentro de una página.
    p.mb-4(data-aos="fade-down") Entre las principales características del diseño de contenido <em>web</em> se encuentran las siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
          h4.text-center Estética
          p Corresponde a la apariencia visual del sitio <em>web</em>. El uso adecuado del color, la tipografía y la composición visual contribuye a generar una experiencia agradable y a fortalecer la identidad visual del sitio.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')
          h4.text-center Usabilidad
          p Hace referencia a la facilidad con la que los usuarios pueden interactuar con una página <em>web</em>. Un diseño usable permite que las personas encuentren la información rápidamente y realicen sus tareas sin dificultades.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
          h4.text-center Interactividad
          p Se relaciona con la capacidad del sistema para responder a las acciones del usuario. Elementos como botones, formularios, menús o animaciones permiten que la interacción sea dinámica y participativa.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
          h4.text-center Responsividad
          p Permite que el contenido <em>web</em> se adapte automáticamente a diferentes dispositivos y tamaños de pantalla, como computadores, tabletas y teléfonos móviles.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop')
          h4.text-center Consistencia
          p Garantiza que los elementos de diseño mantengan un mismo estilo visual y funcional en todas las páginas del sitio, facilitando el aprendizaje y la navegación del usuario.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
          h4.text-center Accesibilidad
          p Busca que el contenido pueda ser utilizado por todas las personas, incluyendo aquellas con limitaciones visuales, auditivas o motoras, mediante el uso de buenas prácticas de diseño inclusivo.
    p.mb-4(data-aos="fade-down") Además de estas características, es importante considerar la forma en que el contenido se distribuye dentro de la página. La distribución del contenido <em>web</em> determina cómo se organiza la información, permitiendo que los usuarios identifiquen fácilmente los elementos principales y naveguen de manera eficiente.
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Elementos de la distribución del contenido <em>web</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Elemento
                th(data-aos="fade-down")(style= "width: 25%") Descripción
                th(data-aos="fade-down")(style= "width: 25%") Aspectos clave
                th(data-aos="fade-down")(style= "width: 25%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Estructura del contenido.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Organización jerárquica de la información.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Títulos, subtítulos y orden lógico.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Artículo dividido en secciones.
              tr
                td(data-aos="fade-down") Jerarquía visual.
                td(data-aos="fade-down") Destaca los elementos más importantes.
                td(data-aos="fade-down") Tamaño, color y posición.
                td(data-aos="fade-down") Botón destacado.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Espacio en blanco.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Espacios que mejoran la lectura.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Márgenes y separación.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Texto con espacios amplios.
              tr
                td(data-aos="fade-down") Diseño en rejilla (<em>Grid</em>).
                td(data-aos="fade-down") Organización en filas y columnas.
                td(data-aos="fade-down") Alineación y consistencia.
                td(data-aos="fade-down") Página con columnas.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Navegación.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Forma de desplazarse dentro del sitio.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Menús y enlaces claros.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Menú superior.
              tr
                td(data-aos="fade-down") <em>Responsive</em> (Adaptabilidad).
                td(data-aos="fade-down") Adaptación a diferentes dispositivos.
                td(data-aos="fade-down") Diseño flexible.
                td(data-aos="fade-down") Menú hamburguesa en celular.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Tipografía y legibilidad.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Forma en que se presenta el texto.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Tamaño, fuente y contraste.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Fuente clara.
              tr
                td(data-aos="fade-down") Contenido visual.
                td(data-aos="fade-down") Uso de imágenes y multimedia.
                td(data-aos="fade-down") Calidad y apoyo visual.
                td(data-aos="fade-down") Infografías.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Escaneo de contenido.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Facilita la lectura rápida.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Listas y párrafos cortos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Uso de viñetas.
              tr
                td(data-aos="fade-down") Llamados a la acción (CTA).
                td(data-aos="fade-down") Elementos que invitan a actuar.
                td(data-aos="fade-down") Botones visibles.
                td(data-aos="fade-down") Comprar ahora.
        p.mb-0(data-aos="fade-down") Una correcta distribución del contenido facilita la lectura, mejora la comprensión de la información y permite que los usuarios interactúen con el sitio <em>web</em> de manera más eficiente.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Formatos y tipos de archivos para la publicación de recursos
    p.mb-4(data-aos="fade-down") La publicación de recursos <em>web</em> constituye un proceso fundamental en el desarrollo y gestión de sitios y aplicaciones digitales. Este proceso implica el uso de diversos formatos y tipos de archivos que permiten estructurar el contenido, definir la apariencia visual, incorporar elementos multimedia y agregar funcionalidades interactivas.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img09.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.px-4.py-4.mb-4
          p.mb-0(data-aos="fade-down") Cada tipo de archivo cumple una función específica dentro del funcionamiento de una página <em>web</em>. La correcta selección y uso de estos formatos influye directamente en el rendimiento del sitio, la experiencia del usuario, la accesibilidad, la seguridad y el posicionamiento en los motores de búsqueda (SEO). Por esta razón, los desarrolladores <em>web</em> deben conocer las características y aplicaciones de los principales formatos utilizados en la publicación de recursos digitales.
        p.mb-0(data-aos="fade-down") Un recurso <em>web</em> es cualquier archivo digital que puede ser consultado a través de Internet mediante un navegador <em>web</em> y que se encuentra almacenado en un servidor. Estos recursos se transmiten generalmente utilizando protocolos como HTTP o HTTPS.
    p.mb-4(data-aos="fade-down") Los recursos <em>web</em> pueden clasificarse de acuerdo con su función dentro del sitio o aplicación, entre los que se destacan los archivos de estructura, de presentación, de programación y los archivos multimedia.
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row.justify-content-center(titulo="a) Archivos de estructura y contenido")
        .col-12.col-lg-12.order-lg-1.order-2
          p Son aquellos que definen la organización básica del contenido dentro de una página <em>web</em>. El lenguaje principal utilizado para este propósito es HTML (HyperText Markup Language), cuyos archivos se identifican generalmente con las extensiones .html o .htm, utilizadas para representar documentos <em>web</em> interpretados por los navegadores.
          p.mb-4 HTML permite organizar la información mediante etiquetas que estructuran elementos como títulos, párrafos, imágenes, enlaces, listas, tablas y formularios. Gracias a esta estructura, los navegadores pueden interpretar y presentar correctamente el contenido de una página <em>web</em>.
          .row.justify-content-center
            .col-lg-6.col-12
              .tarjeta.tarjeta--blanca.p-4
                h5.mb-0 Entre sus principales características se destacan:
                ul.lista-ul--color.mt-4
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Está basado en etiquetas o <em>tags</em>.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Permite integrar diferentes tipos de contenido.
                  li.mb-0
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Constituye la base de cualquier sitio <em>web</em>.
            .col-lg-6.col-12
              .tarjeta.tarjeta--blanca.p-4
                h5.mb-0 Entre sus ventajas se encuentran:
                ul.lista-ul--color.mt-4
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Es un estándar universal utilizado en toda la <em>web</em>.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Es compatible con todos los navegadores.
                  li.mb-0
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Favorece la accesibilidad y el posicionamiento en buscadores.
      .row.justify-content-center(titulo="b) Archivos de presentación y diseño")
        .col-12.col-lg-12.order-lg-1.order-2
          p Los archivos de presentación se encargan de definir la apariencia visual del contenido <em>web</em>. Para ello se utiliza CSS (Cascading Style Sheets), cuyos archivos se guardan con la extensión .css, la cual permite aplicar estilos y formatos a los documentos HTML.
          p.mb-4 CSS permite controlar aspectos visuales como colores, tipografías, tamaños, márgenes, alineaciones y disposición de los elementos en la página. Su principal función es separar el contenido de su presentación, lo que facilita la organización del código y mejora el mantenimiento del sitio.
          .row
            .col-lg-6.col-12
              .tarjeta.tarjeta--blanca.p-4
                h5.mb-0 Entre sus principales ventajas se encuentran:
                ul.lista-ul--color.mt-4
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Permite separar el contenido del diseño visual.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Facilita la reutilización de estilos en diferentes páginas.
                  li.mb-0
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Mejora la consistencia visual y la experiencia del usuario.
      .row.justify-content-center(titulo="c) Archivos de programación y comportamiento")
        .col-12.col-lg-12.order-lg-1.order-2
          p Permiten añadir funcionalidad e interactividad a las páginas <em>web</em>. Para ello se utiliza JavaScript, cuyos archivos se guardan con la extensión .js, empleada para implementar <em>scripts</em> que controlan el comportamiento dinámico de las páginas <em>web</em>.
          p.mb-4 JavaScript se ejecuta principalmente en el navegador del usuario y permite realizar acciones dinámicas como validar formularios, actualizar contenido sin recargar la página, crear animaciones o comunicarse con servidores.
          .row
            .col-lg-6.col-12
              .tarjeta.tarjeta--blanca.p-4
                h5.mb-0 Entre sus características principales se destacan:
                ul.lista-ul--color.mt-4
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Permite crear interfaces interactivas.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Facilita la manipulación del contenido de la página.
                  li.mb-0
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Permite la comunicación con servidores y servicios <em>web</em>.
    p.mb-4(data-aos="fade-down") Además de los archivos de estructura, diseño y programación, los sitios <em>web</em> utilizan diversos formatos multimedia que enriquecen la experiencia del usuario.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Formatos de imagen utilizados en la <em>web</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Formato
                th(data-aos="fade-down")(style= "width: 25%") Extensión
                th(data-aos="fade-down")(style= "width: 25%") Uso principal
                th(data-aos="fade-down")(style= "width: 25%") Características
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") JPEG
                td(data-aos="fade-down")(style="background-color: #F0F8FF") .jpg
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Fotografías.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alta compresión y buena calidad.
              tr
                td(data-aos="fade-down") PNG
                td(data-aos="fade-down") .png
                td(data-aos="fade-down") Imágenes con transparencia.
                td(data-aos="fade-down") Mayor calidad y soporte de transparencia.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") GIF
                td(data-aos="fade-down")(style="background-color: #F0F8FF") .gif
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Animaciones simples.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Soporte limitado de colores.
              tr
                td(data-aos="fade-down") SVG
                td(data-aos="fade-down") .svg
                td(data-aos="fade-down") Gráficos vectoriales.
                td(data-aos="fade-down") Escalables sin pérdida de calidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") <em>web</em>P
                td(data-aos="fade-down")(style="background-color: #F0F8FF") .<em>web</em>p
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Imágenes optimizadas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Menor tamaño con buena calidad.
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Formatos de audio utilizados en la <em>web</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Formato
                th(data-aos="fade-down")(style= "width: 35%") Características
                th(data-aos="fade-down")(style= "width: 35%") Uso
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") MP3
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Buena compresión y compatibilidad.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Música y <em>podcasts</em>.
              tr
                td(data-aos="fade-down") WAV
                td(data-aos="fade-down") Alta calidad de sonido.
                td(data-aos="fade-down") Producción profesional.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") OGG
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Formato abierto y libre.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alternativa a MP3.
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Formatos de video utilizados en la <em>web</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Formato
                th(data-aos="fade-down")(style= "width: 35%") Características
                th(data-aos="fade-down")(style= "width: 35%") Uso
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") MP4
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alta compatibilidad y compresión.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Estándar más utilizado en la <em>web</em>.
              tr
                td(data-aos="fade-down") <em>web</em>M
                td(data-aos="fade-down") Formato abierto optimizado para <em>web</em>.
                td(data-aos="fade-down") Reproducción en navegadores.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") AVI
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alta calidad pero archivos pesados.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Poco recomendado para <em>web</em>.
    p.mb-0(data-aos="fade-down") Para garantizar un buen rendimiento y una adecuada experiencia de usuario, es importante aplicar buenas prácticas al momento de publicar recursos <em>web</em>. Entre las más recomendadas se encuentran:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/img10.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img11.svg", alt="Imagen decorativa").img100.m-auto
                  p Comprimir imágenes y videos para reducir el tiempo de carga.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img12.svg", alt="Imagen decorativa").img100.m-auto
                  p Utilizar formatos modernos y optimizados como <em>web</em>P
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img13.svg", alt="Imagen decorativa").img100.m-auto
                  p Minimizar archivos CSS y JavaScript.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img14.svg", alt="Imagen decorativa").img100.m-auto
                  p Implementar técnicas de carga diferida (<em>lazy loading</em>).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img15.svg", alt="Imagen decorativa").img100.m-auto
                  p Verificar la compatibilidad entre diferentes navegadores.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img16.svg", alt="Imagen decorativa").img100.m-auto
                  p Optimizar los recursos para mejorar el posicionamiento SEO.
    p.mb-0(data-aos="fade-down") En un entorno digital cada vez más exigente, conocer y aplicar correctamente los formatos y tipos de archivos utilizados en la <em>web</em> permite desarrollar sitios más rápidos, eficientes y accesibles, contribuyendo a mejorar la experiencia de los usuarios y el desempeño general del sistema.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Diseño de información: <em>wireframe</em>, jerarquía de información y retículas
    p.mb-4(data-aos="fade-down") En el desarrollo de aplicaciones <em>web</em> y soluciones digitales, el diseño de la información permite organizar y presentar los contenidos de manera clara, lógica y accesible para los usuarios. No basta con que un sistema funcione correctamente desde el punto de vista técnico; también es necesario que la información esté estructurada de forma comprensible para facilitar la navegación, la interacción y el uso eficiente del sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img17.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Para lograrlo, se utilizan diferentes herramientas de planificación que ayudan a definir cómo se distribuirá la información dentro de una interfaz digital. Entre las más utilizadas se encuentran el <em>wireframe</em>, la jerarquía de la información y las retículas, las cuales permiten transformar los requerimientos del sistema en estructuras visuales que orientan tanto el diseño como el desarrollo.
        .cajon.cajon.C01.color-primario.px-4.py-4.mb-0
          p.mb-0(data-aos="fade-down") El <em>wireframe</em> es una representación visual básica de una interfaz digital. Se trata de un esquema o prototipo que presenta la distribución de los elementos dentro de una página o pantalla, como menús, encabezados, botones, imágenes y áreas de contenido. Su objetivo es definir la estructura general de la interfaz antes de aplicar detalles gráficos.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Características de <em>wireframe</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img18.svg', alt='En la figura 3 se presenta la estructura básica de una interfaz, incluyendo la distribución de elementos, la jerarquía del contenido y la guía de navegación.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema2/img19.svg', alt='En la figura 3 se presenta la estructura básica de una interfaz, incluyendo la distribución de elementos, la jerarquía del contenido y la guía de navegación.')
    p.mb-4(data-aos="fade-down") Entre las principales características del <em>wireframe</em> se encuentran:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img20.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Representar de forma esquemática la estructura de la interfaz.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img21.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Enfocarse en la funcionalidad más que en la apariencia visual.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img22.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Permitir realizar cambios de manera rápida durante el proceso de diseño.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Facilitar la comunicación entre diseñadores, desarrolladores y otros miembros del equipo.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C03.px-4.py-3
          .row.justify-content-around.align-items-center
            .col.col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img24.svg")
            .col.col-lg-7.col-12.mb-lg-0.mb-3
              h5 Para complementar la información, acceder al video ¿Cómo realizar un <em>wireframe</em>?
            .col.col-lg-2.col-12.text-center.text-lg-start
              a.boton.color-acento-botones(href="https://www.youtube.com/embed/94UTvXQqRfM?si=5wpemq54vnYdVqGX" target="_blank")
                span Abrir video
                i.fas.fa-file-video
    p.mb-0(data-aos="fade-down") Otro elemento fundamental es la jerarquía de la información, que consiste en organizar los contenidos según su nivel de importancia. Una correcta jerarquía permite que el usuario identifique fácilmente los elementos principales y comprenda el orden en el que debe recorrer la información.
    .row.BG01.justify-content-center.align-items-stretch.mb-4.px-4.py-4.mb-0
      .row.justify-content-center.align-items-center.mb-0
        .col.col-lg-6.col-12.mb-lg-0.mb-3
          p.mb-4.text-bold(data-aos="fade-down") Para establecer la jerarquía de la información se utilizan diferentes recursos, como:
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
            ul.lista-ul--color.mt-4(data-aos="fade-down")
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Tamaño de títulos y textos.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Uso del color para resaltar información relevante.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Espaciado entre elementos.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Posición de los contenidos dentro de la pantalla.
              li.mb-0
                i.fas.fa-cloud-arrow-down
                p.mb-0 Agrupación de información relacionada.
            p.mb-0(data-aos="fade-down") 
        .col.col-lg-4.col-8
          figure
            img(src='@/assets/curso/tema2/img25.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Por su parte, las retículas o <em>Grid systems</em> son estructuras invisibles que permiten organizar el contenido dentro de una interfaz mediante la división del espacio en filas y columnas. Estas estructuras facilitan la alineación y distribución de los elementos, contribuyendo a crear diseños ordenados y coherentes.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Partes de una retícula
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img26.svg', alt='En la figura 4 se presentan las partes de una retícula utilizada en diseño <em>web</em>, compuesta por columnas, márgenes, zonas especiales, módulos, líneas de flujo y marcadores que organizan la distribución del contenido en la interfaz.')
            figcaption Nota. Tomado de Inesem Business School (s. f[VH5.).
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema2/img27.svg', alt='En la figura 4 se presentan las partes de una retícula utilizada en diseño <em>web</em>, compuesta por columnas, márgenes, zonas especiales, módulos, líneas de flujo y marcadores que organizan la distribución del contenido en la interfaz.')
          figcaption Nota. Tomado de Inesem Business School (s. f[VH5.).
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          h5 Entre los beneficios del uso de retículas se encuentran:
          ul.lista-ul--color.mb-0
            li.mb-2
              i.lista-ul__vineta
              p.mb-0 Mejorar la organización visual del contenido.
            li.mb-2
              i.lista-ul__vineta
              p.mb-0 Aumentar la consistencia del diseño en todas las páginas del sitio.
            li.mb-2
              i.lista-ul__vineta
              p.mb-0 Facilitar el desarrollo de interfaces adaptables a diferentes dispositivos.
            li
              i.lista-ul__vineta
              p.mb-0 Permitir una implementación más estructurada en el desarrollo <em>web</em>.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img28.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conjunto, el <em>wireframe</em>, la jerarquía de la información y las retículas se complementan dentro del proceso de diseño. Mientras el <em>wireframe</em> define la estructura inicial de la interfaz, la jerarquía organiza la importancia del contenido y las retículas permiten distribuir los elementos de manera ordenada dentro del espacio disponible.
</template>

<script>
export default {
  name: 'Tema2',
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
