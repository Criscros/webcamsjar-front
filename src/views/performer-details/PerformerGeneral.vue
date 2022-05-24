<template>
  <vx-card no-shadow>

    <!-- Img Row -->
    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="activeUserInfo.photoURL" size="70px" class="mr-4 mb-4" />
      <div>
        <vs-button class="mr-4 sm:mb-0 mb-2">Upload photo</vs-button>
        <vs-button type="border" color="danger">Remove</vs-button>
        <p class="text-sm mt-2">Allowed JPG, GIF or PNG. Max size of 800kB</p>
      </div>
    </div>

    <!-- Info -->
    <vs-input class="w-full mb-base" label="Nombres registrados en el documento de identidad" v-model="nombres">
    </vs-input>
    <vs-input class="w-full mb-base" label="Apellidos registrados en el documento de identidad" v-model="apellidos">
    </vs-input>
    <vs-input class="w-full mb-base" type="date" v-model="fecha_nacimiento" label="Fecha de nacimiento" />
    <vs-input class="w-full" label="Edad" v-model="edad"></vs-input>
    <div class="vx-row mb-6">

      <div class="vx-col w-full">
        <vs-select 
          placeholder="Buscar"
          class="selectExample vx-col w-full"
          label="SELECCIONE DEPARTAMENTO"
          label-placeholder="Autocomplete" autocomplete
          v-model="departments" @change="changeDepartment()">
        </vs-select>
      </div>
    </div>

    <div class="vx-row mb-6">
      <div class="vx-col w-full">
        <vs-select placeholder="Buscar" class="selectExample vx-col w-full" label="SELECCIONE CIUDAD"
          label-placeholder="Autocomplete" autocomplete v-model="city">
        </vs-select>
      </div>
    </div>
<!-- 
    <vs-selected label="Genero" v-model="genero"></vs-selected> -->
    
    <vs-input class="w-full my-base" label="Company" v-model="company"></vs-input>
    

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2">Save Changes</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning">Reset</vs-button>
    </div>
  </vx-card>
</template>

<script>

export default {
  data() {
    return {
      nombres: '',
      city: '',
      department: '',
      fecha_nacimiento: '',
      apellidos: '',
      edad: '',
      value: '',
      genero: '',
      company: '',
      departments :[],
      all_cities:[]
    }
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    },
  },
    methods:{
         changeDepartment(){
           
             this.city_selected = ''
             this.cities = []
             var result =  this.all_cities[0].filter(data => data.departamento_id == this.department_selected);
             console.log(result)
             this.cities.push(result)
         },

    },
  created(){
         var payload= {}
        this.$store.dispatch('auth/getDepartmentCities', payload).then((msg)=>{
                
            this.departments.push(msg.data.departments)
            this.all_cities.push(msg.data.cities)
            console.log(this.departments)
        })
  }
}
</script>
