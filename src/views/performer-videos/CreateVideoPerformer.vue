<!-- =========================================================================================
  File Name: DataListListView.vue
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="data-list-list-view" class="data-list-container">


  </div>
</template>

<script>

import PerformerVideosModlues from '@/store/performer-videos/PerformerVideosModules'



export default {
  components: {
 
  },
  data () {
    return {
      selected: [],
      itemsPerPage: 4,
      isMounted: false,
      sidebarData: {}
    }
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    products () {
      return []//  this.$store.state.estudios.products
    },
    performersVideos(){
       return this.$store.state.performersVideos.videos_performer
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
    }
  },
  methods: {
    addNewData () {
      this.sidebarData = {}
      
    },
    deleteData (id) {
      this.$store.dispatch('estudios/removeItem', id).catch(err => { console.error(err) })
    },
    viewDataModel(id){
      
      console.log(this.$router)
      this.$router.push(`api/admin/model/${id}`)
    },
    editData (data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data

      
    },
    getOrderStatusColor (status) {
      if (status === 'on_hold')   return 'warning'
      if (status === 'delivered') return 'success'
      if (status === 'canceled')  return 'danger'
      return 'primary'
    },
    getPopularityColor (num) {
      if (num > 90)  return 'success'
      if (num > 70)  return 'primary'
      if (num >= 50) return 'warning'
      if (num < 50)  return 'danger'
      return 'primary'
    },
    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    },
  },
  created () {
 
    if (!PerformerVideosModlues.isRegistered) {
      this.$store.registerModule('performersVideos', PerformerVideosModlues)
      PerformerVideosModlues.isRegistered = true
    }

    // this.$store.dispatch('estudios/getAllStudios').then((data)=>{
    //   console.log('response server Models...', data)
    // })
  },
  mounted () {
    this.isMounted = true
    
  }
}
</script>

<style lang="scss">

</style>
