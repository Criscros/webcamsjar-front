<template>

    <div class="vx-row">

            <!-- VERTICAL LAYOUT -->
    <div class="vx-col md:12 w-full mb-base">
      <vx-card title="EDITAR SEDE "  >
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" v-model="name" label="NOMBRE" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" v-model="email" type="email" label="EMAIL" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" v-model="web_whatsapp" type="number" label="WEB WHATSS APP" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full" v-model="url" type="email" label="SITIO WEB" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <vs-input class="w-full"  v-model="phone" label="TELEFONO"  type="number" />
          </div>
        </div>
        
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            
                    <vs-select
                        placeholder="Años"
                        class="selectExample vx-col w-full"
                        label="Experiencia en Años"
                        label-placeholder="Autocomplete"
                        autocomplete
                        v-model="since"
                    >
                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item , index) in time_experience" />
                    </vs-select>

          </div>
        </div>

        <div class="vx-row mb-6">
            
            <div class="vx-col w-full">
                    <vs-select
                        placeholder="Buscar"
                        class="selectExample vx-col w-full"
                        label="SELECCIONE DEPARTAMENTO"
                        label-placeholder="Autocomplete"
                        autocomplete
                        v-model="department_selected"
                        @change="changeDepartment()"
                    >
                    <vs-select-item :key="index" :value="item._id" :text="item.name" v-for="(item , index) in departments[0]" />
                    </vs-select>
            </div>
        </div>
        <!-- CITIES -->
        <div class="vx-row mb-6">
            <div class="vx-col w-full">
                    <vs-select
                        placeholder="Ciudades"
                        class="selectExample vx-col w-full"
                        label="SELECCIONE CIUDAD"
                        label-placeholder="Autocomplete"
                        autocomplete
                        v-model="city_selected"
                    >
                    <vs-select-item :key="index" :value="item._id" :text="item.name" v-for="(item , index) in cities[0]" />
                    </vs-select>
                  
            </div>
        </div>

         <google-map-basic :markers="markers"> </google-map-basic>

        <div class="vx-row mb-6">
            <div class="vx-col w-full">
 
                <span class="label ">Grupos Admitidos</span>

                <ul class="centerx">
                  <li>

                    <vs-checkbox v-model="gender.woman">Mujeres</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox color="success" v-model="gender.lesbian">Lesbianas</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox color="danger" v-model="gender.couple">Parejas</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox color="warning" v-model="gender.gay">Gay</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox color="dark" v-model="gender.trans">Trans</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox color="rgb(38, 187, 174)" v-model="gender.man">Hombres</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox color="#720ea8" v-model="gender.groups">Gurpos</vs-checkbox>
                  </li>
                </ul>
            </div>
        </div>



        <div class="vx-row mb-6">
            <div class="vx-col w-full">
 
                <span class="label ">Servicios</span>

                <ul class="centerx">
                  <li>
                    <vs-checkbox v-model="general_services.smoke">Fumar</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox  v-model="general_services.home"> Estadia </vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox  v-model="general_services.food">Comida</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox  v-model="general_services.healty">Seguridad Social</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox  v-model="general_services.accompaniment">Acompañamiento</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox  v-model="general_services.work_shift">Turnos Rotativos</vs-checkbox>
                  </li>
                  <li>
                    <vs-checkbox  v-model="general_services.flexibke_work">Horarios Felxibles</vs-checkbox>
                  </li>
                </ul>
            </div>
        </div>

        <vs-button color="success" type="filled" @click="SaveHeadQuarter">Actualizar</vs-button>

      </vx-card>
    </div>

      

    </div>
</template>



<script>

import GoogleMapBasic from './SucursalEditMap.vue'
import vSelect from 'vue-select'
import router from '@/router'
import moduleDataList from '@/store/headquarter-data/HeadquarterModules.js'


