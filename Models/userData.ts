import mongoose from "mongoose";

const schema = new mongoose.Schema({
  ip: { required: true, type: String },
  name: { required: true, type: String },
  text: { required: true, type: String },
  allow: { required: false, type: Boolean, default: false },
});

export default mongoose.model("userData", schema, "userData");
