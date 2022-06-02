

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const HomeDocs = new schema(
  {
    title: {
      type: String,
      default: "admin0011",
    },
    btn: {
      type: String,
      required: true,
    },
    btnlink: {
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

module.exports = mongoose.model("HomeDocs", HomeDocs);