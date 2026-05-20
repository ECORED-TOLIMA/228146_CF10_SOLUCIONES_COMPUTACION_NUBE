<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") La creación de aplicaciones <em>web</em> modernas requiere integrar principios de organización de la información, diseño visual y desarrollo tecnológico. Estos elementos permiten estructurar contenidos de manera clara, facilitar la navegación de los usuarios y construir interfaces funcionales que respondan a diferentes necesidades digitales.
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") En el desarrollo de aplicaciones <em>web</em>, el diseño de la información cumple un papel fundamental, ya que permite definir cómo se organizan los contenidos, cómo se presentan y de qué forma interactúan los usuarios con el sistema. Para ello se emplean herramientas como <em>wireframe</em>s, retículas y <em>mockups</em>, que ayudan a planificar la estructura visual y la experiencia de uso antes de iniciar la construcción de la aplicación.
        p.mb-0(data-aos="fade-down") De igual manera, la maquetación <em>web</em> mediante tecnologías como HTML y CSS permite transformar los diseños en interfaces funcionales accesibles desde diferentes dispositivos. Estas tecnologías hacen posible estructurar los contenidos, aplicar estilos visuales y mantener coherencia gráfica a través de guías de estilo.
    p.mb-4(data-aos="fade-down") Finalmente, el uso de tecnologías <em>frontend</em> amplía las capacidades de las aplicaciones <em>web</em> al permitir la incorporación de funciones dinámicas, el consumo de servicios y el uso de librerías que facilitan el desarrollo. De esta forma, el diseño y desarrollo de aplicaciones <em>web</em> integra aspectos conceptuales, visuales y tecnológicos que contribuyen a la creación de experiencias digitales eficientes y centradas en el usuario.
    //- .row.justify-content-center.align-items-center           
    //-   .col.col-lg-12
    //-     figure
    //-       .video
    //-         iframe(width="560" height="315" src="https://www.youtube.com/embed/quno1VBe8PQ?si=2Py_pR63Ay1FChPj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
