<template>
  <div id="app">
    <HcodeHeader 
    @select-championship="changeChampionship" 
    @change-component="changeComponent"
    />
    <HcodeSection 
      :championship="championship" 
      :current-component="currentSectionComponent"
    />
    <HcodeFooter />
  </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader.vue'
import HcodeFooter from './components/HcodeFooter.vue'
import HcodeSection from './components/HcodeSection.vue'
import { mapMutations } from 'vuex'


export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  },
  data() {
    return {      
      currentSectionComponent: 'HcodeSectionBanner'
    }
  },
  methods: {
    ...mapMutations({
      changeChampionship: 'setChampionship'
    }),
    changeComponent(value) {
      let component;
      switch (value) {
        case 'home':
          default:
            component = 'HcodeSectionBanner'
          break;

          case 'news':
            component = 'HcodeSectionNew'
          break;
      }

      this.currentSectionComponent = component;
    }
  }
}
</script>

<style  >
  @import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
