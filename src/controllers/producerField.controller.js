require('../CONFIG/db.config')
const producerFieldModel = require('../models/producerField.model')
exports.getAllproducerFieldList = async(req, res) => {
    try {
         await producerFieldModel.findAll();
        res.status(201).json({message:"Data saved successfully"})
    } catch (error) {
        res.status(404).send(error)
    }
}
exports.postAllproducerFieldList = async (req, res) => {
    const { FieldName,Size ,CultivatedArea,SoilTestResult,SubSurfaceTileDrained,SurfaceTileDrained,FarmingDirection,YearFarmed,ExistConePractice,EQIPorCPS} = req.body;
    if (!FieldName || !Size || !CultivatedArea|| !SoilTestResult || !SubSurfaceTileDrained || !SurfaceTileDrained  || !FarmingDirection|| !YearFarmed || !ExistConePractice || !EQIPorCPS){
        res.status(400).json({error:"Please Enter Your Credential Properly"});
    }
    try {
        
        const producerFieldData = producerFieldModel.create({FieldName,Size ,CultivatedArea,SoilTestResult,SubSurfaceTileDrained,SurfaceTileDrained,FarmingDirection,YearFarmed,ExistConePractice,EQIPorCPS});
        await producerFieldData.save()
        res.status(200).json({message:"producer RECORD Registered Successfully"})
    } catch (error) {
        res.send(error)
    }
    }