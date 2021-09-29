const manageZone = require("../models/manageZone.model");
const ManageZone = require("../models/manageZone.model");
//const sequelize = require("sequelize");

exports.manageZone = async (req, res) => {
  const {
    field,
    plantedCrop,
    productionYear,
    tillage1,
    tillage2,
    coverCrop,
    phosphorousFert,
    nitrogenFert,
    structuralPractice,
    reasonsForPractice,
  } = req.body;
  //console.log("helooo");

  if (
    !field ||
    !productionYear ||
    !plantedCrop ||
    !tillage1 ||
    !tillage2 ||
    //!coverCrop ||
    !phosphorousFert ||
    !nitrogenFert ||
    !structuralPractice ||
    !reasonsForPractice
  ) {
    res.status(400).json({ message: "All fields are required" });
  }

  let yield = parseInt(Math.random() * 100);

  let newManageZone = new ManageZone({
    field,
    productionYear,
    plantedCrop,
    tillage1,
    tillage2,
    coverCrop,
    phosphorousFert,
    nitrogenFert,
    structuralPractice,
    reasonsForPractice,
    yield,
  });

  await newManageZone.save();
  res.status(400).json({ message: "manageZone data saved" });
};

exports.manageZoneFindAll = (req, res) => {
  ManageZone.findAll()
    .then((manageZone) => {
      res.send(manageZone);
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};

exports.manageZoneFindByYear = async (req, res) => {
  const productionYear = req.query.year;

  try {
    let manageZone = await ManageZone.findAll({
      where: { productionYear: productionYear },
    });

    res.status(200).json(manageZone);
  } catch (error) {
    res.status(500).json({ message: "error in finding" });
  }
};
