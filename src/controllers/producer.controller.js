require("../CONFIG/db.config");
const sequelize = require("sequelize");
const producerModel = require("../models/producer.model");

exports.getAllProducerList = async (req, res) => {
  try {
    const producersData = await producerModel.findAll();
    res.status(200).send(producersData);
  } catch (error) {
    res.status(404).send(error);
  }
};


exports.postAllProducers = async (req, res) => {
  const {
    FirstName,MiddleInitial,LastName,Address1,Address2,Email,HomePhone,CellPhone,City,State,Country,NDA,Twitter,Facebook
  } = req.body;
  if (
    !FirstName ||
    !MiddleInitial ||
    !LastName ||
    !Address1 ||
    !Address2 ||
    !Email ||
    !HomePhone ||
    !CellPhone ||
    !City ||
    !State ||
    !Country
  ) {
    res.status(400).json({ error: "Please Enter Your Credential Properly" });
  }
  try {
    const userExists = await producerModel.findOne({ where: { Email } });
    if (userExists) {
      return res.status(422).json({ error: "Email Already Exists" });
    }
    const userproducerModel = producerModel.create({
      FirstName,
      MiddleInitial,
      LastName,
      Address1,
      Address2,
      Email,
      HomePhone,
      CellPhone,
      City,
      State,
      Country,
      NDA,
      Twitter,
      Facebook,
    });
    await userproducerModel.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.send(error);
  }
};

exports.findProducerById = async (req, res) => {
  const id = req.query.id;
  try {
    const findProducer = await producerModel.findOne({
      where: { id: id },
    });
    res.status(200).json(findProducer);
  } catch (error) {
    res.status(500).json({ message: "error in finding" });
  }
};