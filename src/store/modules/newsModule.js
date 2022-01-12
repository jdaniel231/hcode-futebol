export default {
  state:{
    news: [{
      id: 1,
      title: "Começa os treinos para a nova temporada",
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas aspernatur? At, deleniti et eos dicta ipsam iure animi nesciunt repellendus aliquam eligendi facilis mollitia alias eius quae, non facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci non ex nesciunt, vero necessitatibus eum laudantium voluptatibus? Aliquam quisquam possimus minus quis dolor quos nam totam mollitia tempora nihil',
      date: '2021-01-05',
      img: 'news1.jpg',
      info: 'Noticia 1'
    }, {
      id: 2,
      title: 'Jogo de quarta-feira',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas aspernatur? At, deleniti et eos dicta ipsam iure animi nesciunt repellendus aliquam eligendi facilis mollitia alias eius quae, non facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci non ex nesciunt, vero necessitatibus eum laudantium voluptatibus? Aliquam quisquam possimus minus quis dolor quos nam totam mollitia tempora nihil',
      date: '2021-04-31',
      img: 'news2.jpg',
      info: 'Noticia 2'
    }, {
      id: 3,
      title: 'A inaguração do estadio Castelão em Fortaleza-Ce',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas aspernatur? At, deleniti et eos dicta ipsam iure animi nesciunt repellendus aliquam eligendi facilis mollitia alias eius quae, non facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci non ex nesciunt, vero necessitatibus eum laudantium voluptatibus? Aliquam quisquam possimus minus quis dolor quos nam totam mollitia tempora nihil',
      date: '2021-07-25',
      img: 'news3.jpg',
      info: 'Noticia 3'
    }]
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getNewsFromId: state => id => {
      let notice = state.news.find(item => {
        return (item.id == id)
      });

      return notice;
    }
  }
}