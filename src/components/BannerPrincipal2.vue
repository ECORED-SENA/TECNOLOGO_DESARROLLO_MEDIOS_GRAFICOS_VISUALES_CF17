<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center
      .col-lg-7.col-xxl-6.py-4.py-sm-5.banner-principal__info.ps-5
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        img(:src="globalData.imagenBannerPrincipal" style="width: 481px")
    .imagen_flotante_1: img(src="@/assets/curso/float1.png")
    .imagen_flotante_2: img(src="@/assets/curso/float2.png")
    .imagen_flotante_3: img(src="@/assets/curso/float3.png")
    .imagen_flotante_4: img(src="@/assets/curso/float4.png")
    .imagen_flotante_5: img(src="@/assets/curso/float5.png")
    .imagen_escalable_6: img(src="@/assets/curso/escalable6.png")
    .imagen_escalable_7: img(src="@/assets/curso/escalable7.png")
    .imagen_escalable_8: img(src="@/assets/curso/escalable8.png")
  

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  padding-left: 80px !important
  z-index: 3


.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 4rem!important

  &__img
    //animation: scale 5s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 60px
    top: -4%
    left: 5%
    z-index: 99
  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 82px
    bottom: 40px
    left: -2.5%
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 155px
    bottom: -10%
    left: 37%
  &_4
    animation: float1 4s ease-in-out infinite alternate
    position: absolute
    width: 90px
    top: 37%
    right: -3%
    z-index: 999
  &_5
    animation: float1 3.9s ease-in-out infinite alternate
    position: absolute
    width: 60px
    top: -5%
    left: 48%
    z-index: 999

.imagen_escalable
  &_6
    animation: scale 5s ease-in-out infinite alternate
    position: absolute
    top: 8%
    right: 22%
  &_7
    animation: scale 5s ease-in-out infinite alternate
    position: absolute
    top: 27%
    right: 2%
  &_8
    animation: scale 5s ease-in-out infinite alternate
    position: absolute
    bottom: 8%
    right: 6%


@keyframes float1
  0%
    transform: translateY(20px)
  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1)

  100%
    transform: scale(0.8)

@media (min-width: $bp-min-xxl)
  .imagen_escalable
    &_6
      top: 7%
      right: 27%
    &_7
      top: 28%
      right: 6%
    &_8
      bottom: 6%
      right: 14%
@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
  .banner-principal__info
    padding-left: 15px  !important
  .imagen_flotante
    &_1, &_2, &_3, &_4, &_5
      display: none
  .imagen_escalable
    &_6, &_7, &_8
      display: none
</style>
