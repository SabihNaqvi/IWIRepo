const bcrypt = require("bcryptjs");
require("../CONFIG/db.config");
const Signup = require("../models/signup.model");
const jwt = require("jsonwebtoken");
exports.postAllSignups = async (req, res) => {
  const { Name, Email, Password, Retype_Password, Signups } = req.body;
  if (!Name || !Email || !Password || !Retype_Password || !Signups) {
    res.status(422).json({ error: "Please Enter Your Credential Properly" });
  }
  if (Password.length < 7)
    res.status(402).json({ msg: "The password needs to be at least 8 characters long." });

  if (Password !== Retype_Password)
    res.status(400).json({ err: "Password Don't Match !" });
  try {
    const userExists = await Signup.findOne({ where: { Email } });
    if (userExists) {
      return res.status(401).json({ error: "Email Already Exists" });
    }
    const userSignup = await Signup.create({
      Name,
      Email,
      Password,
      Retype_Password,
      Signups,
    });
    const salt = await bcrypt.genSalt(10);
    userSignup.Password = await bcrypt.hash(Password, salt);
    userSignup.Retype_Password = await bcrypt.hash(Retype_Password, salt);
    await userSignup.save();
    const payload = { user: { id: userSignup.id } };
    jwt.sign(payload, "randomString", (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    });
  } catch (error) {
    res.send(error);
  }
};

exports.getAllSignups = async (req, res) => {
  try {
    const signupData = await Signup.findAll();
  } catch (error) {
    res.status(400).send(error);
  }
};
