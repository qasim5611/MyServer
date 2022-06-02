

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const AboutUs = new schema(
  {
    descone: {
      type: String,
      trim: true,
      max: 64,
    },

    desctwo: {
      type: String,
      trim: true,
      max: 64,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("AboutUs", AboutUs);