export default{
   components: {
        GoogleMapBasic,
        'v-select': vSelect
  },
  data () {
    return {
      select1Normal:'',
      select1:[],
      since:'',
      name:'',
      email:'',
      phone:null,
      web_whatsapp :'',
      url:'',
      general_services:{
        smoke:false,
        home:false,
        food:false,
        heatly :false,
        accompaniment:false,
        work_shift : false,
        flexibke_work:false,

      },
      gender: {
          woman: true,
          lesbian: false,
          couple: false,
          gay: false,
          trans:false,
          man:false,
          groups:false
      },
      options2:[],
      departments:[],
      department_selected:'',
      all_cities :[],
      cities : [],
      city_selected:'',
      time_experience:[
        {text: 'uno', value: 1},
        {text: 'dos', value: 2},
        {text: 'tres', value: 3},
        {text: 'cuatro', value: 4},
        {text: 'cinco', value: 5},
           {text: 'seis', value: 6},
           {text: 'siete', value: 7},
           {text: 'ocho', value: 8},
           {text: 'nueve', value: 9},
           {text: 'diez', value: 10},
           {text: 'mas de 10 ', value: 11},
      ],
      selected: [ ],
      markers: [],
        
    }

  },
    methods:{
         changeDepartment(){

             this.city_selected = ''
             this.cities = []
             var result =  this.all_cities[0].filter(data => data.departamento_id == this.department_selected);
             this.cities.push(result)
            
         },
         SaveHeadQuarter(){

           
            var payload = {

                name: this.name,
                email:this.email,
                phone:this.phone,
                since : this.since,
                department_id :this.department_selected,
                city_id : this.city_selected,
                lat_lng :this.$store.markers != undefined ?  this.$store.markers[0].position  : '',
                gender : this.gender,
                general_services : this.general_services,
                web_whatsapp : this.web_whatsapp,
                url: this.url,
                studio_id :localStorage.getItem('studio_id'),
                sucursal_id : this.$router.currentRoute.params.sucursal_id
            } 
          
      
          if(this.name != '' && this.email != ''  && this.department_selected != '' && this.city_selected){
   
              this.$store.dispatch('headquarterList/updateSede', payload).then((msg)=>{
                  msg    
                  router.push(router.currentRoute.query.to || '/sucursals')

              })

          }else{
            alert('verifique los datos ')
          }
        }
    },
  created(){
       if (!moduleDataList.isRegistered) {
        this.$store.registerModule('headquarterList', moduleDataList)
        moduleDataList.isRegistered = true
      }

        var sucursal_id = this.$route.params.sucursal_id
        var payload = {}


        this.$store.dispatch('auth/getDepartmentCities', payload).then((msg)=>{
                
            this.departments.push(msg.data.departments)
            this.all_cities.push(msg.data.cities)

          this.$store.dispatch('headquarterList/getItemSucursal', sucursal_id).then((data)=>{

                  this.name = data.data.name
                  this.email = data.data.email
                  this.phone = data.data.phone
                  this.web_whatsapp = data.data.web_whatsapp
                  this.url = data.data.url
                  this.since = data.data.since

                  this.general_services.smoke = data.data.general_services.smoke
                  this.general_services.home = data.data.general_services.home
                  this.general_services.food = data.data.general_services.food
                  this.general_services.heatly = data.data.general_services.heatly
                  this.general_services.accompaniment = data.data.general_services.accompaniment
                  this.general_services.work_shift = data.data.general_services.work_shift
                  this.general_services.flexibke_work = data.data.general_services.flexibke_work


                  this.gender.woman = data.data.gender.woman
                  this.gender.lesbian = data.data.gender.lesbian
                  this.gender.couple = data.data.gender.couple
                  this.gender.gay = data.data.gender.gay
                  this.gender.trans = data.data.gender.trans
                  this.gender.man = data.data.gender.man
                  this.gender.groups = data.data.gender.groups


                  this.department_selected = data.data.department_id
                  //
                  this.markers = data.data.lat_lng
                  this.$store.state['lat_lng'] = { position: { lat: data.data.lat_lng.lat , lng: data.data.lat_lng.lng}}
                  setTimeout(()=>{
                    this.city_selected = data.data.city_id
                  },300)
            })
        })
  }
}
</script>
