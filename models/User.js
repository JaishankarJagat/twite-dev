import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  // unique identifier created by MongoDB :)
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  credits: {
    type: Number,
    default: 10,
  },
});
export default mongoose.models.User || mongoose.model("User", userSchema);
