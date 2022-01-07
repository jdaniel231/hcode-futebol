<template>
  <section>
    <div class="container">
      <HcodeSectionNewsIndividual
        img-name="news1.jpg"
        img-info="Noticia 1"
        news-title="Começa os treinos para a nova temporada"
        news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Deserunt, voluptas aspernatur? At, deleniti et eos dicta 
        ipsam iure animi nesciunt repellendus aliquam eligendi facilis 
        mollitia alias eius quae, non facere. Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Vitae adipisci non ex nesciunt, vero 
        necessitatibus eum laudantium voluptatibus? Aliquam quisquam possimus
         minus quis dolor quos nam totam mollitia tempora nihil"
        
        news-date="20/05/2021"

      />

      <HcodeSectionNewsIndividual
        img-name="news2.jpg"
        img-info="Noticia 2"
        news-title="Jogo de quarta-feira"
        news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Deserunt, voluptas aspernatur? At, deleniti et eos dicta 
        ipsam iure animi nesciunt repellendus aliquam eligendi facilis 
        mollitia alias eius quae, non facere. Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Vitae adipisci non ex nesciunt, vero 
        necessitatibus eum laudantium voluptatibus? Aliquam quisquam possimus
         minus quis dolor quos nam totam mollitia tempora nihil"
        
        news-date="31/06/2021"

      />
      <HcodeSectionNewsIndividual
        img-name="news3.jpg"
        img-info="Noticia 3"
        news-title="A inaguração do estadio Castelão em Fortaleza-Ce"
        news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Deserunt, voluptas aspernatur? At, deleniti et eos dicta 
        ipsam iure animi nesciunt repellendus aliquam eligendi facilis 
        mollitia alias eius quae, non facere. Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Vitae adipisci non ex nesciunt, vero 
        necessitatibus eum laudantium voluptatibus? Aliquam quisquam possimus
         minus quis dolor quos nam totam mollitia tempora nihil"
        
        news-date="25/07/2021"

      />
      
    </div>
  </section>

  
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual.vue'

export default {
  components: {
  HcodeSectionNewsIndividual
  }
}
</script>

<style scoped>
  section {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #f37520;
  }
</style>