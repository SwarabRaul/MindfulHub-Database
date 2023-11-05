const mongoose = require("mongoose");

const TestSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    1: {
        type: Number,
        required: true,
        enum: [1,2,3,4,5]
    },
    2: {
        type: Number,
        required: true,
        enum: [1,2,3,4,5]
    },
    3: {
        type: Number,
        required: true,
        enum: [1,2,3,4,5]
    },
    4: {
        type: Number,
        required: true,
        enum: [1,2,3,4,5]
    },
    5: {
        type: Number,
        required: true,
        enum: [1,2,3,4,5]
    },
    6: {
        type: Number,
        required: true,
        enum: [1,2,3,4,5]
    },
    7: {
        type: Number,
        required: true,
        enum: [1,2,3,4,5]
    },
    8: {
        type: Number,
        required: true,
        enum: [1,2,3,4,5]
    },
    9: {
      type: Number,
      required: true,
      enum: [1,2,3,4,5]
    },
    10: {
      type: Number,
      required: true,
      enum: [1,2,3,4,5]
    },
},
{
    timestamps: true,
}
);

const Test = mongoose.model("report", TestSchema);
module.exports = Test;
