<!-- =========================================================================================
    File Name: KnowledgeBaseCategoryQuestion.vue
    Description: Knowledge Base Question - Answer Article
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="knowledge-base-article" >
        <div class="vx-row">
            <!-- <div class="vx-col w-full md:w-2/5 lg:w-1/4">
                <vx-card title="Related Questions">
                    <ul class="bordered-items">
                        <li v-for="que in relatedQuestions" :key="que.id" class="py-2">
                          <router-link :to="que.answerUrl">{{ que.question }}</router-link>
                        </li>
                    </ul>
                </vx-card>
            </div> -->
            <div class="vx-col w-full  mt-12 md:mt-0">
                <vx-card>
                    <!-- Title -->
                    <div class="article-title mb-6">
                        <h1>{{ article.title }}</h1>
                        <!-- <p class="mt-1">Last updated on <span>{{ article.lastUpdated | date(true) }}</span></p> -->
                    </div>

                    <!-- Content -->
                    <p>Tras la Pandemia COVID-19  uno de los negocios mas rentables por decadas se convierte en la principal fuente de ingresos para muchos Colombianos .</p>
                    <div class="video-responsive">
                      <iframe width="640" height="480" class="responsive my-3 rounded" 
                          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">  
                      </iframe>
                    </div>
                    <p class="mb-6">Al momento de publicar este articulo las reglas proporcionadas por el estado para montar un estudio webcam no son claras.</p>

                    <!-- Topics -->
                    <h5 class="mb-2">Requisitos para tener un studio webcam:</h5>
                    <!-- <vx-list :list="article.topics"></vx-list> -->

                   <vs-list class="list">
                      <vs-list-header title="Iversión"></vs-list-header>
                      <p class="mt-4">
                        La iversión es relativa al alcance del proyecto y capacidad ecónomica de quien toma la desición de invertir 
                        en un estudio web cam . <br>
                        tradcuciendo esto a numeros  <br><br>
                       <b>Room  o Streaming setup</b> <br>
                        un equipo que cumpla con los requerimientos necesarios para trasmitir cuesta entre $600.000 y $1.500.000.
                        Una camara web de especificaciones mininmas cuesta en Colombia unos $400.000 pesos c910 logitech
                        una silla comoda o cama  varian  entre $200.000 y  $800.000 sin contar con iluminación y decoración del Room 
                        <br><br>
                        <b>Estimado por Romm $ 2.500.000</b>  <br><br>

                        
                        <b>Apartamento - Casa </b><br><br>

                        Canon de arrendamiento  $600.000  y  $4.000.000 <br><br>

                        recomendaciones verificar uso de suelos !! <br><br>

                        <b>Gastos Administrativos mensuales : </b>  servicios públicos , internet , Arriendo , monitores                   

                      </p>

                      
                    </vs-list>

                    <vs-list class="list">
                      <vs-list-header title="Moral - Ganas"></vs-list-header>
                      <p class="mt-4"> Debe estar preparado para hacer a un lado los prejucios morales y éticos sobre el sexo !!.</p>
                    </vs-list>

                   <vs-list class="list">
                      <vs-list-header title="Asesoramiento"></vs-list-header>

                      <h6> Asesoramiento  tipo "franquicia"</h6>
                      <p class="mt-4">
                        
                          Algunos estudios cobran enormes cantidades de dinero para "meterte" en la industria usando 
                          el nombre o marca  de ellos en un modelo de negocio tipo franquicia . Al final del día estamos hablando de INTERNET y ellos siguen siendo nada 
                          más que otro studio en este mar..   ojo !! un studio solo es una organizacion que dispone de uno o muchos lugares para realizar streaming NO son los dueños de 
                          las plataformas o paginas web .
            
                      </p><br>
                      
                      <h6> Asesoramiento Profesional</h6>
                      <p class="mt-4">

                          Toda aquella empresa , persona  o estuduio  que comparta la información necesaria para inicar en la insdustria
                          adult webcam haciendo acompañaniento durante la puesta en marcha  tu proyecto y capacitandote
                          en cada una de las etapas ademas debe enseñarte el manejo de cada una de las  plataformas con las que vas a trabajar  o te inscribieron previo acuerdo 
                      </p>


                    </vs-list>
                    
                    <vs-list class="list">
                      <vs-list-header title="Monitores"></vs-list-header>
                      <p class="mt-4">
                        un monitor es una persona que contratas por el turno o turnos para que recepcione y capacite a tus prospectos de modelo <br>
                        es un recurso fundamental para aumentar la productividad de cada turno además de que sirve para controlar el buen uso del room y validación  de conexión

                      </p>
                    </vs-list>

                   <vs-list class="list">
                      <vs-list-header title="Internet"></vs-list-header>
                      <p class="mt-4">
                        Recomendamos una descarga mínima de 20 megabits por segundo (Mbps) y una velocidad de carga de 5 Mbps para una calidad estándar. Para transmitir HD, necesitará 10 Mbps o más de ancho de banda de carga. Recomendamos probar sus velocidades de Internet en Chaturbate antes de transmitir utilizando los servidores de Chaturbate, visite https://chaturbate.speedtestcustom.com.
                      </p>
                      <img style="width :600px"  :src="article.internet" alt="article-img" class="responsive my-3 rounded" />
                    </vs-list>

                    <vs-list class="list">
                      <vs-list-header title="Rquisitos legales"></vs-list-header>
                      <p class="mt-4">
                        <ul>
                          <ol>rut</ol>
                          <ol>Camara y comercio codigos ciu referentes a tecnología , software , poroducción de video  son vaoldos no existe un numero para defiinir streaming adult webcam </ol>
                          <ol>Bomberos</ol>
                          <ol>Uso de suelos</ol>
                        </ul>
                      </p>
                    </vs-list>



                    <vs-list class="list">
                      <vs-list-header title="Rquisitos Técnicos"></vs-list-header>
                      <p class="mt-4">
                        ¡Puede comenzar a transmitir con casi cualquier computadora moderna que ejecute Linux , Windows o Mac OS! Para obtener la mejor experiencia de video, recomendamos una computadora con un procesador i7 (o equivalente) y al menos 3 GB de RAM. Comuníquese con nosotros si no está seguro de que su computadora sea lo suficientemente rápida o si desea un consejo para actualizar.
                      </p>
                    </vs-list>

                    <vs-list class="list">
                      <vs-list-header title="Reclutamiento"></vs-list-header>
                      <p class="mt-4">
                          <ul>
                              <li>voz a voz</li>
                              <li>Facebook</li>
                              <li>Instagram</li> 
                              <li>Google</li>
                              <li>Youtube</li> 
                          </ul>  
                      </p>
                    </vs-list>

                    <vs-list class="list">
                      <vs-list-header title="Liquidación de Nomina"></vs-list-header>
                      <p class="mt-4">
                        Al momneto de escribir este artículo no existe software alguno para liquidar modelos webcam asi que se debe recurrir a lindo y hermoso Excel de toda la vida . Posiblemente algunos usen
                        sistemas contables,  pero estos no fueron desarrollados para liquidar a una modelo ,  fueron diseñados para negocios tradicionales.
                      </p>
                    </vs-list>

                    <!-- Footer -->
                    <!-- <template slot="footer">
                        <div class="flex items-center justify-between">
                            <router-link to="/pages/knowledge-base/category/question" class="flex items-center"><feather-icon :icon="$vs.rtl ? 'ChevronsRightIcon' : 'ChevronsLeftIcon'" class="mr-2" svgClasses="h-4 w-4"></feather-icon> Previous Article</router-link>
                            <router-link to="/pages/knowledge-base/category/question" class="flex items-center">Next Article <feather-icon :icon="$vs.rtl ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'" class="ml-2" svgClasses="h-4 w-4"></feather-icon></router-link>
                        </div>
                    </template> -->
                </vx-card>

                <div id="disqus_thread" style="margin:20px"></div>



            </div>
            
        </div>

              <a 
                class="whatsapp" 
                href="https://wa.me/573202623189" 
                target="_blank" rel="nofollow">
                <span class="material-icons md-18">
                  chat
                </span>
              </a>
                    
    </div>
