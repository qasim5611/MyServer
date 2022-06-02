const nodemailer = require("nodemailer");

const HomeTeam = require("../../Models/adminDashboard/HomeTeam.Model");


const jwt_secret_key = "123456789abcdefghijklmnopqrstuvwxyz";

const secret = "123456789abcdefghijklmnopqrstuvwxyz";
// const nodemailer = require("nodemailer");

var validator = require("validator");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

var jwt = require("jsonwebtoken");

const team = {
  // import sendEmail from "./../../services/EmailSender/sendmail";
  addMember: async function (req, res) {
    try {
      const getDocs = await HomeTeam.countDocuments();
      console.log("docs");
      console.log(getDocs);

      if (getDocs <= 5) {
        let { title, desg, image } = req.body;
        // let image ;

        if (req.file) image = req.file.filename;

        // The data is valid and new we can register the user
        let newUser = new HomeTeam({
          title,
          desg,
          image,
        });

        let result = await newUser.save();

        return res.send({
          msg: "Member Added Successfully",
          result,
        });
      }

      return res.send({
        msg: "Only 6 members Allaowed",
      });
    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },

  getMember: async function (req, res) {
    try {
      console.log(req.body);
      const user = await HomeTeam.find();

      // return res.json(user);
      return res.send({
        msg: "Find Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteMemberByid: async function (req, res) {
    let find = await HomeTeam.findById(req.body.id);

    if (find) {
      await find.delete();
      // res.json("Services Deleted");
      return res.send({
        msg: "Deleted Successfully",
        find,
      });
    } else {
      throw new Error("Member not Found");
    }
  },

  updateMember: async function (req, res) {
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

    let isupdate = await HomeTeam.findOneAndUpdate({ _id: user_id }, data, {
      isNew: true,
    });

    if (isupdate) {
      return res.send({
        msg: "Member Updated Successfully",
        isupdate,
      });
    }

    return res.json("Error On Updated");
  },



  getMemberByid: async function (req, res) {
    try {
      console.log("req", req.query.id);

      const user = await HomeTeam.find().where("_id").equals(req.query.id);

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

module.exports = team;
