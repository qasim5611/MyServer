const mongoose = require("mongoose");

const schema = mongoose.Schema;

const HomeTeam = new schema(
  {
    title: {
      type: String,
      trim: true,
      max: 64,
    },
    desg: {
      type: String,
      trim: true,
      max: 64,
    },

    image: {
      type: String,
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

module.exports = mongoose.model("HomeTeam", HomeTeam);
