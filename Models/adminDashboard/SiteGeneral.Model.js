const mongoose = require("mongoose");

const schema = mongoose.Schema;

const SiteGeneral = new schema(
  {
    id: {
      type: String,
    },
    keyname: {
      type: String,
      default: "admin0011",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    copyright: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("SiteGeneral", SiteGeneral);
