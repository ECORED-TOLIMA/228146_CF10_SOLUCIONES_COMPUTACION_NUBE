<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente aborda los fundamentos del diseño y desarrollo de aplicaciones <em><em>web</em></em> desde la organización de la información hasta la implementación de tecnologías <em>frontend</em>. Inicialmente se estudia la arquitectura de la información, enfocándose en la organización del contenido y los sistemas de navegación que facilitan la interacción del usuario con el sitio <em><em>web</em></em>. Posteriormente se analizan los principios del diseño de contenido e información <em><em>web</em></em>, incluyendo la distribución del contenido, los formatos de archivos para la publicación de recursos y herramientas de planificación visual como el <em>wireframe</em>, la jerarquía de información y las retículas. Asimismo, se profundiza en el diseño de interfaces <em><em>web</em></em>, considerando los diferentes tipos de interfaces, los principios de diseño intuitivo y usable, y el uso de <em>mockups</em>, prototipos y herramientas especializadas para su creación. Finalmente, se abordan los aspectos relacionados con la maquetación de aplicaciones <em><em>web</em></em> mediante HTML y CSS, así como el uso de estilos y guías de estilo, para concluir con una introducción a las tecnologías <em>frontend</em>, sus funcionalidades, el manejo de tipos de datos y el uso de librerías que facilitan el desarrollo de interfaces dinámicas e interactivas.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presentan los principales elementos relacionados con el diseño y desarrollo de aplicaciones <em><em>web</em></em>, incluyendo la arquitectura de la información, el diseño de contenido, la creación de interfaces, la maquetación mediante HTML y CSS, y el uso de tecnologías <em>frontend</em> para construir interfaces dinámicas e interactivas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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
