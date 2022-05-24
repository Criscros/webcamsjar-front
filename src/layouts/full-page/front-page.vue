<!-- =========================================================================================
    File Name: KnowledgeBase.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="knowledge-base-page" style="margin : 20px">
        <!-- JUMBOTRON -->
        <!-- <div class="knowledge-base-jumbotron">
            <div class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
                <h1 class="mb-1 text-white">Dedicated Source Used on Website</h1>
                <p class="text-white">Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer.</p>
                <vs-input icon-no-border placeholder="Search Topic or Keyword" v-model="knowledgeBaseSearchQuery" icon-pack="feather" icon="icon-search" size="large" class="w-full mt-6" />
            </div>
        </div> -->

        <!-- KNOWLEDGE BASE CARDS  -->
        <div class="vx-row" >
                <div class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base"
              
                  v-for="item in filteredKB" :key="item.id" 
                  @click="href(item.url)">
                    <vx-card class="text-center cursor-pointer"   :style="item.style" >
                        <img :src="item.graphic" alt="graphic" width="180" class="mx-auto mb-4">
                        <h4 class="mb-2">{{ item.title.toUpperCase() }}</h4>
                        <small class="description">{{ item.description }}</small>
                    </vx-card>
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
      knowledgeBaseSearchQuery: '',
      kb: [
        {
          id          : 5,
          title       : 'Buscar Estudio',
          description : 'Encuntra Los Mejores Estudios',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : 'https://tuestudiowebcam.com',
          style       : 'background-color : #FF6363'
        },
        {
          id          : 1,
          title       : 'Ser estudio webcam',
          description : 'requisitos para ser un estudio webcam.',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/estudio-webcam',
          style       : 'background-color :#E8C921'
        },
        {
          id          : 2,
          title       : 'ser webcamer',
          description : 'que necesito para ser modelo webcam',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/ser-modelo-webcam',
          style       : 'background-color:#0791e6'
        },
        {
          id          : 3,
          title       : 'vender tokens',
          description : 'Integra Dashboard para tu Estudio',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/vender-tokens-chaturbate',
          style       : 'background-color : #AEDA00'
        },
        {
          id          : 4,
          title       : 'Generar nomina',
          description : 'automatiza tu pago liquidacion de nomina.',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/generar-nomina',
          style       : 'background-color : #E66CEF'
        },

        {
          id          : 6,
          title       : 'Noticias',
          description : 'Actualidad',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/noticias',
          style       : 'background-color : #F97308'
        }
      ]
    }
  },
  computed: {

    filteredKB () {            

      return this.kb.filter((item) => item.title.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()) || item.description.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()))
    }

  },
  methods: {
    href(url){
     
      window.open(url);
      //$router.push(item.url).catch(() => {})
    }
  },
  components: {}
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
    background-image: url('../../assets/images/pages/knowledge-base-cover.jpg');
    background-size: cover;

}

.whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  //background:transparent url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M3.516 3.516c4.686-4.686 12.284-4.686 16.97 0 4.686 4.686 4.686 12.283 0 16.97a12.004 12.004 0 01-13.754 2.299l-5.814.735a.392.392 0 01-.438-.44l.748-5.788A12.002 12.002 0 013.517 3.517zm3.61 17.043l.3.158a9.846 9.846 0 0011.534-1.758c3.843-3.843 3.843-10.074 0-13.918-3.843-3.843-10.075-3.843-13.918 0a9.846 9.846 0 00-1.747 11.554l.16.303-.51 3.942a.196.196 0 00.219.22l3.961-.501zm6.534-7.003l-.933 1.164a9.843 9.843 0 01-3.497-3.495l1.166-.933a.792.792 0 00.23-.94L9.561 6.96a.793.793 0 00-.924-.445 1291.6 1291.6 0 00-2.023.524.797.797 0 00-.588.88 11.754 11.754 0 0010.005 10.005.797.797 0 00.88-.587l.525-2.023a.793.793 0 00-.445-.923L14.6 13.327a.792.792 0 00-.94.23z'/%3E%3C/svg%3E") 50% no-repeat;
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
 .description{
   color: white;
 }



</style>
