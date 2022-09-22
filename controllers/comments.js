// const cloudinary = require("../middleware/cloudinary");
const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
        
    //The req. body object allows you to access data in a string or JSON object from the client side
      await Comment.create({
        comment: req.body.comment,
        userName: req.user.userName,
        createdById: req.user.id,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },

  deleteComment: async (req, res) => {
    try {
      // Delete post from db
      await Comment.deleteOne({ _id: req.params.commentid });
      console.log("Deleted Comment!");
      res.redirect("/post/" + req.params.id);
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
