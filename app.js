const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const Fruit = mongoose.model('Fruit', { 
    name: {
        type: String,
        required: [true, 'Please insert the fruits name.']
    }, 
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const fruit = new Fruit({ 
    name: "carambola",
    rating: 8,
    review: "Pretty solid as a fruit."
});

//fruit.save().then(() => console.log(fruit.name + " has been saved"));

//ler vários documentos simultaneamente



// Fruit.updateOne({_id: "5f3d435c47fb5852a47bd499"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Succesfully updated the document.");
//     }
// });

// Fruit.deleteOne({name: "carambola"}, function(err){
//     if(err){
//         console.log("Can't delete the document.");
//     } else {
//         console.log("Document succesfully deleted.")
//     }
// });

// Fruit.deleteMany({name:"Avocado"}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully deleted all the Watermelons.");
//     }
// });

// Fruit.find(function(err, fruits){
//     if(err){
//         console.log(err);
//     }else {
        
//         mongoose.connection.close(); //fechar a sessão do mongo

//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         });
        
//     }
// });





const Person = mongoose.model('Person', {
    name: String,
    age: Number,
    favouriteFruit: Fruit.schema
});

const amora = new Fruit({
    name: "Amora",
    score: 4,
    review: "Great fruit."
});

amora.save();

Person.updateOne({name: "Adelaide"}, {favouriteFruit: amora}, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Succesfully updated the document.");
    }
});

// const person = new Person({
//     name: 'Anna',
//     age: 27,
//     favouriteFruit: pineaple
// });

// person.save().then(() => console.log('A new person has been added to the database'));