const nodemailer = require("nodemailer");

const HomeTokenomics = require("../../Models/adminDashboard/HomeTokenomics.Model");

const jwt_secret_key = "123456789abcdefghijklmnopqrstuvwxyz";

const secret = "123456789abcdefghijklmnopqrstuvwxyz";
// const nodemailer = require("nodemailer");

var validator = require("validator");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

var jwt = require("jsonwebtoken");

const services = {
  // import sendEmail from "./../../services/EmailSender/sendmail";
  addTokenomics: async function (req, res) {
    try {
      const getTocks = await HomeTokenomics.countDocuments();
      console.log("getTocks");
      console.log(getTocks);

      if (getTocks <= 5) {
        let { title, per, rdc } = req.body;
        // let image ;

        if (req.file) image = req.file.filename;

        // The data is valid and new we can register the user
        let newUser = new HomeTokenomics({
          title,
          per,
          rdc,
        });

        let result = await newUser.save();

        return res.send({
          msg: "Tokenomics Added Successfully",
          result,
        });
      }

      return res.send({
        msg: "Only 6 Tokenomics Allaowed",
      });
    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },

  getTokenomics: async function (req, res) {
    try {
      console.log(req.body);
      const user = await HomeTokenomics.find();

      // return res.json(user);
      return res.send({
        msg: "Find Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteTokenomicsByid: async function (req, res) {
    let find = await HomeTokenomics.findById(req.body.id);

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

  updateTokenomics: async function (req, res) {
    console.log(req.body.idtoUpdate);
    let data = Object.assign({}, req.body);
    let user_id = req.body.idtoUpdate;
    let image;
    if (req.file) {
      image = req.file.filename;
      data.image = image;
      s;
    }
    // if (data.isFeatured) {
    //   data.isFeatured == "on"
    //     ? (data.isFeatured = true)
    //     : (data.isFeatured = false);
    // }

    let isupdate = await HomeTokenomics.findOneAndUpdate(
      { _id: user_id },
      data,
      {
        isNew: true,
      }
    );

    if (isupdate) {
      return res.send({
        msg: "Tockenomics Updated Successfully",
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

    // let isupdate = await HomeTokenomics.findOneAndUpdate({ _id: user_id }, data, {
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

  gettockenomicsByid: async function (req, res) {
    try {
      console.log("req", req.query.id);

      const user = await HomeTokenomics.find()
        .where("_id")
        .equals(req.query.id);

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
