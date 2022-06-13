const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");
// 'use strict';
const multer = require("multer");

// app.use(cors());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./../uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};



const uploadall = multer({ storage: storage, fileFilter: filefilter });

module.exports = { uploadall };
