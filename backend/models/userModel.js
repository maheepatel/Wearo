import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false } // Disable the minimization of empty objects ( will create an empty object if no data is passed in the cartData field )
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;