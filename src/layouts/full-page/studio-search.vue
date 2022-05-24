<!-- =========================================================================================
    File Name: GoogleMapBasic.vue
    Description: Google map Basic
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="" >

    <p>ingrese su dirección ciuad  o barrio  </p>

    <div class="vx-row mb-12">
      <div class="vx-col w-full">
        
            <GmapAutocomplete
              class="vs-inputx vs-input--input normal"
              @place_changed="setPlace"
          />
      </div>
    </div>

    <div class="mt-6">



        <GmapMap
              :center="center"
              :zoom="zoom"
              map-type-id="roadmap"
              style="width: 100%; height: 400px"
              @click="marker($event)"
            >

            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="false"
            
            />


            
            
        </GmapMap>


    </div>


    </vx-card>

    
</template>



<script>




export default {

  data () {
    return {

      center: { lat: 4.570868, lng: -74.297333 },
      markers: [],
      coordinates:null,
      zoom:5

    }
    
    
  },
  methods:{
      updateCoordinates(location){
            this.coordinates = {
                lat: location.latLng.lat(),
                lng: location.latLng.lng(),
            };
      },
      marker(e){

        this.markers = []
        this.markers.push( { position: { lat: e.latLng.lat(), lng: e.latLng.lng()}})
        this.center=  { lat: e.latLng.lat(), lng: e.latLng.lng()}
        this.$store['markers'] = this.markers
        this.zoom = 8
        console.log('marker' ,this.markers)

      },
      setPlace(place){
        console.log('field address !!', place.geometry.location.lat()  )
        this.markers = [] 

        this.markers.push({ position: { lat: place.geometry.location.lat(), lng:  place.geometry.location.lng()}})
        this.center =  { lat:place.geometry.location.lat(), lng: place.geometry.location.lng()}
        this.$store['markers'] = this.markers
        this.zoom = 8
      },
      callmapa(){
         
          setTimeout(()=>{
              this.markers = []
              this.markers.push({ position: { lat: 4.570868, lng: -74.297333}})

          },300)
        
      }
      

  },
  created(){
   
  }
}

</script>

<style lang="css">

</style>