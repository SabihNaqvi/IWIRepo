const ManageZone = require("../models/manageZone.model");
//const sequelize = require("sequelize");

exports.postManageZone = async (req, res) => {
  const {Fieldpicker,productionYear,plantedCrop,Tillage1,Tillage2,Season,Grasses,PhosphorousFert,NitrogenFert,StructuralReason,CoverCrop,StructuralPractice
  } = req.body;
  if (!Fieldpicker ||!productionYear || !plantedCrop || !Tillage1 || !Tillage2 || !Season || !Grasses || !PhosphorousFert || !NitrogenFert || !StructuralReason) {
    res.status(422).json({ message: "All fields are required" });
  }

  const manageZone = await ManageZone.create({Fieldpicker,productionYear,plantedCrop,Tillage1,Tillage2,Season,Grasses,PhosphorousFert,NitrogenFert,StructuralReason,CoverCrop,StructuralPractice});

  await manageZone.save();
  res.status(200).json({ message: "manageZone data saved" });
};

exports.manageZoneFindAll = async (req, res) => {
  try {
    const ManagezoneData = await ManageZone.findAll();
    res.status(200).send(ManagezoneData)
  } catch (error) {
    res.status(400).send(error)
  }
};

exports.manageZoneFindByYear = async (req, res) => {
  try {
  const productionYear = req.query.productionYear;
console.log(productionYear,"deeeeeeeee")
    const newManageZone = await ManageZone.findAll({
      where: { productionYear: productionYear }
    });

    res.status(200).json(newManageZone);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "error in finding" });
  }
};













// exports.manageZoneFindByYear = async (req, res) => {
//   const productionYear = req.query.year;
//   console.log(productionYear, "hello");
//   try {
//     const findByYear = await ManageZone.findAll({
//       where: { productionYear: productionYear },
//     });

//     res.status(200).json(findByYear);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "error in finding" });
//   }
// };