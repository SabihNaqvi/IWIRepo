const forgetModel = require("../models/signup.model");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

exports.reset_password = (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    const Email = req.body.Email;
    forgetModel.findOne({ where: { Email } }).then(async (user) => {
      if (!user) {
        return res
          .status(422)
          .json({ message: "User does not exits with this email" });
      }

      var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "testusapp12@gmail.com",
          pass: "Test@123",
        },
      });

      let otp = Math.random();
      otp = otp * 100000;
      otp = parseInt(otp);
      const Email = req.body.Email;
      user.otp = otp;
      user.expireToken = Date.now() + 360000;

      user.save().then((result) => {
        smtpTransport.sendMail({
          to: Email,
          from: "noreply@insta.com",
          subject: "Password reset",

          /*html: `
            <p>you requested for the Password reset</p>
            <h3>clik the <a href = "http://localhost:8080/reset/${token}" >link</a> to reset the Password</h3>
            `,*/

          html: `<h3>Your otp to reset the Password is : ${otp}</h3>`,
        });
        res.json({ message: "check your email" });
      });
    });
  });
};

exports.verifyOtp = async (req, res) => {
  try {
    const { otp, Email, Password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(Password, salt);
    const user = await forgetModel.findOne({ where: { Email } });
    console.log(user, "userr");
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    if (user.otp === otp) {
      const item = await forgetModel.update(
        { Password: hashedPassword, Retype_Password: hashedPassword },
        { where: { Email } }
      );
      return res.status(200).json({ item });
    } else {
      res.status(401).send({ message: "otp does not match" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
