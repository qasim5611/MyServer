const mongoose = require("mongoose");

const schema = mongoose.Schema;

const HomeTokenomics = new schema(
  {
    title: {
      type: String,
      trim: true,
      max: 64,
    },

    // image: {
    //   type: String,
    // },

    rdc: {
      type: String,
      trim: true,
      max: 64,
    },

    per: {
      type: String,
      trim: true,
      max: 64,
    },
    // shortdesc: {
    //   type: String,
    //   trim: true,
    //   max: 64,
    // },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("HomeTokenomics", HomeTokenomics);
