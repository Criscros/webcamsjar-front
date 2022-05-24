<template>

    <div class="vx-row">

    <!-- VERTICAL LAYOUT -->
    <div class="vx-col md:12 w-full mb-base">
      <vx-card title="AGREGAR IMAGENES" >
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
             <label class="vs-input--label">Product photo</label>
               <vs-upload  accept=".jpg,png,jpeg,.png" :data="payload" action="https://api.mokitajar.com/api/admin/photo-studio" :headers="headers"  fileName="picture"  :singleUpload="true" text="Subir imagenes"  @click="OLA($event)" />
          </div>
        </div>
       
       

      </vx-card>


    </div>

  
      

    </div>
</template>



<script>



import moduleDataList from '@/store/headquarter-data/HeadquarterModules.js'


export default{
   components: {  
  },
  data () {
    return {

        headers: {
           "Authorization": localStorage.getItem('accessToken'),
         
        },
        payload : {

            studio_id :'',
            sucursal_id: this.$route.params.id
            
        }


    }
  },
    methods:{
      OLA(e){
        console.log('ola mundo ....',e)
      }

    },
  created(){
  
     this.payload.studio_id = JSON.parse(localStorage.getItem('userInfo')).user.studio_id

    if (!moduleDataList.isRegistered) {
        this.$store.registerModule('headquarterList', moduleDataList)
        moduleDataList.isRegistered = true
    }

    this.$store.dispatch('getLogoSucursal').then((data)=>{
      console.log('response server Models...', data)
    })


  }


}
</script>
