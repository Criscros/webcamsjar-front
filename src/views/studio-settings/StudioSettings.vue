<template>
  <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

    <!-- GENERAL -->
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'General' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-general />
      </div>
    </vs-tab>

    <vs-tab icon-pack="feather" icon="icon-info" :label="!isSmallerScreen ? 'Info' : ''">
      <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-info />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-github" :label="!isSmallerScreen ? 'Social Links' : ''">
      <div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-social-links />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-link-2" :label="!isSmallerScreen ? 'Documentación' : ''">
      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
        <studio-settings-connections />
      </div>
    </vs-tab>

  </vs-tabs>
</template>

<script>
import UserSettingsGeneral from './UserSettingsGeneral.vue'

import UserSettingsInfo from './UserSettingsInfo.vue'
import UserSettingsSocialLinks from './UserSettingsSocialLinks.vue'
import StudioSettingsConnections from './StudioSettingsConnections.vue'


export default {
  components: {
    UserSettingsGeneral,
 
    UserSettingsInfo,
    UserSettingsSocialLinks,
    StudioSettingsConnections,

  },
  data () {
    return {

    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
