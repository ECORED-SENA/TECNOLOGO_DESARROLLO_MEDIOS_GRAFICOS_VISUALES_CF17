<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure.mb-4
      img(src='@/assets/curso/intro-banner.png', alt='Introducción')

    p.mb-4(data-aos="fade") La revisión de archivos permite detectar y corregir errores en una etapa determinada y para las últimas fases que tienen que ver con la impresión, es importante que todo esté bien, para así ahorrar tiempo y recursos, esto permitirá dedicar tiempo a estos procesos para evitar repetir o cambiar elementos en alguna etapa. Sabiendo esto, a continuación, se indican los elementos adicionales en la introducción del componente:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/aakvAmfiepk" title="Introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
