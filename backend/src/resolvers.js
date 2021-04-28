const { Users, Reviews } = require("./schema");

const resolvers = {
  Query: {
    hello: () => "Hello World!",
    findallusers: async () => {
      return await Users.find();
    },
    finduser: async (_, { userid }) => {
      return await Users.findById(userid);
    },
    findallreviewcards: async () => {
      return await Reviews.find();
    },
    findreviewcard: async (_, { reviewid }) => {
      return await Reviews.findById(reviewid);
    },
  },
  Mutation: {
    createUser: async (_, { name, email, gender, phonenumber, password }) => {
      const User = new Users({
        name: name,
        email: email,
        gender: gender,
        phonenumber: phonenumber,
        password: password,
        otherreviews: [],
        ownreviews: [],
      });
      try {
        await User.save();
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },
    createreviewcard: async (_, { title, description, image, tag, userid }) => {
      const Review = new Reviews({
        title: title,
        Description: description,
        Image: image,
        Tag: tag,
        userid: userid,
        reviews: [],
      });
      let id = null;
      let obj = null;
      try {
        obj = await Review.save();
        id = obj._id;
      } catch (err) {
        console.log(err);
        return false;
      }
      try {
        let temp = {
          reviewid: id,
        };
        await Users.findByIdAndUpdate(userid, { $push: { ownreviews: temp } });
      } catch (err) {
        console.log(err);
        return false;
      }

      return true;
    },
    addreview: async (
      _,
      { userid, username, review, stars, photo, reviewid }
    ) => {
      let temp = {
        userid: userid,
        username: username,
        stars: stars,
        review: review,
        photos: photo,
      };
      try {
        let temp2 = {
          reviewid: reviewid,
        };
        await Reviews.findByIdAndUpdate(reviewid, { $push: { reviews: temp } });
        await Users.findByIdAndUpdate(userid, {
          $push: { otherreviews: temp2 },
        });
      } catch (err) {
        console.log(err);
        return false;
      }

      return true;
    },
  },
};

module.exports = { resolvers };
