const database = {
  users: [
    { id: 0, fullName: 'Felipe Chierice', email: 'fschierice', password: 'senha123', avatar: 'https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png' },
    { id: 1, fullName: 'Marcos Murillo', email: 'murillo.psoft@gmail.com', password: 'senha123', avatar: 'http://texasapartmentbrokers.com/wp-content/uploads/2016/01/John-Doe.png' },
    { id: 2, fullName: 'Alex Marques', email: 'falecomlex@gmail.com', password: 'senha123', avatar: 'https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png' },
    { id: 3, fullName: '' }
  ],

  partner: [
    { id: Number, name: String, site: String, avatar: String }
  ],

  feed: [
    { 
      id: Number, 
      categoryId: Number, 
      authorId: Number,
      title: String,
      description: String
    }
  ],

  comments: [
    { id: Number, authorId: Number, feedId: Number, fatherCommentId: Number, comment: String, createdAt: Timestamp }
  ],

  feedCategories: [
    { id: Number, name: String }
  ],

  courses: [
    { 
      id: Number,
      authorId: Number,
      title: String, 
      description: String, 
      ratings: [
        { id: Number, authorId: Number, comment: String, starts: Number }
      ] 
    }
  ],

  tecnologies: [
    { id: Number, title: String, image: String }
  ]
}