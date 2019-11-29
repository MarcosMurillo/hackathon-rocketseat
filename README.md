const database = {
  users: [
    { id: Number, fullName: String, email: String, password: String, avatar: String }
  ],

	usersExperience: [
		{ id: Number, userId: Number, technologyId: Number, experience: Number }
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
    { 
			id: Number, 
			authorId: Number, 
			postId: Number, 
			fatherCommentId: Number, 
			comment: String, 
			repoUrl: String, 
			createdAt: Timestamp, 
			updatedAt: Timestamp 
		}
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
			createdAt: Timestamp,
			updatedAt: Timestamp,
			expires: Timestamp,
      ratingAverage: Number,
      ratings: [
        { id: Number, authorId: Number, comment: String, stars: Number }
      ] 
    }
  ],

  tecnologies: [
    { id: Number, title: String, image: String }
  ]
}