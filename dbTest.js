const db = require('./models')

// db.categoriesProjects.create({
//   categoryId: 1,
//   projectId: 1
// }).then(function(categoriesProjects) {
//   console.log(categoriesProjects.id)
// })

// Delete a categoriesProjects
// db.categoriesProjects.destroy({
//     where: { categoryId: 1 }
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted)
// })

// db.project.findOne({
//     where: { id: 1 },
//     include: [db.category]
//   }).then(function(project) {
//     // by using eager loading, the project model should have a categories key
//     console.log(project.categories)
//   })
  
//     // createCategory function should be available to this model - it will create the category then add it to the project
//     project.createCategory({ name: 'node' }).then(function(category) {
//       console.log(category.id)
//     })
//   })
