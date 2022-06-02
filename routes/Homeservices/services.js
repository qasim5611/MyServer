const nodemailer = require("nodemailer");

const HomeServices = require("../../Models/adminDashboard/HomeServices.Model");


const jwt_secret_key = "123456789abcdefghijklmnopqrstuvwxyz";

const secret = "123456789abcdefghijklmnopqrstuvwxyz";
// const nodemailer = require("nodemailer");

var validator = require("validator");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

var jwt = require("jsonwebtoken");

const services = {
  // import sendEmail from "./../../services/EmailSender/sendmail";
  addService: async function (req, res) {
    try {
      let { title, btn, image, description } = req.body;
      // let image ;

      if (req.file) image = req.file.filename;

      // The data is valid and new we can register the user
      let newUser = new HomeServices({
        title,
        description,
        image,
        btn,
      });

      let result = await newUser.save();

      return res.send({
        msg: "Service Added Successfully",
        result,
      });
    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },

  getService: async function (req, res) {
    try {
      console.log(req.body);
      const user = await HomeServices.find();

      // return res.json(user);
      return res.send({
        msg: "Find Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteServiceByid: async function (req, res) {
    let find = await HomeServices.findById(req.body.id);

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

  updateService: async function (req, res) {
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

    let isupdate = await HomeServices.findOneAndUpdate({ _id: user_id }, data, {
      isNew: true,
    });

    if (isupdate) {
      return res.send({
        msg: "Service Updated Successfully",
        isupdate,
      });
    }

    return res.json("Successfuly Updated");
  },

  updateAboutUs: async function (req, res) {
    // console.log(req.body.idtoUpdate);
    let data = Object.assign({}, req.body);
    // let user_id = req.body.idtoUpdate;

    // if (data.isFeatured) {
    //   data.isFeatured == "on"
    //     ? (data.isFeatured = true)
    //     : (data.isFeatured = false);
    // }

    // let isupdate = await HomeServices.findOneAndUpdate({ _id: user_id }, data, {
    //   isNew: true,
    // });

    // if (isupdate) {
    //   return res.send({
    //     msg: "Service Updated Successfully",
    //     isupdate,
    //   });
    // }

    return res.json("Successfuly Updated");
  },

  getServicebyid: async function (req, res) {
    try {
      console.log("req", req.query.id);

      const user = await HomeServices.find().where("_id").equals(req.query.id);

      return res.send({
        msg: "Find Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getFeaturedItems: async function (req, res) {
    try {
      const featuredItems = await Magzine.find({ isFeatured: true }).sort({
        created_at: -1,
      });

      return res.json(featuredItems);
    } catch (error) {
      console.log(error);
    }
  },
  getOneArticle: async function (req, res) {
    try {
      let data = Object.assign({}, req.body);
      const article = await Magzine.find({ _id: data.id });

      return res.json(article);
    } catch (error) {
      console.log(error);
    }
  },
  getCategoryArticles: async function (req, res) {
    try {
      let data = Object.assign({}, req.body);
      let articles = null;
      if (data.category_id) {
        articles = await Magzine.find({ category_id: data.category_id });
      }
      if (data.sub_category) {
        articles = await Magzine.find({ sub_category: data.sub_category });
      }
      return res.json(articles);
    } catch (error) {
      console.log(error);
    }
  },

  //////////////////////////////////
};

module.exports = services;
