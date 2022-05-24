<template>

    <div class="vx-row">

    <!-- VERTICAL LAYOUT -->
    <div class="vx-col md:12 w-full mb-base">
      <vx-card title="AGREGAR lOGO" >
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
             <label class="vs-input--label">LOGO</label>
               <vs-upload  accept=".jpg,.png,.jpeg,.png" :data="payload" action="https://api.mokitajar.com/api/admin/sucursal-logo" :headers="headers"  fileName="picture"  :singleUpload="true" text="Subir imagenes"  @click="OLA($event)" />
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

        logo: '',

        headers: {
           "Authorization": localStorage.getItem('accessToken'),
         
        },
        payload : {

            studio_id :'',
            sucursal_id: this.$route.params.id_sucursal   
        }
    }
  },
    methods:{
      OLA(e){
        console.log('ola mundo ....',e)

      }

    },
    created(){

      if (!moduleDataList.isRegistered) {
          this.$store.registerModule('headquarterList', moduleDataList)
          moduleDataList.isRegistered = true
      }
 
      this.$store.dispatch('headquarterList/getLogoSucursal',this.$route.params.id_sucursal).then((data)=>{

        if(data.data.length){
            this.logo=data.data[0].path_url 
        }

      })
    }
}

</script>
