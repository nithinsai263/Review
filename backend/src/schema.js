//user
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

let userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    tokenVersion: String,
    gender: String,
    phonenumber: String,
    otherreviews: [
      {
        reviewid: String,
      },
    ],
    ownreviews: [
      {
        reviewid: String,
      },
    ],
  },
  { collection: "users" }
);

//reviews

let reviewSchema = new mongoose.Schema(
  {
    title: String,
    Description: String,
    Image: String,
    Tag: String,
    userid: String,
    reviews: [
      {
        userid: String,
        username: String,
        stars: String,
        review: String,
        photos: [String],
      },
    ],
  },
  { collection: "review" }
);

var Users = mongoose.model("users", userSchema);
var Reviews = mongoose.model("paths", reviewSchema);
module.exports = { Reviews, Users };

// {
//     "name":"ankit",
//     "email":"ankitkumarak901@gmail.com",
//     "password":"bleeblue",
//     "tokenVersion":"2",
//     "gender":"F",
//     "phonenumber":"96969953484",
//     "otherreviews":[{
//         "reviewid":"dfdsfjkndskjnkn"
//     }],
//     "ownreviews":[{
//         "reviewid":"fsdjfoaejfjiejfkjen",
//     }]
// }

// {

//     "title":"Tailor Shop",
//     "Description":"dfjskajfkdsfk",
//     "Image":"https://www.image.com",
//     "Tag":"Physical",
//     "userid":"89435hjrhjehfu3482r324",
//     "reviews":[
//         {
//             "userid":"fdksjfakjfkljdsa",
//             "username":"ankit",
//             "stars":"5",
//             "review":"dfjsdfnjknsdjnfjkndskjnfkjnds",
//             "photos":["https://image.com", "https://blue.com"]
//         }
//     ]
// }
