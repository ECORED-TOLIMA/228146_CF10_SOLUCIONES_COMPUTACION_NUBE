<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Arquitectura de la información en aplicaciones <em>web</em>
    p.mb-4(data-aos="fade-down") La arquitectura de la información en aplicaciones <em>web</em> se refiere a la forma en que se organizan, estructuran y presentan los contenidos dentro de un sitio o aplicación digital para facilitar su comprensión y uso por parte de los usuarios. Su propósito principal es permitir que la información sea fácil de encontrar, interpretar y utilizar, garantizando una navegación clara y una experiencia de usuario eficiente.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-1.order-2
        .cajon.C01.p-4.h-100.w-100
          p En el desarrollo de aplicaciones <em>web</em>, la arquitectura de la información permite definir cómo se distribuyen los contenidos, cómo se relacionan entre sí y de qué manera los usuarios pueden acceder a ellos. Una estructura adecuada facilita la interacción con la plataforma, mejora la usabilidad y contribuye a que los usuarios logren sus objetivos de forma rápida e intuitiva.
          p.mb-0 Para lograrlo, se analizan aspectos como la organización de la información, la jerarquía de contenidos y los sistemas de navegación. Estos elementos permiten estructurar la aplicación de manera lógica, asegurando que los usuarios comprendan dónde se encuentran dentro del sitio y cómo pueden desplazarse hacia otras secciones.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img01.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") La arquitectura de la información también se relaciona con el diseño centrado en el usuario, ya que busca adaptar la estructura del contenido a las necesidades, expectativas y comportamientos de quienes utilizan la aplicación. Por esta razón, antes de diseñar interfaces o desarrollar funcionalidades, es fundamental definir cómo se organizará la información dentro del sistema.
        p.mb-0(data-aos="fade-down") En el contexto del desarrollo <em>web</em>, una arquitectura de la información bien definida contribuye a mejorar la usabilidad, optimizar la experiencia del usuario y facilitar el mantenimiento y crecimiento de las aplicaciones digitales. A partir de esta base se construyen los sistemas de navegación, las interfaces y los elementos visuales que permiten la interacción con la aplicación.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Organización de la información
    p.mb-4(data-aos="fade-down") En el desarrollo de aplicaciones <em>web</em>, la organización de la información constituye un elemento fundamental para garantizar una experiencia de usuario eficiente, intuitiva y satisfactoria. A medida que aumenta la cantidad de contenidos y funcionalidades en una aplicación, se hace necesario estructurar la información de forma lógica, clara y accesible.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") Una adecuada organización no solo facilita la navegación de los usuarios, sino que también contribuye a mejorar la usabilidad del sistema, optimizar el acceso a los contenidos y apoyar el cumplimiento de los objetivos de la aplicación.
        .cajon.cajon.C02.color-secundario.px-4.py-2.mb-0
          p.mb-0(data-aos="fade-down") La organización de la información forma parte de la arquitectura de la información, disciplina que se encarga de definir cómo se estructuran, relacionan y presentan los contenidos dentro de un entorno digital, como sitios <em>web</em>, aplicaciones móviles o plataformas virtuales. Esta fase se desarrolla después de identificar las necesidades del sistema y los requerimientos del usuario, permitiendo establecer una estructura coherente para la distribución del contenido.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img04.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        .cajon.cajon.C04.px-4.py-2.mb-0
          p.mb-0 La organización de la información corresponde al proceso de clasificar, estructurar y presentar los contenidos de una aplicación <em>web</em> de manera clara y comprensible, con el fin de que los usuarios puedan localizar fácilmente la información que necesitan.
    p.mb-4(data-aos="fade-down") Para lograrlo, la arquitectura de la información se apoya en varios elementos fundamentales:
    .desktop
      .row.mb-4
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img05.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Estructura
                p.mb-0 Define la forma en que se organizan los contenidos dentro de la aplicación. Puede adoptar distintos modelos, como estructuras jerárquicas, secuenciales o en red, dependiendo de la naturaleza del sistema y de las necesidades del usuario.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img06.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Navegación
                p.mb-0 Corresponde a los mecanismos que permiten al usuario desplazarse dentro de la aplicación, mediante menús, enlaces, botones o rutas de navegación que facilitan el acceso a las diferentes secciones.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img07.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Etiquetado
                p.mb-0 Consiste en asignar nombres claros y comprensibles a las categorías, secciones o funcionalidades de la aplicación, de manera que los usuarios puedan interpretar fácilmente la información disponible.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img08.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Búsqueda
                p.mb-0 
    .movil.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C05.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img09.png', alt='Imagen decorativa')
            h4 Estructura
            p.mb-0 Define la forma en que se organizan los contenidos dentro de la aplicación. Puede adoptar distintos modelos, como estructuras jerárquicas, secuenciales o en red, dependiendo de la naturaleza del sistema y de las necesidades del usuario.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C05.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img09.png', alt='Imagen decorativa')
            h4 Navegación
            p.mb-0 Corresponde a los mecanismos que permiten al usuario desplazarse dentro de la aplicación, mediante menús, enlaces, botones o rutas de navegación que facilitan el acceso a las diferentes secciones.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C05.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img10.png', alt='Imagen decorativa')
            h4 Etiquetado
            p.mb-0 Consiste en asignar nombres claros y comprensibles a las categorías, secciones o funcionalidades de la aplicación, de manera que los usuarios puedan interpretar fácilmente la información disponible.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--C05.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img11.png', alt='Imagen decorativa')
            h4 Búsqueda
            p.mb-0 Permite localizar contenidos específicos dentro de la aplicación a través de herramientas de búsqueda internas, lo que facilita el acceso rápido a la información cuando el volumen de contenidos es amplio.
    .row.BG01.justify-content-center.align-items-stretch.mb-4.px-4.py-4.mb-0
      .row.justify-content-center.align-items-center.mb-4
        .col.col-lg-6.col-12.mb-lg-0.mb-3
          p.mb-4.text-bold(data-aos="fade-down") Una adecuada organización de la información aporta múltiples beneficios en el diseño de aplicaciones <em>web</em>, entre los que se destacan:
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
            ul.lista-ul--color.mt-4(data-aos="fade-down")
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Mejora la experiencia del usuario.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Facilita la navegación y el acceso a los contenidos.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Reduce el tiempo de búsqueda de la información.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Incrementa la eficiencia en el uso del sistema.
              li.mb-0
                i.fas.fa-cloud-arrow-down
                p.mb-0 Favorece el posicionamiento en motores de búsqueda (SEO).
            p.mb-0(data-aos="fade-down") 
        .col.col-lg-4.col-8
          figure
            img(src='@/assets/curso/tema1/img13.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img14.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        .cajon.cajon.C04.px-4.py-3.mb-0
          p.mb-0 Por ejemplo, en una aplicación de comercio electrónico, la organización de la información permite guiar al usuario durante el proceso de navegación y compra.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Estructura de un comercio electrónico
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img15.svg', alt='En la figura 1 se presenta una estructura jerárquica de un sitio de comercio electrónico. En la parte superior se ubica la página de Inicio, desde la cual se desprenden las principales secciones del sitio: Categorías, Ofertas, Carrito, Perfil de usuario y Atención al cliente, donde se evidencia cómo se organiza la navegación principal para facilitar el acceso a los contenidos y servicios de la plataforma.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema1/img16.svg', alt='En la figura 1 se presenta una estructura jerárquica de un sitio de comercio electrónico. En la parte superior se ubica la página de Inicio, desde la cual se desprenden las principales secciones del sitio: Categorías, Ofertas, Carrito, Perfil de usuario y Atención al cliente, donde se evidencia cómo se organiza la navegación principal para facilitar el acceso a los contenidos y servicios de la plataforma.')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        p(data-aos="fade-down") En este tipo de aplicaciones suele utilizarse una estructura jerárquica, donde la página principal o inicio actúa como punto de acceso a las diferentes secciones del sistema.
        p.mb-0.text-center(data-aos="fade-down") Entre las secciones más comunes se encuentran:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Categorías, que agrupan los productos en diferentes tipos como tecnología, ropa u hogar, facilitando la búsqueda de artículos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Ofertas, destinada a mostrar promociones o descuentos especiales.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img19.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Carrito de compras, donde el usuario puede visualizar y gestionar los productos seleccionados antes de finalizar la compra.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img20.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Perfil de usuario, que permite acceder a la información personal, historial de pedidos y configuraciones de la cuenta.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img21.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Atención al cliente, que ofrece soporte, contacto y ayuda para resolver inquietudes o problemas.
    p.mb-0(data-aos="fade-down") Una estructura bien organizada permite que la aplicación presente una navegación clara, acceso rápido a la información y una mejor experiencia para el usuario, facilitando la interacción con el sistema.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Sistemas de navegación en sitios <em>web</em>
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img22.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el desarrollo de aplicaciones y sitios <em>web</em>, los sistemas de navegación constituyen un elemento fundamental para facilitar la interacción entre el usuario y el contenido. A medida que un sitio <em>web</em> incorpora mayor cantidad de información y funcionalidades, resulta necesario implementar mecanismos que permitan a los usuarios orientarse dentro del sistema y acceder a los contenidos de forma rápida y clara.
    p.mb-4(data-aos="fade-down") Los sistemas de navegación se definen como el conjunto de estructuras, elementos y mecanismos que permiten a los usuarios desplazarse dentro de un sitio o aplicación <em>web</em>. Su objetivo principal es guiar al usuario a través del contenido disponible, facilitando la localización de la información y mejorando la experiencia de uso.
    .row.BG01.justify-content-center.align-items-stretch.mb-4.px-4.py-4.mb-0
      .row.justify-content-center.align-items-center.mb-4
        .col.col-lg-6.col-12.mb-lg-0.mb-3
          p.mb-4.text-bold(data-aos="fade-down") Una navegación adecuada contribuye a:
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
            ul.lista-ul--color.mt-4(data-aos="fade-down")
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Facilitar el acceso a la información.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Mejorar la experiencia de usuario (UX).
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Reducir el tiempo de búsqueda.
              li
                i.fas.fa-cloud-arrow-down
                p.mb-0 Incrementar la permanencia en el sitio.
              li.mb-0
                i.fas.fa-cloud-arrow-down
                p.mb-0 Favorecer el posicionamiento en motores de búsqueda (SEO).
            p.mb-0(data-aos="fade-down") 
        .col.col-lg-4.col-8
          figure
            img(src='@/assets/curso/tema1/img23.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Los sitios <em>web</em> pueden utilizar diferentes tipos de navegación dependiendo de la estructura del contenido y de los objetivos de la aplicación.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 a) Navegación global
    p.mb-4(data-aos="fade-down") Corresponde al conjunto de enlaces principales que permiten acceder a las secciones más importantes del sitio <em>web</em>. Generalmente se ubica en la parte superior de la página en forma de menú principal y se mantiene visible en todas las páginas del sitio.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Características de la navegación global
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img24.svg', alt='En la figura 2 se presenta un sitio <em>web</em>, en donde se evidencia en la parte superior el menú principal y se mantiene visible en todas las páginas del sitio.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema1/img25.svg', alt='En la figura 2 se presenta un sitio <em>web</em>, en donde se evidencia en la parte superior el menú principal y se mantiene visible en todas las páginas del sitio.')
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 b) Navegación local
    p.mb-4(data-aos="fade-down") Permite al usuario desplazarse dentro de una sección específica del sitio <em>web</em>. Se utiliza para acceder a contenidos relacionados que pertenecen a una misma categoría o área temática. Suele presentarse mediante menús secundarios, barras laterales o submenús.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 c) Navegación contextual
    p.mb-4(data-aos="fade-down") Proporciona enlaces dentro del contenido de una página que permiten acceder a información relacionada con el tema que el usuario está consultando. Este tipo de navegación facilita la exploración de contenidos relacionados sin necesidad de regresar al menú principal. Por ejemplo, un artículo que incluye enlaces a contenidos similares o recomendaciones.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 d) Navegación secuencial
    p.mb-4(data-aos="fade-down") Guía al usuario a través de una serie de pasos ordenados que deben seguirse de manera progresiva para completar una tarea o proceso específico. Por ejemplo:
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema1/img26.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Paso 1. 
                  h5.mb-0.ms-1 Registro.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema1/img27.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Paso 2. 
                  h5.mb-0.ms-1 Confirmación.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema1/img28.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Paso 3. 
                  h5.mb-0.ms-1 Finalización.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 e) Navegación por <em>breadcrumbs</em>
    p.mb-4(data-aos="fade-down") También conocida como migas de pan, muestra la ubicación del usuario dentro de la estructura jerárquica del sitio <em>web</em>, permitiendo regresar fácilmente a niveles superiores. Por ejemplo:
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-8.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C05.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/tema1/img26.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C05.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Inicio > Productos > Electrónica > Celulares
    p.mb-4(data-aos="fade-down") Los sistemas de navegación están conformados por diversos elementos que facilitan el acceso a la información dentro de un sitio <em>web</em>:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          ul.lista-ul--color.mb-0
            li
              i.lista-ul__vineta
              p.mb-0 Menús principales, secundarios o desplegables.
            li
              i.lista-ul__vineta
              p.mb-0 Enlaces internos y externos.
            li
              i.lista-ul__vineta
              p.mb-0 Botones de acción.
            li
              i.lista-ul__vineta
              p.mb-0 Iconos de apoyo visual.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Barra de búsqueda.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img29.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0.text-center(data-aos="fade-down") Para diseñar un sistema de navegación efectivo se recomienda:
    .row.justify-content-center.align-items-strench.mb-4.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C02.p-4.d-flex.h-100.align-items-center
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Utilizar estructuras simples y claras.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Emplear etiquetas comprensibles.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Limitar el número de opciones en los menús.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Mantener coherencia en todas las páginas.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Incluir herramientas de búsqueda.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Diseñar navegación adaptable a diferentes dispositivos.
            li.mb-0
              .lista-ol--cuadro__vineta
                span.text-bold 7
              | Priorizar la experiencia del usuario.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema1/img30.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Un sistema de navegación mal diseñado puede generar desorientación, dificultar la localización de la información y provocar que los usuarios abandonen el sitio. Por esta razón, la planificación de la navegación constituye un aspecto fundamental en el diseño de aplicaciones <em>web</em>.
</template>

<script>
export default {
  name: 'Tema1',
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
