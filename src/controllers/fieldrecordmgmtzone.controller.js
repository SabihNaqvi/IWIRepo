require('../CONFIG/db.config')
const fieldrecordmgmtzoneModel = require('../models/fileRecordMgmtZone.model')

exports.getAllfieldrecordmgmtzoneList = async(req, res) => {
    try {
        const fieldrecordmgmtdata = await fieldrecordmgmtzoneModel.findAll();
        res.status(200).send(fieldrecordmgmtdata)
    } catch (error) {
        res.status(404).send(error)
    }
}

exports.postAllfieldrecordmgmtzone = async (req, res) => {
    const { Yield,Crop ,PrimaryTillage,SecondaryTillage,secondyrRotation,thirdyrRotation,CCSeason, CCtype,CoverCrop } = req.body;
    if (!Yield || !Crop || !PrimaryTillage|| !SecondaryTillage ||!secondyrRotation || !thirdyrRotation  ||  !CCSeason|| !CCtype || CoverCrop ){
    res.status(400).json({error:"Please Enter Your Credential Properly"});
    }
    
    try {
        const fieldrecordmgmtzone = fieldrecordmgmtzoneModel.create({Yield,Crop,PrimaryTillage,secondyrRotation,thirdyrRotation,SecondaryTillage,CCSeason, CCtype,CoverCrop});
        await fieldrecordmgmtzone.save()
        res.status(200).json({message:"fieldrecordmgmtzone Registered Successfully"})
    } catch (error) {
        res.send(error)
    }
    }

    