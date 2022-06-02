const mongoose = require("mongoose");

const schema = mongoose.Schema;

const SiteSocials = new schema(
  {
    id: {
      type: String,
    },
    keyname: {
      type: String,
      default: "admin2233",
    },
    twitter: {
      type: String,
      required: true,
    },
    fcb: {
      type: String,
      required: true,
    },
    insta: {
      type: String,
      required: true,
    },
    linkdin: {
      type: String,
      required: true,
    },
    snapchat: {
      type: String,
      required: true,
    },

    discord: {
      type: String,
      required: true,
    },
    reddit: {
      type: String,
      required: true,
    },
    pintrest: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("SiteSocials", SiteSocials);
