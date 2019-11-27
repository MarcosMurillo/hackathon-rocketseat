const database = {
  users: [
    { id: 0, fullName: 'Felipe Chierice', email: 'fschierice', password: 'senha123', avatar: 'https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png' },
    { id: 1, fullName: 'Marcos Murillo', email: 'murillo.psoft@gmail.com', password: 'senha123', avatar: 'http://texasapartmentbrokers.com/wp-content/uploads/2016/01/John-Doe.png' },
    { id: 2, fullName: 'Alex Marques', email: 'falecomlex@gmail.com', password: 'senha123', avatar: 'https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png' },
    { id: 3, fullName: 'Robson Dourado', email: 'r.dourado007@gmail.com', password: 'senha123', avatar: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png' }
  ],

  partner: [
    { id: 0, name: 'Rocketseat', site: 'https://www.rocketseat.com.br', avatar: 'https://yt3.ggpht.com/a/AGF-l7_gRI0RdRC_VNg535o0C21ltP0eTFhi4rjRmw=s288-c-k-c0xffffffff-no-rj-mo' }
  ],

  posts: [
    { 
      id: 0, 
      categoryId: 0, 
      authorId: 0, 
      title: "Como fazer tal coisa?", 
      description: "Estou tendo problemas para fazer tal tal tal, como resolver?",
      relatedTechnologies: [0, 2, 4] 
    }
  ],

  comments: [
    { id: 0, authorId: 1, feedId: 0, fatherCommentId: null, comment: "Faz tal tal tal. De nada.", createdAt: 1574815233, updatedAt: null }
  ],

  postCategories: [
    { id: 0, name: 'Pergunta' },
    { id: 1, name: 'Projeto' },
    { id: 2, name: 'Experiência' },
    { id: 3, name: 'Desafio' }
  ],

  courses: [
    { 
      id: 0,
      partnerId: 0,
      title: "Curso de EcmaScript 6", 
      description: "Você vai aprender a utilizar as novas features do JavaScript na versão ES 2015.",
      relatedTechnologies: [3],
      ratingAverage: 4.5,
      ratings: [
        { id: 0, authorId: 2, comment: "Top dms recomendo haha.", starts: 4.5 }
      ] 
    }
  ],

  tecnologies: [
    { id: 0, title: 'Node.js', image: '' },
    { id: 1, title: 'ReactJS', image: '' },
    { id: 2, title: 'React Native', image: '' },
    { id: 3, title: 'JavaScript', image: '' },
    { id: 4, title: 'Postgres', image: '' },
    { id: 5, title: 'MongoDB', image: '' }
  ]
}