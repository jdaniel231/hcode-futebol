<template>
  <div>
      <div class="container">
        <div class="row mt-5">
          <h3>Voce esta vendo noticias do: {{championship}} </h3>
        </div>
      </div>

    <component :is="currentComponent"> </component>
    
    
   

    <div class="container">
      <div class="row my-club mt-5">
        <div class="col-6">
          <h2>Seu clube é: {{myClube}} </h2>
        </div>
        <div class="col-6">
          <HcodeInput v-model="myClube" />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import HcodeSectionBanner from './HcodeSectionBanner.vue'
import HcodeSectionNew from './HcodeSectionNew.vue'
import HcodeInput from './HcodeInput.vue'

export default {
  components: {
    HcodeSectionBanner,
    HcodeSectionNew, 
    HcodeInput
  },
  data() {
    return{
      myClube: 'Hcode Treinamento',
    }
  },
  props: {
    championship: String,
    currentComponent: String,
  }
}

</script>

<style scoped>

</style>