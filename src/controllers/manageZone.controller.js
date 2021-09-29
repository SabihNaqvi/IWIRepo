const manageZone = require("../models/manageZone.model");
const ManageZone = require("../models/manageZone.model");
//const sequelize = require("sequelize");

exports.manageZone = async (req, res) => {
  const {Fieldpicker,productionYear,plantedCrop,Tillage1,Tillage2,Season,Grasses,PhosphorousFert,NitrogenFert,StructuralReason,CoverCrop,StructuralPractice
  } = req.body;
  //console.log("helooo");

  if (!Fieldpicker ||!productionYear || !plantedCrop || !Tillage1 || !Tillage2 || !Season || !Grasses || !PhosphorousFert || !NitrogenFert || !StructuralReason) {
    res.status(400).json({ message: "All fields are required" });
  }

  manageZone = new ManageZone({Fieldpicker,productionYear,plantedCrop,Tillage1,Tillage2,Season,Grasses,PhosphorousFert,NitrogenFert,StructuralReason,CoverCrop,StructuralPractice});

  await newManageZone.save();
  res.status(400).json({ message: "manageZone data saved" });
};

exports.manageZoneFindAll = async (req, res) => {
  try {
    const ManagezoneData = await ManageZone.findAll();
    res.status(200).send(ManagezoneData)
  } catch (error) {
    res.status(404).send(error)
  }
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
