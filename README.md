const database = {
  users: [
    { id: Number, fullName: String, email: String, password: String, avatar: String }
  ],

  partners: [
    { id: Number, name: String, site: String, avatar: String }
  ],

  posts: [
    { 
      id: Number, 
      categoryId: Number, 
      authorId: Number,
      title: String,
      description: String,
      relatedTechnologies: [Number]
    }
  ],

  comments: [
    { id: Number, authorId: Number, postId: Number, fatherCommentId: Number, comment: String, repoUrl: String, createdAt: Timestamp, updatedAt: Timestamp }
  ],

  feedCategories: [
    { id: Number, name: String }
  ],

  courses: [
    { 
      id: Number,
      partnerId: Number,
      title: String, 
      description: String,
      relatedTechnologies: [Number],
      ratingAverage: Number,
      ratings: [
        { id: Number, authorId: Number, comment: String, starts: Number }
      ] 
    }
  ],

  tecnologies: [
    { id: Number, title: String, image: String }
  ]
}