</template>

<script>

export default{
  data () {
    return {
      article: {
        title       : 'Como Montar Un Estudio Webcam ?',
        lastUpdated : 'Viernes Nov 06 2020 12:45:55 GMT+0000 (GMT)',
        img         : require('@/assets/images/pages/kb-article.jpg'),
        internet         : require('@/assets/images/pages/internet.png'),
        topics      : ['Requisitos para tener un studio webcam']
      },
      relatedQuestions: [
        {
          'id'        : 0,
          'question'  : 'Cake icing gummi bears?',
          'answerUrl' : '/pages/knowledge-base/category/question'
        },
        {
          'id'        : 1,
          'question'  : 'Jelly soufflé apple pie?',
          'answerUrl' : '/pages/knowledge-base/category/question'
        },
        {
          'id'        : 2,
          'question'  : 'Soufflé apple pie ice cream cotton?',
          'answerUrl' : '/pages/knowledge-base/category/question'
        },
        {
          'id'        : 3,
          'question'  : 'Powder wafer brownie?',
          'answerUrl' : '/pages/knowledge-base/category/question'
        },
        {
          'id'        : 4,
          'question'  : 'Toffee donut dragée cotton candy?',
          'answerUrl' : '/pages/knowledge-base/category/question'
        },
        {
          'id'        : 5,
          'question'  : 'Soufflé chupa chups chocolate bar?',
          'answerUrl' : '/pages/knowledge-base/category/question'
        }
      ]
    }
  },
  mounted () {
    this.$emit('changeRouteTitle', 'Question')
  },
  created(){
    


    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/** 
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
*/
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://www-mokitajar-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                                


  }
}
</script>

<style lang="scss">

.whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  //background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
}

.whatsapp-icon {
  margin-top:13px;
}
.material-icons.md-18 { 
    font-size: 60px;
 }
.list{
  background-color: #262c49;
  padding: 20px;
}
.video-responsive {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    padding-top: 30px;
    position: relative;
    }
.video-responsive iframe, .video-responsive object, .video-responsive embed {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
.mt-4{
  
  text-align: justify;
}
    

</style>
