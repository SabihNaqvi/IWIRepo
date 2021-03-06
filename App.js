const express = require("express");
const path = require("path");
require("./src/CONFIG/db.config");
require("./src/routes/router");
const bodyParser = require("body-parser");
const cors = require("cors");
const {getAllSignups,postAllSignups} = require("./src/controllers/signup.controller");
const {getAllAdvisorsList,postAllAdvisors} = require("./src/controllers/advisor.controller");
const {getAllProducerList,postAllProducers, findProducerById} = require("./src/controllers/producer.controller");
const {postAllLoginsList,getAllLoginsList} = require("./src/controllers/login");
const {getAllfieldrecordmgmtzoneList,postAllfieldrecordmgmtzone} = require("./src/controllers/fieldrecordmgmtzone.controller");
const {reset_password,verifyOtp} = require("./src/controllers/forget.controller");
// const {resetNewPassword} = require("./src/controllers/resetpassword.controller");
const {postAllproducerFieldList,getAllproducerFieldList} = require("./src/controllers/producerField.controller");
const {manageZoneFindAll,manageZoneFindByYear, postManageZone} = require("./src/controllers/manageZone.controller");
const app = express();



app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;
const host = "0.0.0.0";

app.get("/signup", getAllSignups);
app.post("/signupss", postAllSignups);
app.get("/advisorr", getAllAdvisorsList);
app.post("/advisors", postAllAdvisors);
app.get("/producerr", getAllProducerList);
app.post("/producers", postAllProducers);
app.get("/producerById",findProducerById)
app.get("/loginn", getAllLoginsList);
app.post("/logins", postAllLoginsList);
app.get("/fieldrecordmgmtzoness", getAllfieldrecordmgmtzoneList);
app.post("/fieldrecordmgmtzones", postAllfieldrecordmgmtzone);
app.post("/forget-passwords", reset_password);
app.post("/newpassword", verifyOtp);
app.get("/producerfieldss", getAllproducerFieldList);
app.post("/producerfields", postAllproducerFieldList);
app.post("/manageZone", postManageZone);
app.get("/manageZoneFindAll", manageZoneFindAll);
app.get("/manageZonefindByYear", manageZoneFindByYear);

app.use(express.static(path.join(__dirname, "/Frontend/build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"))
);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}, ${host}`);
});
