<template>
  <div>
      <div class="container">
        <div class="row mt-5">
          <h3>Voce esta vendo noticias do: {{championship}} </h3>
        </div>
      </div>

      <transition name="fade-view" >
        <router-view></router-view>
      </transition>
    
   

    <div class="container">
      <div class="row my-club mt-5">
        <div class="col-6">
          <h2>Seu clube é: {{myClube}} </h2>
        </div>
        <div class="col-6">
          <HcodeInput  />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import HcodeInput from './HcodeInput.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    HcodeInput
  },
  data() {
    return{
     
    }
  },
  props: {
    currentComponent: String,
  }, 
  computed: {
    ...mapGetters({
      championship:'getChampionship',
      myClube: 'getClubeName'
    }),
  }
}

</script>

<style scoped>
  .fade-view-enter, .fade-view-leave-to {
    opacity:0 ;
  }

  .fade-view-enter-active, .fade-view-leave-active {
    transition: opacity .5s ease-in-out;
  }
</style>