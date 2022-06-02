const nodemailer = require("nodemailer");

const HomeBlogs = require("../../Models/adminDashboard/HomeBlogs.Model");


const jwt_secret_key = "123456789abcdefghijklmnopqrstuvwxyz";

const secret = "123456789abcdefghijklmnopqrstuvwxyz";
// const nodemailer = require("nodemailer");

var validator = require("validator");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

var jwt = require("jsonwebtoken");

const blogs = {
  // import sendEmail from "./../../services/EmailSender/sendmail";
  addBlog: async function (req, res) {
    try {
      let { title, auther, date, image, description } = req.body;
      // let image ;

      if (req.file) image = req.file.filename;

      // The data is valid and new we can register the user
      let newUser = new HomeBlogs({
        title,
        auther,
        date,
        description,
        image,
      });

      let result = await newUser.save();

      return res.send({
        msg: "Blog Added Successfully",
        result,
      });
    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },

  getBlog: async function (req, res) {
    try {
      console.log(req.body);
      const user = await HomeBlogs.find();

      // return res.json(user);
      return res.send({
        msg: "Find Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteBlogByid: async function (req, res) {
    let find = await HomeBlogs.findById(req.body.id);

    if (find) {
      await find.delete();
      // res.json("Services Deleted");
      return res.send({
        msg: "Deleted Successfully",
        find,
      });
    } else {
      throw new Error("Service not Found");
    }
  },

  updateBlog: async function (req, res) {
    console.log(req.body.idtoUpdate);
    let data = Object.assign({}, req.body);
    let user_id = req.body.idtoUpdate;
    let image;
    if (req.file) {
      image = req.file.filename;
      data.image = image;
    }
    // if (data.isFeatured) {
    //   data.isFeatured == "on"
    //     ? (data.isFeatured = true)
    //     : (data.isFeatured = false);
    // }

    let isupdate = await HomeBlogs.findOneAndUpdate({ _id: user_id }, data, {
      isNew: true,
    });

    if (isupdate) {
      return res.send({
        msg: "Blog Updated Successfully",
        isupdate,
      });
    }

    return res.json("Successfuly Updated");
  },


  getBlogByid: async function (req, res) {
    try {
      console.log("req", req.query.id);

      const user = await HomeBlogs.find().where("_id").equals(req.query.id);

      return res.send({
        msg: "Find Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },



  //////////////////////////////////
};

module.exports = blogs;
