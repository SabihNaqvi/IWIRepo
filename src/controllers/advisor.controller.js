require("../CONFIG/db.config");
const sequelize = require("sequelize");
const advisorModel = require("../models/advisor.model");
const User = require('../models/signup.model')

exports.getAllAdvisorsList = async (req, res) => {
  try {
    const advisorsData = await advisorModel.findAll();
    res.status(200).send(advisorsData);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.postAllAdvisors = async (req, res) => {
  const {FirstName,MiddleInitial,LastName,Address1,Address2,Email,HomePhone,CellPhone,City,State,Country,NDA,Twitter,
Facebook,
  } = req.body;
  if (!FirstName ||!MiddleInitial ||!LastName ||!Email ||
!Address1 ||!Address2 ||!HomePhone ||!CellPhone ||!Country ||
!City ||!State) {
    res.status(409).json({ error: "Please Enter Your Credential Properly" });
    console.log(error);
  }
  try {
    const userExists = await User.findOne({ where: { Email } });
    const advisorExists = await advisorModel.findOne({ where: { Email } });
    if (!userExists) {
      return res.status(422).json({ error: "No User Exists Against this Email" });
    }
    else if(advisorExists){
      return res.status(400).json({ error: "User Already Registered as Advisor" });
    }
    else{
    const useradvisorModel = await advisorModel.create({ 
      FirstName,MiddleInitial,LastName,Address1,Address2,Email,HomePhone,
      CellPhone,City,State,Country,NDA,Twitter,Facebook,
    });

    await useradvisorModel.save();
    res.status(201).json({ message: "Advisor Registered Successfully" });
  }} catch (error) {
    res.status(404).send(error);
  }
};
