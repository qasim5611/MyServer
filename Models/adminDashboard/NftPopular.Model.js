// const mongoose = require("mongoose");

// const schema = mongoose.Schema;

// const NftPopular = new schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     files: [Object],
//   },
  // {
  //   timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  // }
// );

// module.exports = mongoose.model("NftPopular", NftPopular);




const mongoose = require("mongoose");

const schema = mongoose.Schema;

const NftPopular = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    files: [Object],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("NftPopular", NftPopular);