const mongoose = require("mongoose");

const schema = mongoose.Schema;

const HomeRoadmap = new schema(
  {
    title: {
      type: String,
      trim: true,
      max: 64,
    },
    maplists: {
      type: Array,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("HomeRoadmap", HomeRoadmap);
