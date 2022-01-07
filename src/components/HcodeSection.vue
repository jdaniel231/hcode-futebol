<template>
  <div>
      <div class="container">
        <div class="row mt-5">
          <h3>Voce esta vendo noticias do: {{championship}} </h3>
        </div>
      </div>
    <HcodeSectionBanner />
    <HcodeSectionNew />
  </div>
  
</template>

<script>
import HcodeSectionBanner from './HcodeSectionBanner.vue'
import HcodeSectionNew from './HcodeSectionNew.vue'

export default {
  components: {
    HcodeSectionBanner,
    HcodeSectionNew
  },
  props: {
    championship: String
  }
}

</script>

<style scoped>

</style>