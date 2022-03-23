<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Revisión de archivos para impresión

    figure.mb-4
      img(src='@/assets/curso/tema1/img1.png', alt='Revisión de archivos para impresión')

    p.mb-4(data-aos="fade") Es de real importancia la revisión y realización constante de pruebas durante todo el proceso de producción, empezando claro está desde sus etapas iniciales, permitiendo detectar y corregir a tiempo; para esto pueden utilizarse diversos sistemas de revisión o pruebas y es durante el proceso de impresión en el que se debe tener más cuidado, dado que es el proceso más costoso y donde se puede tener mayores problemas. Durante esta revisión, <span class="etiqueta">se deben tener en cuenta elementos como el texto y las imágenes</span> originales y las pruebas láser se usan principalmente para revisar textos, diseño y maquetación de las páginas antes de pasar a producir las películas o las planchas para la impresión.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .row.cajon.bg-suave.p-4.align-items-center
          .col-auto.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema1/img2.svg', alt='Imagen decorativa')
          .col-md-9
            p.mb-0 Los programas de pre vuelo permiten controlar que el documento está completamente listo para producción y suele pedirse una prueba análoga o digital, antes de proceder el tiraje de impresión, siendo un procedimiento muchas veces costoso, pero justificado en ciertos casos.



    Separador


    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Ortografía y digitación

    .row.mb-md-4
      .col-md-7.mb-4(data-aos="fade-right")
        p.mb-4 Para contar con documentos, proyectos, y/o servicios de calidad, es importante la creación de contenidos apoyados en una revisión, que debe incluir una verificación garantizada de los contenidos y entregables, excluyendo información o aspectos que no estén relacionados y que, a su vez, tenga coherencia y lógica.

        p.mb-4 Al igual que los evaluadores técnicos que revisan los entregables y sus contenidos, se encuentra un campo llamado la “Corrección de estilo”, este proceso se realiza con un experto, que se encarga de arreglar los textos, permitiéndolos más inteligibles por el grupo objetivo.

        .cajon.color-acento-botones.p-4
          p.mb-0 Para esto se deben tener en cuenta aspectos lingüísticos y semánticos que permitirán analizar temas como la ortografía y la sintaxis, desde la forma y la semántica, la retórica y la estilística, desde su fondo.

      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img3.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Se revisarán algunos errores comunes que se pueden encontrar al momento de redactar cualquier contenido, estos errores pueden suceder por muchas razones, como la falta de atención, la mala digitación, la falta de revisión e incluso y el desconocimiento; por esto se presentan a grandes rasgos, los mayores errores que se encuentran en la redacción de contenidos, así:

    .row
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.bg-amarillo-gradiente
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/flip1.svg', alt='Mayúsculas')
              h4.text-center Mayúsculas
            .tarjeta-flip__contenido.p-4
              h5.text-center Mayúsculas
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | Se deben utilizar en nombres propios como nombres, marcas, empresas, etc.
                li
                  i.lista-ul__vineta
                  | Luego de signos de puntuación como los puntos seguidos o apartes, al inicio de una oración, cuando se cierran signos de interrogación o exclamación o después de puntos suspensivos.
                li
                  i.lista-ul__vineta
                  | No se utilizarán en cargos como juez o directos, ni tampoco usar mayúsculas sostenidas, ya que se podrían mal interpretar.
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.bg-naranja-gradiente(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/flip2.svg', alt='Nicho de mercado ')
              h4.text-center Comas
            .tarjeta-flip__contenido.p-4
              h5.text-center Comas
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | La coma obedece unas reglas gramaticales como no separar el sujeto del predicado, incluso si este está muy largo.
                li
                  i.lista-ul__vineta
                  | No se usa para las conjunciones: “y”, “e”, “o”, “u”, “ni”; a menos que pertenezcan a la misma serie.
                li
                  i.lista-ul__vineta
                  | Sirve para separar enunciados.
                li
                  i.lista-ul__vineta
                  | Aclara situaciones.
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.bg-amarillo-gradiente
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/flip3.svg', alt='Mal uso de las palabras homófonas')
              h4.text-center Mal uso de <br>las palabras homófonas
            .tarjeta-flip__contenido.p-4
              h5.text-center Mal uso de las palabras homófonas
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | Haber y A ver
                li
                  i.lista-ul__vineta
                  | Halla, haya y allá
                li
                  i.lista-ul__vineta
                  | Ahí, hay y ¡ay!
                li
                  i.lista-ul__vineta
                  | Valla y vaya.
                li
                  i.lista-ul__vineta
                  | Hecho y echo.
                li
                  i.lista-ul__vineta
                  | Has y haz.


      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.bg-naranja-gradiente
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/flip4.svg', alt='Tilde diacrítica')
              h4.text-center Tilde diacrítica
            .tarjeta-flip__contenido.p-4
              h5.text-center Tilde diacrítica
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | Más y mas.
                li
                  i.lista-ul__vineta
                  | Aún y aun.
                li
                  i.lista-ul__vineta
                  | Sé y se.
                li
                  i.lista-ul__vineta
                  | Té y te.
                li
                  i.lista-ul__vineta
                  | ¿Quién? y quien.
                li
                  i.lista-ul__vineta
                  | ¿Cómo? y como.
                li
                  i.lista-ul__vineta
                  | ¿Qué? y que.
                li
                  i.lista-ul__vineta
                  | ¿Dónde? y donde.
                li
                  i.lista-ul__vineta
                  | ¿Cuándo? y cuando.
                li
                  i.lista-ul__vineta
                  | Dé y de.
                li
                  i.lista-ul__vineta
                  | Sí y si.
                li
                  i.lista-ul__vineta
                  | Mí y mi.
                li
                  i.lista-ul__vineta
                  | Tú y tu.
                li
                  i.lista-ul__vineta
                  | Él y el.
    .row.justify-content-center
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.bg-naranja-gradiente
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/flip5.svg', alt='Porqué, por qué, porque, por que')
              h4.text-center Porqué, por qué,<br>porque, por que
            .tarjeta-flip__contenido.p-4
              h5.text-center Porqué, por qué, porque, por que
              ul.lista-ul--color
                p.mb-2
                  strong Porqué: 
                  | equivale a causa, motivo, razón.
                p.mb-2
                  strong Por qué: 
                  | introduce oraciones interrogativas y exclamativas directas e indirectas.
                p.mb-2
                  strong Porque: 
                  | se usa para introducir oraciones subordinadas que expresan causa y se pueden sustituir por puesto que, debido a o ya que.
                p.mb-2
                  strong Por que: 
                  | en este caso, es más corriente usar el relativo con artículo antepuesto, es decir: el que, la que, etc.
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.bg-amarillo-gradiente
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/flip6.svg', alt='Frases prepositivas')
              h4.text-center Frases prepositivas
            .tarjeta-flip__contenido.p-4
              h5.text-center Frases prepositivas
              p.mb-0 Forma incorrecta: <span class='text-danger text-bold'>FI</span>
              p.mb-1 Forma correcta: <span class='text-success text-bold'>FC</span>
              p.mb-0 <span class='text-danger text-bold'>FI:</span> De acuerdo
              p.mb-1 <span class='text-success text-bold'>FC:</span> De acuerdo CON
              p.mb-0 <span class='text-danger text-bold'>FI:</span> En base a
              p.mb-1 <span class='text-success text-bold'>FC:</span> CON base EN
              p.mb-0 <span class='text-danger text-bold'>FI:</span> En relación a
              p.mb-1 <span class='text-success text-bold'>FC:</span> En relación CON
              p.mb-0 <span class='text-danger text-bold'>FI:</span> Por el contrario
              p.mb-1 <span class='text-success text-bold'>FC:</span> Por LO contrario
              p.mb-0 <span class='text-danger text-bold'>FI:</span> Bajo esa base
              p.mb-1 <span class='text-success text-bold'>FC:</span> SOBRE esa base
              p.mb-0 <span class='text-danger text-bold'>FI:</span> Bajos ese punto de vista
              p.mb-1 <span class='text-success text-bold'>FC:</span> DESDE ese punto de vista
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.bg-naranja-gradiente
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/flip7.svg', alt='Los números')
              h4.text-center Los números
            .tarjeta-flip__contenido.p-4
              h5.text-center Los números
              p.mb-0 Se deben escribir con letras, exceptuando los decimales y los números excesivamente grandes.
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.bg-amarillo-gradiente
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/flip8.svg', alt='Los anglicismos')
              h4.text-center Los anglicismos
            .tarjeta-flip__contenido.p-4
              h5.text-center Los anglicismos
              p.mb-0 Si se está escribiendo en español y se encuentra un significado de la palabra en ingles, es mejor no utilizar anglicismos, ya que permite darles sentido y fuerza a las frases y siendo neutral en la escritura.


      .bg-acento-botones.bg-block.position-relative.my-4
        .row.space-between.align-items-center.position-relative.py-5
          .col-lg-8(data-aos="fade-right")
            p.mb-4 La escritura, la gramática y la ortografía, son temas que se aprenden cuando se practica y se usan constantemente, la facilidad al cometer errores recae en múltiples causas que suceden muchas veces por falta de concentración, pero que gracias a las herramientas que cada vez hacen más fácil la vida, se puede dejar llevar y simplemente escribir.

            p Reconocer los errores y saber actuar en el momento es vital, la posibilidad de tener a la mano información para consultar y despejar dudas es importante y ayudará a perfeccionar y mejorar, haciendo que en el futuro estos errores se vayan reduciendo al máximo.

          .col-lg-4(data-aos="fade-left")
            img(src='@/assets/curso/tema1/img4.svg', alt='Imagen decorativa')

    Separador


    // 1.2
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2  Manejo de textos

    .row.mb-md-5
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img5.svg', alt='Imagen decorativa')

      .col-md-7.mb-4(data-aos="fade-left")
        p.mb-4 Se piensa que la mayoría de contenido editorial es gráfico y que una imagen vale más que mil palabras, pero lo cierto, es que, en el mundo de hoy, sin contexto, las imágenes no tienen mucho que decir; por eso es importante poder contar con una arquitectura y diseño bien estructurados, esto permitirá mezclar de la mejor forma estos elementos para conseguir una interacción con el lector y que este pueda tener una lectura sin interrupciones y sin perder la información más relevante.

        p La jerarquía tipográfica permite al lector centrarse en lo que es más importante y permitir un máximo de impacto a través del diseño y trabajo de las tipografías, creando contrastes y mejorando la legibilidad de su contenido.


    p.text-center
      strong A partir de esto, se puede pensar que la jerarquía se puede dividir en tres niveles:

    .row.justify-content-center.bg-suave.bg-block.position-relative.mb-4
      .col-lg-10.col-sm-12

        PasosA.color-primario.my-5(tipo="n")
          .row.align-items-center.justify-content-center
            .col-md-4(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img6.png')
            .col-md-8.mb-4.mb-md-0(data-aos="fade-left")
              h5 Primer nivel
              p Comprende todos los elementos o contenido más importante, este contenido posee elementos más impactantes y son los que tendrán más recordación en los usuarios por su diseño, comprende las tipografías de gran tamaño, como los titulares, también llamados “muebles”, ya que son los encargados de llamar al lector.


          .row.align-items-center.justify-content-center
            .col-md-8.mb-4.mb-md-0(data-aos="fade-right")
              h5 Segundo nivel
              p Los elementos que ayudan al lector permanecer y comprender mejor la información, como lo pueden ser los subtítulos, las citas, las infografías o los bloques de texto que añaden información al lector, por lo general son títulos o textos más pequeños que los de nivel uno.
            .col-md-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img7.png')

          .row.align-items-center.justify-content-center
            .col-md-4(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img8.png')
            .col-md-8.mb-4.mb-md-0(data-aos="fade-left")
              h5 Tercer nivel
              p Los textos principales y que contienen más información, estas tipografías deberían ser simples y consistentes al diseño general, acá entran a jugar el diseño con el texto y será este quien alargue la estadía del lector.


    p.my-5 <span class="etiqueta">La jerarquía da sentido a la lectura y comprensión de lo que se lee</span>, por eso existen varias técnicas que pueden servir para crear sentido; las más comunes son:

    .row.mb-5.justify-content-center.align-items-center
      .col-md-4
        figure
          img(src='@/assets/curso/tema1/img9.png', alt='Imagen decorativa')
      .col-md-8.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Selección de tipo de letra") Las más interesantes pueden llamar más la atención, si se utilizan correctamente, permitirá una mejor legibilidad y permitirá al lector más permanencia.
          p.text-small(numero="2" titulo="Tamaño") Es una obviedad, pero mientras más grande es el tipo de letra, más atractivo será. Este vendrá acuerdo con el orden de importancia en la lectura.
          p.text-small(numero="3" titulo="Grosor") El grosor de las letras puede hacer que el texto se vea más grande o más pequeña, esto servirá para hacer más compactos o grandes los textos.
          p.text-small(numero="4" titulo="Letras mayúsculas y minúsculas") Se debe tener cuidado con el uso, las letras mayúsculas parecerán más grandes y vanguardistas, mientras que las letras minúsculas se verán más pequeñas y a menudo, pasarán sin ser vistas.
          p.text-small(numero="5" titulo="Negritas") Las letras en negrita son un buen punto de énfasis, funcionan muy bien en el nivel terciario.
          p.text-small(numero="6" titulo="Cursivas") Las letras cursiva destacan una palabra o frase en una forma menos marcada y más sutil que las negritas, su uso es similar a las negritas y se usan más a nivel terciario.
          p.text-small(numero="7" titulo="Orientación") Todo texto que esté en otra orientación diferente al horizontal tiende a ser un punto de atención, puede funcionar en palabras de primer nivel.
          p.text-small(numero="8" titulo="Color") La adición de color a las letras normalmente genera un interés inmediato, este efecto puede funcionar en cualquier nivel, pero debe ser bien trabajado, para no crear problemas o confusiones.


    p.mb-4 Aplicando y combinando efectivamente estas técnicas se podrán generar diseños más atractivos y a la vez más sencillos, permitiendo crear diseños de impacto, permitiendo que los lectores tengan más reacción e interacción, para ir mejorando y creando diseños que piensen más en los usuarios finales.

    Separador

    // 1.3
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3  Sangrados

    p.mb-4 Las márgenes o sangrados <span class="etiqueta">evitan que las imágenes sean cortadas al momento de refilar las impresiones</span>, estas márgenes también permiten que se eviten márgenes blancos y que en general haya problemas con los cortes, todos dependerán de los requerimientos de la imprenta o de los materiales.

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema1/img10.jpeg', alt='Imagen decorativa')

        p El sangrado es un margen de unos milímetros que se debe añadir alrededor del arte, como un recuadro, estas serán de unos 3mm a cada lado; se encuentra también una zona llamada “Zona de Seguridad” que como su nombre lo indica, será una zona donde no se tendrán elementos por fuera de esta zona, ya que será un espacio donde se harán los cortes y dado un error de cálculo, la zona de seguridad permitirá tener el contenido intacto.

      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-12
            figure
              img(src='@/assets/curso/tema1/img11.jpeg', alt='Imagen decorativa')

        p ¿Como ser más preciso al momento de medir la distancia de las guías? Gracias a los programas de diseño y diagramación, es posible insertar guías más exactas que indicarán donde hacer los cortes con mayor precisión, estas guías de registro no trabajan como las de sangrado, sino que trabajan como complemento para las nuevas tecnologías.

    Separador

    // 1.4
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.4  Sobreimpresión y <em>trapping</em>


    p.mb-4 Generalmente, la sobreimpresión se aplica cuando se tiene un <span class="etiqueta">fondo más claro y el color de la segunda capa es más oscuro</span>; por ejemplo, un texto negro sobre un fondo amarillo. A continuación, se pueden entender un poco estos conceptos:

    .row
      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.bg-acento-botones.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/img12.svg', alt='Sobreimpresión')
              h4 Sobreimpresión
            .tarjeta-flip__contenido.p-4
              h5 Sobreimpresión
              p Se denomina así a la impresión de un objeto que está en primer plano sobre otro objeto que está en un segundo plano; es decir, hacer una impresión de tinta, sobre otra.
              p.mt-2 En procesos como <i>offset</i>, dadas que sus tinturas son transparentes, las tintas tienden a combinarse y quizá perder su calidad, pero es proceso como la flexografía, donde sus tintas son “cubrientes” un color se posa sobre el otro y no existe mezcla.
      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.bg-acento-botones.text-center(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/img13.svg', alt='Trapping')
              h4 <em>Trapping</em>
            .tarjeta-flip__contenido.p-4
              h5 <em>Trapping</em>
              p También llamado reventado, se entiende como la superposición de tintas colindantes para evitar errores de registro, lo más común es reventar el color más claro sobre el más oscuro; el tamaño del <em>trapping</em> dependerá de los materiales y las máquinas de impresión, uno de los grandes inconvenientes de esta técnica es que la medida del no siempre es la misma, y recae en errores al momento de intentar copiar la acción.



      .col-sm-6.col-xl-4.mb-4
        .tarjeta.tarjeta-flip.bg-acento-botones.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1/img14.svg', alt='Reserva')
              h4 Reserva
            .tarjeta-flip__contenido.p-4
              h5 Reserva
              p Consiste en dejar un espacio sin tinta en la primera capa, para que en la segunda capa no se combinen ni se generen mezclas que bajen calidad en la impresión.

    .row.justify-content-center.my-4
      .col-12.col-md-8
        h4.text-center Es importante tener presente algunos consejos para que la calidad siempre sea la mejor:
        ul.lista-ul--color.mt-4
          li
            i.fas.fa-check
            | Cuando el contraste entre un objeto oscuro y un fondo claro es crucial, lo más sencillo es utilizar la sobreimpresión.
          li
            i.fas.fa-check
            | En caso de texto negro siempre se recomienda la sobreimpresión, para evitar los fallos de registro entre los objetos.
          li
            i.fas.fa-check
            | Si se utiliza la sobreimpresión para un texto negro colocado en parte sobre un fondo de color y en parte sobre un fondo blanco, la parte del texto impresa sobre el fondo de color quedará más oscura. Para que esto no suceda se debe optar por hacer una reserva de color para el texto negro; entonces todo el texto se imprimirá sobre fondo blanco y, por lo tanto, tendrá el mismo color.
          li
            i.fas.fa-check
            p La reserva de objetos puede generar en la impresión filetes molestos a la vista, a causa de las imperfecciones de registro en la imprenta, inevitables si no se aplica el denominado&nbsp;
              span(style='font-style:italic') “trapping”.


    Separador

    // 1.5
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.5 Modelos de color

    .row.mb-4.align-items-center
      .col-xl-6
        p.mb-4 El perfil de color por excelencia para impresión digital es Adobe RGB al manejar una escala de colores mucho más extensa que CMYK y garantizando un color exacto y constante en todos los medios, respetando fielmente lo que se ve en la pantalla.
        p Para las tecnologías que no reconocen este perfil de color, el modelo más usado para impresión es el CMYK, dada su fidelidad de color, realizando conversión de perfil final de acuerdo al sustrato en el que se vaya a imprimir; este modelo se basa en la sustracción del blanco y los colores primarios (magenta, cian y amarillo), combinándolos para conseguir la totalidad de colores, el negro aporta cuerpo, acentuando rasgos y dando profundidad de color, los documentos con este tipo de perfil, tendrá coincidencias de color, siendo el ideal para la impresión de documentos.
      .col-xl-6
        figure
          img(src='@/assets/curso/tema1/img15.svg', alt='Imagen ejemplo CMYK y RGB')

    .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
      p Otro de los perfiles más encontrados es el RGB y es este perfil el ideal para la visualización de los elementos en pantallas y dispositivos, dado que la combinación de colores muestra colores más nítidos y brillantes, este modelo (Red, Green, Blue) se basa en la “síntesis aditiva” que es la suma de sus colores primarios; dado que este perfil no es óptimo para la impresión de elementos, se hace necesaria la modificación de los archivos desde cualquier software especializado, basta con hacer el cambio del perfil de color es su menú inicial.

    Separador

    // 1.6
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.6 Vínculos e hipervínculos

    .row.mb-4.align-items-center
      .col-xl-6
        p.mb-4 La forma más sencilla de entender estos conceptos, es saber que un vínculo es básicamente un elemento que puede ser un video, un archivo de audio o una imagen, etc., de un documento y que el enlace (link) o hipervínculo es el acceso remoto de una información, referenciado en otro elemento, pero que no hace parte del primer documento, es decir, es una información que se encuentra en otra parte, pero que puede ser importante, por eso se vinculan los dos.

        p Un hipervínculo es un elemento que se compone de dos partes, <span class="etiqueta">el ancla o punto de destino</span> y la dirección, que es el destino final, gracias a la constante actividad que se presenta en el mundo virtual, los vínculos se hacen más presentes y constantes, ayudando a crear herramientas que completan información y ayudan a la navegación de muchas de las páginas que se pueden navegar día a día; estos enlaces hacen conexiones con la web, invocando otras páginas, imágenes, o diferentes recursos que ayudarán a este gran mundo de la hipermedia.
      .col-xl-6
        figure
          img(src='@/assets/curso/tema1/img16.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .row.cajon.color-acento-botones.p-4.align-items-center
          .col-auto.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema1/img17.svg', alt='Imagen decorativa')
          .col-md-9
            p.mb-0 Las anclas o puntos de destino son elementos que se muestran de forma distinta, utilizando un color diferente, una tipografía o un estilo que se diferencie del otro contenido, es posible que las interacciones como los punteros o los botones tengan alguna forma de diferenciarse, esto será posible gracias a la programación y a la facilidad de lenguajes como CSS para crear estos estilos.

    p.my-4 Por otra parte, se tiene el término enlace o <i>link</i>, que casi siempre es utilizado de forma errónea para referenciar los puntos de origen, pero que realmente hace referencia al destino o <i>link target</i>. Los enlaces más comunes son los que invocan otras páginas web, otro recurso o alguna posición especial en una página web. 
    .titulo-quinto.color-acento-contenido
      h4 Algunos de los hipervínculos más usados y que se pueden encontrar en el día a día son:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/info18.svg', alt='Imagen que con ejemplos de algunos de los hipervínculos más usados y que se pueden encontrar en el día a día')

          .tarjeta.color-primario.p-3(x="9%" y="65%" numero="1")
            .h5.mb-2 Hipervínculo de imagen
            p Un hipervínculo de imagen es un enlace que se encuentra asociado a una imagen, de forma que si se hace clic sobre esa imagen se carga la página que indique el hipervínculo.

          .tarjeta.color-primario.p-3(x="30%" y="65%" numero="2")
            .h5.mb-2 Hipervínculo de texto
            p Este hipervínculo es un enlace que se encuentra asociado a un texto, de forma que al hacer clic sobre ese texto se carga la página donde indique el hipervínculo.

          .tarjeta.color-primario.p-3(x="51%" y="65%" numero="3")
            .h5.mb-2 Hipervínculo local o interno
            p Un hipervínculo local o interno es un vínculo a una página que se encuentra en el mismo sitio web o sitio local.

          .tarjeta.color-primario.p-3(x="71%" y="65%" numero="4")
            .h5.mb-2 Hipervínculo a una dirección de correo electrónico
            p Un hipervínculo a una dirección de correo electrónico es un vínculo que contiene una dirección de correo. Al pulsar en él, automáticamente se abre el programa de correo que el usuario tenga instalado como servicio de correo electrónico.

          .tarjeta.color-primario.p-3(x="91%" y="65%" numero="5")
            .h5.mb-2 Hipervínculo externo
            p Un hipervínculo externo es un vínculo a otro sitio web en Internet (sitio externo). Es un vínculo a cualquier otro lugar fuera del sitio actual.


    Separador


    // 1.7
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.7  Perfiles y acoplamientos

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        p.mb-4 Los perfiles se utilizan para lograr que los colores sean la representación más fiel y desempeñan un papel importante en los resultados finales, interviniendo con elementos como sus brillos o la cantidad de tinta por punto, los sustratos, etc.
        p.mb-4 Los perfiles ICC (Consorcio Internacional del Color) proporcionan ajustes y optimizaciones que facilitan procesos y permite a los impresores diseñar configuraciones de tintas diseñadas para proyectos específicos, generando una combinación específica de tintas con sus respectivos papeles, dándole características específicas a los dispositivos de entrada o de salida.
        p.mb-4
          strong Se pueden definir algunas de las funciones de los perfiles como:

        ul.lista-ul--color.mt-4
          li
            i.fas.fa-check
            | Comunicarle el color al dispositivo de salida.

          li
            i.fas.fa-check
            | Ajustar los tonos más adecuados adaptando los colores que contiene la imagen a los más próximos que se puedan sacar.

          li
            i.fas.fa-check
            | Ajustar los tonos más adecuados adaptando los colores que contiene la imagen a los más próximos que se puedan sacar.

      .col-md-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img18.png', alt='Imagen decorativa')


    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .row.cajon.color-primario.p-4.align-items-center
          .col-auto.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema1/img19.svg', alt='Imagen decorativa')
          .col-md-9
            p.mb-0 Como bien se sabe, la cadena gráfica se compone de diferentes periféricos que no tienen la posibilidad de tener el mismo lenguaje o perfil, por esto la necesidad de poder incorporarlo.


    Separador

    // 1.8
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.8  Preparación de archivos para impresión

    p.mb-4 La creación de un archivo de impresión debe tener en cuenta algunos aspectos básicos que permitirá tener un archivo listo y a su vez descartar los inconvenientes que pueden existir al momento de pensar en el proceso de impresión de algún proyecto, con esto se evitarán errores y problemas que gastarán tiempo y recursos.

    .titulo-tercero2.mb-5(data-aos="fade-right")
      h3.mb-0 Elementos de color
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row.mb-4
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img20.svg' alt='AvatarTop')
          .tarjeta.bg-suave
            .p-4
              p Los archivos deben venir en CMYK y no RGB.

      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img21.svg' alt='AvatarTop')
          .tarjeta.bg-suave
            .p-4
              p No utilizar transparencias en los colores, ya que las interpretaciones de las máquinas no las reconocen.
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img22.svg' alt='AvatarTop')
          .tarjeta.bg-suave
            .p-4
              p Los colores mixtos, deben tener los textos en el 100% del canal K.


    .row.mb-4
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img23.svg' alt='AvatarTop')
          .tarjeta.bg-suave
            .p-4
              p No utilizar efectos en capas, al igual que las transparencias, no son reconocidas y terminan con problemas.

      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img24.svg' alt='AvatarTop')
          .tarjeta.bg-suave
            .p-4
              p Los archivos impresos en grises, deben venir con perfiles de color en grises

      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img25.svg' alt='AvatarTop')
          .tarjeta.bg-suave
            .p-4
              p Las impresiones en sustratos oscuros, oscurecen las impresiones, por eso es vital poder hacer pruebas de color.

    .titulo-tercero2.mb-5(data-aos="fade-right")
      h3.mb-0 Formato de archivo
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')


    .row.align-items-center
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img26.svg', alt='Imagen decorativa')

      .col-md-7.mb-4(data-aos="fade-right")
        ul.lista-ul--color.mt-4
          li
            i.fas.fa-check
            | Todas las imágenes deben venir incrustadas o como hipervínculos en la carpeta de empaquetado.

          li
            i.fas.fa-check
            | Tenga presentes las áreas de sangrado de las imágenes.

          li
            i.fas.fa-check
            | Los archivos deben estar en formatos de edición, o PDF al 100% del tamaño.

          li
            i.fas.fa-check
            | Es importante tener presentes los perfiles de color que serán la representación fiel de los documentos.

    .titulo-tercero2.mt-5(data-aos="fade-right")
      h3.mb-0 Sangrado
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    ul.lista-ul--color.mt-4
      li
        i.fas.fa-check
        | Para poder estar libres de problemas, es recomendable añadir áreas de sangrado.

      li
        i.fas.fa-check
        | Al igual de importante que el sangrado y como se comentó anteriormente, es igual de importante tener en cuenta las cajas de seguridad.


    .position-relative.mb-4
      .bg-fullwidth
        .row.position-relative.justify-content-center(data-aos="fade-down")
          .col-12.col-lg-6
            img(src='@/assets/curso/tema1/img27.svg', alt='Imagen ejemplo de sangrado')


    .titulo-tercero2.my-4(data-aos="fade-right")
      h3.mb-0 Márgenes
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4 Al igual de importante como el sangrado, las márgenes ayudan a dar el formato y diseño a las piezas, por eso su importancia al momento de pensar en procesos como encuadernación u otros procesos que necesitan otros espacios para no tener problemas de impresión.
    p Evitar en lo posible que ilustraciones, gráficos y diseños, abarquen hasta los márgenes de sangrado, para evitar posibles líneas blancas en los cortes.


    .position-relative.mb-4
      .bg-fullwidth
        .row.position-relative.justify-content-center(data-aos="fade-down")
          .col-12.col-lg-5
            img(src='@/assets/curso/tema1/img28.svg', alt='Imagen ejemplo de márgenes')

    .titulo-tercero2.my-4(data-aos="fade-right")
      h3.mb-0 Paginación
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    ul.lista-ul--color.mb-4
      li
        i.fas.fa-check
        | Cuando existen varias páginas en un documento es importante ordenar las páginas y comprobar que todas las páginas que están y las sobrantes están eliminadas.

      li
        i.fas.fa-check
        | Si el documento es en cuartillas, no olvidar que la paginación es con múltiplos de cuatro.

      li
        i.fas.fa-check
        | Compruebe el total de páginas.

    .position-relative.mb-4
      .bg-fullwidth
        .row.position-relative.justify-content-center(data-aos="fade-down")
          .col-12.col-lg-4
            img(src='@/assets/curso/tema1/img29.svg', alt='Imagen ejemplo de márgenes')


    .row.my-4
      .col-lg-6
        .titulo-tercero2.my-4(data-aos="fade-right")
          h3.mb-0 Resolución
          img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

        ul.lista-ul--color.mt-4
          li
            i.fas.fa-check
            | Los documentos deben tener una resolución mínima dependiendo sus medidas.

          li
            i.fas.fa-check
            | La resolución recomendada para las imágenes es de 300 ppp, para impresiones a gran escala o escala 1:1 se recomiendan resoluciones de 150 ppp.


      .col-lg-6
        .titulo-tercero2.my-4(data-aos="fade-right")
          h3.mb-0 Tipografías
          img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

        ul.lista-ul--color.mt-4
          li
            i.fas.fa-check
            | Todas las fuentes utilizadas en los documentos deben ser convertidos en trazos o estar incrustados en el documento.


          li
            i.fas.fa-check
            | Se deben tener en cuenta temas como los contrastes, tanto de los fondos como de los caracteres.


          li
            i.fas.fa-check
            | Es importante hacer una prueba para revisión de tipografías.


    .row.justify-content-center.mt-5.mb-4(data-aos="fade-down")
      .col-md-10
        .row.cajon.color-primario.p-4.align-items-center
          .col-auto.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema1/img30.svg', alt='Imagen decorativa')
          .col-md-9
            p.mb-0 Estas características se agrupan en un gran concepto que se refiere al control y revisión de los aviones antes del despegue y es el “prevuelo”; este concepto en producción gráfica se usa para controlar los originales al momento de hacer una impresión, o arte final.


        p.my-4 Se usa para hacer un control preliminar de los archivos y poder controlar las relaciones del documento, frente a los parámetros definidos y se pueden tomar estos elementos para la creación de este documento, descubriendo y permitiendo solucionar errores y fallos comunes, para así poder reducir el riesgo de extra costos y retrasos en las entregas.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
    mostrarIndicador: true,
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
