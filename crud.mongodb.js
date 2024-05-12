use('CrudDb')



db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harry Web dev",
//     price: 0,
//     work: 12,
//     projects: 5,
// })

// db.courses.insertMany(
//     [
//         {
//             "name": "Harry Web dev",
//             "price": 0,
//             "work": 12,
//             "projects": 5
//         },
//         {
//             "name": "Harry Web dev",
//             "price": 0,
//             "work": 12,
//             "projects": 5
//         },
//         {
//             "name": "Harry Web dev",
//             "price": 0,
//             "work": 12,
//             "projects": 5
//         },
//         {
//             "name": "Harry Web dev",
//             "price": 0,
//             "work": 12,
//             "projects": 5
//         },
//         {
//             "name": "Harry Web dev",
//             "price": 0,
//             "work": 12,
//             "projects": 5
//         }
//     ]
    
    
// )


// let a = db.courses.find({price: 0})
// console.log(a.toArray())


// let b = db.courses.findOne({price: 0})
// console.log(b)

// Update

// db.courses.updateMany({price: 0}, {$set:{price: 100}})


// Delete

db.courses.deleteMany({price: 100})
db.courses.deleteOne({price: 0})