<template>

  <div class="row div-news">
    <div class="col-3">
      <img :src="require('../assets/' + this.imgName)" :alt="imgInfo">
    </div>
    <div class="col-9">
      <h2>{{newsTitle}}</h2>
      <p> {{newsContent | truncate(200)}} </p>

         <span class="font-italic" > {{newsDate}} </span>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    imgName: {
      type: String,
      required: true,
    },
    imgInfo: {
      type: String,
      required: true,
    },
    newsTitle: {
      type: String,
      required: true,
    },
    newsContent: {
      type: String,
      required: true,
    },
    newsDate: {
      type: String,
      required: true,
    }
  }
  
}
</script>

<style>
.div-news {
    margin-bottom: 30px;
}
.div-news img {
    width: 100%;
}
.div-news h2 {
    cursor: pointer;
    color: #fff;
}
</style>