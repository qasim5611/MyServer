const mongoose = require("mongoose");

const schema = mongoose.Schema;

const HomeBanner = new schema(
  {
    id: {
      type: String,
    },
    // adminid: {
    //   type: schema.Types.ObjectId,
    //   ref: "user",
    // },
    tag: {
      type: String,
      required: true,
      trim: true,
      max: 64,
    },
    news: {
      type: String,
      required: true,
      trim: true,
      max: 64,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("HomeBanner", HomeBanner);
