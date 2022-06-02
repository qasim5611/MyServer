

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const HomeDocsHead = new schema(
  {
    title: {
      type: String,
      default: "admin0011",
    },
    description: {
      type: String,
      required: true,
    },
 
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("HomeDocsHead", HomeDocsHead);