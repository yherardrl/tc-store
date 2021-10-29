const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

const validateEmail = function (email) {
  const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,

  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },
  googleId: {
    type: String,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "productOrder",
    },
  ],
  accessLevel: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model("user", userSchema);
module.exports = User;
