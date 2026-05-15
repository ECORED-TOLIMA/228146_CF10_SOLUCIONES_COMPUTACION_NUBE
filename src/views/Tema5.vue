<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Tecnologías <em>frontend</em> para el desarrollo <em>web</em>
    p.mb-4(data-aos="fade-down") El término <em>frontend</em> hace referencia al conjunto de tecnologías, herramientas y técnicas utilizadas para desarrollar la parte visual e interactiva de una aplicación <em>web</em>. Esta capa corresponde a todo aquello con lo que el usuario interactúa directamente dentro de una página o sistema <em>web</em>, y se ejecuta en el navegador del usuario.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Desde el punto de vista del desarrollo de soluciones de <em>software</em>, el <em>frontend</em> se encarga de presentar la información que genera el <em>backend</em> y de capturar las acciones realizadas por el usuario, tales como clics, desplazamientos, ingreso de datos o selección de opciones. Estas acciones son posteriormente procesadas por otras capas del sistema para generar respuestas y actualizar la información mostrada en la interfaz.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Ejemplo de <em>frontend</em> y <em>backend</em> en Zajuna
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema5/img02.svg', alt='En la figura 8 es la interfaz de la plataforma Zajuna donde se presenta la parte visual de la página (<em>frontend</em>) y, al lado, el código HTML, CSS y JavaScript que permite su funcionamiento (<em>backend</em>).')
            figcaption Nota. Tomado de Zajuna (s. f.).
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/tema5/img03.svg', alt='En la figura 8 es la interfaz de la plataforma Zajuna donde se presenta la parte visual de la página (<em>frontend</em>) y, al lado, el código HTML, CSS y JavaScript que permite su funcionamiento (<em>backend</em>).')
          figcaption Nota. Tomado de Zajuna (s. f.).
    .row.justify-content-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img04.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") En el entorno de aprendizaje Zajuna se puede presentar esta diferencia con claridad. La parte visible para el usuario corresponde al <em>frontend</em>, donde se presentan los contenidos, menús, botones y formularios. Por su parte, el <em>backend</em> corresponde al conjunto de códigos y procesos que funcionan en segundo plano y que permiten gestionar la información del sistema, incluyendo estructuras desarrolladas mediante HTML, CSS y JavaScript.
    p.mb-4(data-aos="fade-down") Dentro del desarrollo <em>frontend</em> intervienen diversas tecnologías que permiten construir la estructura, el diseño y la interactividad de las páginas <em>web</em>. Entre las principales se encuentran:
    .cajon.cajon.C06.p-5.mb-0
      SlyderB(:datos="datosSlyder")
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Funcionalidades de la tecnología <em>frontend</em>
    p.mb-4(data-aos="fade-down") La tecnología <em>frontend</em> hace referencia al conjunto de herramientas, lenguajes y técnicas utilizados para desarrollar la parte visual e interactiva de una aplicación <em>web</em>. Esta capa del <em>software</em> se ejecuta directamente en el navegador del usuario y permite mostrar información, recibir datos, responder a las acciones del usuario y facilitar la interacción con el sistema.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img09.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Desde la perspectiva del desarrollo de soluciones de <em>software</em>, el <em>frontend</em> actúa como intermediario entre el usuario y el <em>backend</em>, que es la capa encargada de procesar la información, ejecutar la lógica de negocio y gestionar las bases de datos. Mientras el <em>backend</em> se ocupa del procesamiento interno del sistema, el <em>frontend</em> presenta esa información de forma clara, organizada y accesible para el usuario.
    p.mb-4(data-aos="fade-down") El <em>frontend</em> no se limita únicamente al diseño visual de las páginas <em>web</em>. También incluye aspectos estructurales y funcionales que determinan cómo se organiza el contenido, cómo se comporta la interfaz y cómo se guía al usuario durante la navegación dentro de la aplicación.
    .row.justify-content-center.align-items-center.mb-4    
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/quno1VBe8PQ?si=2Py_pR63Ay1FChPj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.text-center.mb-4(data-aos="fade-down") Entre las principales características de la tecnología <em>frontend</em> se destacan:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img10.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Interacción directa con el usuario.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img11.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Ejecución en el navegador <em>web</em>.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img12.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Integración con servicios del <em>backend</em>.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img13.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Enfoque en la experiencia de usuario.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img14.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Uso de tecnologías estándar de la <em>web</em>.
    p.mb-4(data-aos="fade-down") Las funcionalidades del <em>frontend</em> permiten que una aplicación <em>web</em> sea dinámica, interactiva y fácil de utilizar. Entre las más importantes se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img15.svg' alt='AvatarTop')
          h4.text-center Presentación de contenido
          p Permite presentar información de manera organizada y visualmente clara mediante el uso de tecnologías como HTML y CSS.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img16.svg' alt='AvatarTop')
          h4.text-center Interacción con el usuario
          p Gestiona eventos como clics, desplazamientos, envíos de formularios o selección de opciones dentro de la interfaz.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img17.svg' alt='AvatarTop')
          h4.text-center Validación de datos
          p Permite verificar la información ingresada por el usuario antes de enviarla al servidor, ayudando a prevenir errores y mejorar la experiencia de uso.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img18.svg' alt='AvatarTop')
          h4.text-center Consumo de servicios
          p Facilita la comunicación con el <em>backend</em> mediante servicios o APIs para enviar o recibir información.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img19.svg' alt='AvatarTop')
          h4.text-center Actualización dinámica de la interfaz
          p permite modificar partes de la página sin necesidad de recargarla completamente, lo que mejora la fluidez de la navegación.
    p.mb-0(data-aos="fade-down") La tecnología <em>frontend</em> constituye un componente fundamental en el desarrollo de soluciones <em>web</em>, ya que permite construir interfaces que conectan al usuario con el sistema de forma clara, eficiente e intuitiva. Su correcta implementación contribuye a mejorar la usabilidad, la accesibilidad y la experiencia general de las aplicaciones <em>web</em>.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos de datos y funciones en el desarrollo <em>frontend</em>
    p.mb-4(data-aos="fade-down") Los tipos de datos corresponden a una clasificación que define la naturaleza de la información que puede almacenarse, procesarse y manipularse dentro de un programa. Cada tipo de dato establece un conjunto de valores posibles y un conjunto de operaciones que pueden realizarse sobre dichos valores.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img20.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-2
          p.mb-0(data-aos="fade-down") En términos simples, los tipos de datos indican al programa qué tipo de información se está manejando y cómo debe interpretarla. Gracias a esta clasificación, los lenguajes de programación pueden procesar correctamente números, textos, valores lógicos u otras estructuras de información.
        p.mb-0(data-aos="fade-down") Desde el punto de vista del desarrollo de soluciones de <em>software</em>, los tipos de datos permiten organizar la información de manera estructurada, reducir ambigüedades y prevenir errores durante la ejecución del sistema. Cuando un programador define un tipo de dato, establece reglas que permiten al lenguaje interpretar los valores correctamente y detectar posibles fallos en el código.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img21.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") En el desarrollo <em>frontend</em>, especialmente con JavaScript, los tipos de datos permiten gestionar la información que se muestra en la interfaz, validar datos ingresados por el usuario y procesar la información recibida desde servicios o APIs.
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") La correcta definición y uso de los tipos de datos resulta fundamental para garantizar la calidad y el correcto funcionamiento de una solución de <em>software</em>. Un uso inadecuado puede provocar errores lógicos, fallos de ejecución o comportamientos inesperados del sistema.
    p.text-center.mb-4(data-aos="fade-down") Además, los tipos de datos influyen en aspectos como:
    .row.justify-content-center.align-items-strench.mb-4.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C02.p-4.d-flex.h-100.align-items-center
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | La organización de la información dentro del sistema.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | La eficiencia en el procesamiento de datos.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | La claridad y mantenimiento del código.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | La detección temprana de errores.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | La estabilidad y seguridad del <em>software</em>.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema5/img22.svg', alt='Imagen decorativa')
    p(data-aos="fade-down") Comprender los tipos de datos constituye uno de los primeros pasos en el aprendizaje de la programación, ya que permite entender cómo los programas representan la información del mundo real mediante estructuras digitales.
    p.mb-4(data-aos="fade-down") Los tipos de datos pueden clasificarse en diferentes categorías según la forma en que almacenan la información.
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 a) Datos primitivos
    p.mb-4(data-aos="fade-down") Representan los tipos básicos que se encuentran en la mayoría de los lenguajes de programación. Se utilizan para almacenar valores simples.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Datos primitivos
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de dato
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Entero (<em>Integer</em>).
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Representa números enteros sin decimales.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") 10, -5, 0
              tr
                td(data-aos="fade-down") Decimal (<em>Float or Double</em>).
                td(data-aos="fade-down") Representa números con decimales.
                td(data-aos="fade-down") 3.14, 0.5
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Cadena de texto (<em>String</em>).
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Representa secuencias de caracteres o texto.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") "Hola mundo"
              tr
                td(data-aos="fade-down") Booleano (<em>Boolean</em>).
                td(data-aos="fade-down") Representa valores lógicos.
                td(data-aos="fade-down") true, false
    .row.justify-content-center.mb-0
      .col.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-3.ms-md-3.ms-1 b) Datos compuestos o estructuras de datos
    p.mb-4(data-aos="fade-down") Los datos compuestos permiten almacenar múltiples valores dentro de una misma estructura, lo que facilita la organización de información más compleja.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Datos compuestos
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Arreglos (<em>Arrays</em>).
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Permiten almacenar una colección de elementos del mismo tipo.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") [1, 2, 3, 4]
              tr
                td(data-aos="fade-down") Objetos (<em>Objects</em>).
                td(data-aos="fade-down") Representan entidades mediante pares clave-valor.
                td(data-aos="fade-down") {nombre: "Ana", edad: 25}
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Listas.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Estructuras dinámicas que pueden crecer o reducirse.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") ["rojo", "verde", "azul"]
    p.mb-0(data-aos="fade-down") JavaScript es uno de los lenguajes principales del desarrollo <em>frontend</em> y utiliza varios tipos de datos para gestionar la información dentro de las aplicaciones <em>web</em>.
    .row.mb-0
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema5/img23.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-4 col-xl-4")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img24.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>Number</em>: representa valores numéricos enteros o decimales.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img25.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>String</em>: representa texto o cadenas de caracteres.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img26.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>Boolean</em>: representa valores lógicos verdadero o falso.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img27.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>Object</em>: representa estructuras de datos complejas.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img28.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>Array</em>: permite almacenar listas de elementos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img29.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>Null</em>: representa la ausencia intencional de valor.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema5/img30.svg", alt="Imagen decorativa").img100.m-auto
                  p <em>Undefined</em>: indica que una variable no tiene valor asignado.
    p(data-aos="fade-down") En el desarrollo <em>frontend</em>, las aplicaciones <em>web</em> frecuentemente necesitan comunicarse con servidores o servicios externos para obtener o enviar información. Este proceso se conoce como consumo de servicios o consumo de APIs.
    p.mb-4(data-aos="fade-down") Las funciones de consumo permiten que una aplicación <em>web</em> solicite datos a un servidor, envíe información o actualice registros dentro de un sistema. Estas operaciones se realizan generalmente mediante protocolos <em>web</em> como HTTP.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Métodos HTTP utilizados en el consumo de servicios
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Método
                th(data-aos="fade-down")(style= "width: 35%") Función
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo de uso
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") GET
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Obtener información desde un servidor.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Consultar una lista de usuarios.
              tr
                td(data-aos="fade-down") POST
                td(data-aos="fade-down") Enviar nuevos datos al servidor.
                td(data-aos="fade-down") Registrar un nuevo usuario.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") PUT
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Actualizar información existente.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Modificar los datos de un usuario.
              tr
                td(data-aos="fade-down") DELETE
                td(data-aos="fade-down") Eliminar información.
                td(data-aos="fade-down") Eliminar un registro de la base de datos.
    p(data-aos="fade-down") Estas funciones de consumo permiten que las aplicaciones <em>web</em> interactúen con bases de datos, sistemas externos o servicios en la nube, lo que hace posible desarrollar aplicaciones dinámicas y conectadas.
    p.mb-0(data-aos="fade-down") En el desarrollo <em>frontend</em> moderno, este proceso suele realizarse mediante herramientas o funciones como <em>fetch</em> o bibliotecas de comunicación con APIs.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Uso de librerías en el desarrollo <em>frontend</em>
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img31.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En programación, una librería es un conjunto de funciones, clases, componentes o recursos reutilizables diseñados para resolver problemas comunes de forma estandarizada. En el desarrollo <em>frontend</em>, las librerías se utilizan para facilitar tareas relacionadas con la construcción de interfaces de usuario, la manipulación del DOM, la gestión de datos, la comunicación con servicios externos y la implementación de interacciones dinámicas.
    p.mb-4(data-aos="fade-down") Desde el punto de vista del desarrollo de soluciones de <em>software</em>, una librería <em>frontend</em> actúa como un recurso que amplía las capacidades del desarrollador. En lugar de escribir código desde cero para cada funcionalidad, se pueden reutilizar soluciones previamente desarrolladas y probadas, lo que permite reducir el tiempo de desarrollo, mejorar la calidad del código y disminuir la probabilidad de errores.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img32.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Es importante diferenciar las librerías de otros elementos como los <em>Frameworks</em>. Mientras una librería se enfoca en resolver una tarea específica y puede integrarse de forma flexible dentro de un proyecto, un framework establece una estructura más completa para el desarrollo de la aplicación. Comprender esta diferencia permite seleccionar adecuadamente las herramientas según las necesidades del proyecto.
        p.mb-0(data-aos="fade-down") En el desarrollo <em>frontend</em> moderno existe una amplia variedad de librerías que facilitan diferentes tareas relacionadas con la interfaz, la gestión de datos, las animaciones o la comunicación con servicios externos.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Ejemplos de librerías utilizadas en el desarrollo <em>frontend</em>
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Librería
                th(data-aos="fade-down")(style= "width: 35%") Uso principal
                th(data-aos="fade-down")(style= "width: 35%") Características
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") React
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Construcción de interfaces de usuario.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Basado en componentes y uso de Virtual DOM.
              tr
                td(data-aos="fade-down") jQuery
                td(data-aos="fade-down") Manipulación del DOM.
                td(data-aos="fade-down") Simplifica la interacción con HTML, eventos y animaciones.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Axios
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Consumo de APIs.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Permite realizar peticiones HTTP de forma sencilla.
              tr
                td(data-aos="fade-down") Lodash
                td(data-aos="fade-down") Manipulación de datos.
                td(data-aos="fade-down") Conjunto de funciones utilitarias para trabajar con arreglos y objetos.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Chart.js
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Visualización de datos.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Permite crear gráficos interactivos.
              tr
                td(data-aos="fade-down") D3.js
                td(data-aos="fade-down") Visualización avanzada de datos.
                td(data-aos="fade-down") Generación de gráficos dinámicos y personalizados.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Three.js
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Gráficos 3D.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Renderizado de objetos 3D en el navegador.
              tr
                td(data-aos="fade-down") Anime.js
                td(data-aos="fade-down") Animaciones.
                td(data-aos="fade-down") Animaciones ligeras y fluidas.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") GSAP
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Animaciones avanzadas.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Alto rendimiento en animaciones complejas.
              tr
                td(data-aos="fade-down") Swiper.js
                td(data-aos="fade-down") Carruseles.
                td(data-aos="fade-down") Creación de <em>sliders</em> y carruseles responsivos.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Moment.js
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Manejo de fechas.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Manipulación y formato de fechas.
              tr
                td(data-aos="fade-down") Day.js
                td(data-aos="fade-down") Manejo de fechas.
                td(data-aos="fade-down") Alternativa ligera a Moment.js.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Alpine.js
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Interactividad.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") <em>Framework</em> ligero para agregar comportamiento a HTML.
              tr
                td(data-aos="fade-down") Redux
                td(data-aos="fade-down") Gestión de estado.
                td(data-aos="fade-down") Control centralizado del estado de la aplicación.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Zustand
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Gestión de estado.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Librería ligera para manejar estados globales.
              tr
                td(data-aos="fade-down") Socket.io
                td(data-aos="fade-down") Comunicación en tiempo real.
                td(data-aos="fade-down") Permite interacción bidireccional entre cliente y servidor.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") RxJS
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Programación reactiva.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Manejo de eventos y datos asíncronos.
              tr
                td(data-aos="fade-down") Bootstrap JS
                td(data-aos="fade-down") Componentes interactivos.
                td(data-aos="fade-down") Funcionalidades dinámicas para componentes de interfaz.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") SweetAlert2
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Alertas visuales.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Ventanas emergentes personalizadas.
              tr
                td(data-aos="fade-down") Formik
                td(data-aos="fade-down") Gestión de formularios.
                td(data-aos="fade-down") Manejo del estado y validación de formularios.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Yup
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Validación de datos.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Validación estructurada de formularios.
              tr
                td(data-aos="fade-down") FullCalendar
                td(data-aos="fade-down") Calendarios interactivos.
                td(data-aos="fade-down") Gestión visual de eventos.
              tr
                td(data-aos="fade-down")(style="background-color: #F8F8FF") p5.js
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Gráficos y arte visual.
                td(data-aos="fade-down")(style="background-color: #F8F8FF") Creación de visualizaciones y animaciones artísticas.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-12
        .tarjeta.tarjeta--C13.p-4.py-2.d-inline-block
          h5.mb-0 Ejemplo de uso de la librería Axios para consumir una API
    p.mb-2(data-aos="fade-down") A continuación, se presenta un ejemplo sencillo de cómo utilizar la librería Axios para obtener información desde un servicio <em>web</em>. En este caso, el código realiza una solicitud HTTP de tipo GET a una API pública y presenta los datos obtenidos en la consola del navegador.
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
                | &lt;html&gt;
                | &lt;head&gt;
                |   &lt;title&gt;Ejemplo Axios&lt;/title&gt;
                |   &lt;script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"&gt;&lt;/script&gt;
                | &lt;/head&gt;
                | &lt;body&gt;
                | 
                | &lt;h2&gt;Consumo de API con Axios&lt;/h2&gt;
                | &lt;button onclick="obtenerDatos()"&gt;Obtener datos&lt;/button&gt;
                | 
                | &lt;script&gt;
                | function obtenerDatos() {
                |   axios.get('https://jsonplaceholder.typicode.com/users')
                |     .then(function(response) {
                |       console.log(response.data);
                |       alert("Datos obtenidos correctamente. Revisa la consola.");
                |     })
                |     .catch(function(error) {
                |       console.error("Error en la petición:", error);
                |     });
                | }
                | &lt;/script&gt;
                | 
                | &lt;/body&gt;
                | &lt;/html&gt;
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") En este ejemplo, la librería Axios permite realizar una petición a una API externa de forma sencilla. Cuando el usuario presiona el botón Obtener datos, el navegador envía una solicitud al servicio <em>web</em> y recibe una respuesta en formato JSON. Posteriormente, los datos pueden procesarse y presentarse en la interfaz de la aplicación.
        p.mb-0(data-aos="fade-down") Este tipo de herramientas facilita la comunicación entre el <em>frontend</em> y el <em>backend</em>, permitiendo que las aplicaciones <em>web</em> obtengan información de servidores externos de manera rápida y eficiente.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img33.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.px-4.py-4.mb-3
          p.mb-0(data-aos="fade-down") El uso de librerías en el desarrollo <em>frontend</em> constituye una práctica fundamental en la programación de soluciones de <em>software</em> modernas. Estas herramientas permiten reutilizar código, mejorar la productividad, mantener estándares de desarrollo y construir interfaces más robustas y funcionales.
        p.mb-0(data-aos="fade-down") Desde una perspectiva educativa y profesional, comprender cómo seleccionar e integrar librerías <em>frontend</em> es una competencia clave para los desarrolladores. Su uso adecuado contribuye a la construcción de aplicaciones <em>web</em> eficientes, manteni  bles y alineadas con las necesidades de los usuarios y los estándares actuales del desarrollo <em>web</em>.
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Cifrado de la información',
        texto:
          'Permite proteger los datos durante su transmisión a través de la red, evitando que puedan ser interceptados o leídos por terceros no autorizados.',
        imagen: require('@/assets/curso/tema5/img05.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Autenticación de usuarios',
        texto:
          'Consiste en verificar la identidad de los usuarios que acceden a los servicios mediante contraseñas seguras, autenticación multifactor o certificados digitales.',
        imagen: require('@/assets/curso/tema5/img06.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Uso de protocolos seguros',
        texto:
          'Muchos servicios utilizan versiones seguras de los protocolos de comunicación, como HTTPS para servidores <em><em>web</em></em> o SMTPS para correo electrónico, con el fin de proteger la transmisión de datos.',
        imagen: require('@/assets/curso/tema5/img07.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Control de accesos',
        texto:
          'Se establecen permisos y roles que determinan qué usuarios pueden acceder a determinados recursos o servicios dentro de la red.',
        imagen: require('@/assets/curso/tema5/img08.jpg'),
      },
    ],
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
