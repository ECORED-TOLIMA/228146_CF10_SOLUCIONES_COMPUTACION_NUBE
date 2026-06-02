<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> <br>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con la arquitectura de la información, el diseño de interfaces, la maquetación <em>web</em> y las tecnologías <em>frontend</em> utilizadas en el desarrollo de aplicaciones <em>web</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'La arquitectura de la información en aplicaciones <em>web</em> se encarga principalmente de:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar los colores de la página <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar y estructurar la información para facilitar su acceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear bases de datos para almacenar información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Programar las funciones del servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La organización de la información en un sitio <em>web</em> permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tamaño del servidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el uso de imágenes.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Evitar el uso de enlaces.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Facilitar la navegación y comprensión del contenido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Un sistema de navegación en un sitio <em>web</em> tiene como función principal:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar la base de datos.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Permitir que el usuario se desplace entre las diferentes secciones del sitio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear animaciones visuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Programar el servidor <em>web</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'El diseño de contenido <em>web</em> busca principalmente:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar y presentar la información de manera clara y comprensible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear únicamente elementos gráficos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el uso de texto en las páginas <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Programar el <em>backend</em> del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Los formatos de archivo utilizados en la publicación de recursos <em>web</em> permiten:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar la información según su tipo y uso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar el lenguaje HTML.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de servidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'Un <em>wireframe</em> se define como:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un diseño gráfico final de la página <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un esquema básico que muestra la estructura de una interfaz.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un programa para crear páginas <em>web</em>.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Un tipo de base de datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La jerarquía de información en el diseño <em>web</em> permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el número de páginas del sitio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar enlaces de navegación.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Programar el servidor.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Determinar qué elementos son más importantes dentro de la interfaz.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Las retículas en diseño <em>web</em> se utilizan para:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar y alinear los elementos visuales en la interfaz.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear animaciones en el sitio <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programar el <em>backend</em> del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el tamaño de las imágenes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'El diseño intuitivo de interfaces busca principalmente:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el usuario aprenda programación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el contenido del sitio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que la navegación sea sencilla y fácil de comprender.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Eliminar botones y menús.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Un mockup se caracteriza por:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser un modelo visual detallado de la interfaz.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ser únicamente un esquema textual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser un lenguaje de programación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser un tipo de servidor <em>web</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'El prototipado de interfaces permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar el diseño visual.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Crear bases de datos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Eliminar el diseño de la interfaz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Probar el funcionamiento de la interfaz antes de desarrollarla completamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'Las plataformas de diseño de interfaces permiten:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programar servidores <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear bases de datos relacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear y visualizar prototipos de interfaces digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar el lenguaje HTML.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La maquetación <em>web</em> consiste en:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar visualmente los elementos de una página <em>web</em> mediante código.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Crear bases de datos para la aplicación de una organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar únicamente logotipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Configurar servidores <em>web</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El lenguaje HTML se utiliza principalmente para:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programar la base de datos para los clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diseñar animaciones complejas dentro de una organización.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Administrar servidores.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Definir la estructura del contenido de una página <em>web</em>.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'Las hojas de estilo CSS permiten:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar la apariencia visual de una página <em>web</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear bases de datos de los resultados de las encuestas.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Reemplazar HTML.', esCorrecta: false },
            { id: 'd', texto: 'Programar el servidor.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El <em>frontend</em> en una aplicación <em>web</em> corresponde a:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La base de datos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La parte visual con la que interactúa el usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El servidor que procesa datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El sistema operativo del computador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'Una de las funciones principales del <em>frontend</em> es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Gestionar bases de datos.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Presentar la información y gestionar la interacción del usuario.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Crear sistemas operativos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Programar el hardware del servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'En programación, un tipo de dato define:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño del servidor <em>web</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La velocidad de conexión a Internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El diseño gráfico del sitio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La naturaleza de la información que se almacena y manipula.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'En JavaScript, el tipo de dato “String” se utiliza para:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Representar valores lógicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Representar números decimales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Representar secuencias de texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Representar listas de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'En el desarrollo <em>frontend</em>, una librería se utiliza para:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reutilizar código y facilitar tareas de programación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar completamente los lenguajes de programación.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Crear sistemas operativos.', esCorrecta: false },
            { id: 'd', texto: 'Diseñar hardware.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos fundamentales sobre arquitectura de la información, diseño de interfaces, uso de HTML y CSS, y tecnologías <em>frontend</em> en el desarrollo de aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
