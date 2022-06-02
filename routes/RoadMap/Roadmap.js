const nodemailer = require("nodemailer");

const HomeRoadmap = require("../../Models/adminDashboard/HomeRoadmap.Model");


const jwt_secret_key = "123456789abcdefghijklmnopqrstuvwxyz";

const secret = "123456789abcdefghijklmnopqrstuvwxyz";
// const nodemailer = require("nodemailer");

var validator = require("validator");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

var jwt = require("jsonwebtoken");

const Roadmap = {
  // import sendEmail from "./../../services/EmailSender/sendmail";
  addRoadmap: async function (req, res) {
    try {
      let { title, maplist, image } = req.body;
      // let image ;
      console.log(maplist.split(","), "-->1");
      let maplists = maplist.split(",", "-->");

      console.log("maplists", maplists);
      if (req.file) image = req.file.filename;

      // The data is valid and new we can register the user
      let newUser = new HomeRoadmap({
        title,
        maplists: maplist.split(","),
        image,
      });

      let result = await newUser.save();

      return res.send({
        msg: "RoadMap Added Successfully",
        result,
      });
    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },

  getRoadmap: async function (req, res) {
    try {
      console.log(req.body);
      const user = await HomeRoadmap.find();

      // return res.json(user);
      return res.send({
        msg: "Find Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteRoadmapByid: async function (req, res) {
    let find = await HomeRoadmap.findById(req.body.id);

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

  updateRoadmap: async function (req, res) {
        let { title, maplist, image } = req.body;
         let user_id = req.body.idtoUpdate;
        // let image ;
        console.log(maplist.split(","), "-->1");
        let maplists = maplist.split(",", "-->");

        console.log("maplists");
        console.log(maplists);

        // if (req.file) image = req.file.filename;

          

        // The data is valid and new we can register the user
        let data = {
          title,
          maplists: maplist.split(","),
        };

         if (req.file) {
           image = req.file.filename;
           data.image = image;
         }
        
    let isupdate = await HomeRoadmap.findOneAndUpdate({ _id: user_id }, data, {
      isNew: true,
    });

    if (isupdate) {
      return res.send({
        msg: "Roadmap Updated Successfully",
        isupdate,
      });
    }

    return res.json("Successfuly Updated");
  },



  getRoadmapByid: async function (req, res) {
    try {
      console.log("req", req.query.id);

      const user = await HomeRoadmap.find().where("_id").equals(req.query.id);

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

module.exports = Roadmap;
