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

  if (
    !field ||
    !productionYear ||
    !plantedCrop ||
    !tillage1 ||
    !tillage2 ||
    !coverCrop ||
    !phosphorousFert ||
    !nitrogenFert ||
    !structuralPractice ||
    !reasonsForPractice
  ) {
    res.status(400).json({ message: "All fields are required" });
  }

  manageZone = new ManageZone({
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
  });

  await manageZone.save();
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
