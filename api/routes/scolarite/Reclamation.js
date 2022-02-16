const express = require("express");
const router = express.Router();
const Reclamation_controler = require("../../controllers/scolarite/Reclamation");
///// This Function used To Store Files locally in a Folder
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const uploadResult = upload.single("piece_jointe");
///////////////////////// add the reclamation method
router.post("/addReclamation",uploadResult,Reclamation_controler.addReclamation);
///////////////////////// Update the reclamation method
router.put("/updateReclamation/:id", Reclamation_controler.updateReclamation);
///////////////////////// delete  the reclamation method
router.delete("/deleteReclamation/:id",Reclamation_controler.deleteReclamation);
///////////////////////// Download File Method
router.get("/download/:name", Reclamation_controler.download);
///////////////////////// delete function  the reclamation method
router.get("/get/:id", Reclamation_controler.deleteReclamation);
///////////////////////// get by Id user the reclamation method
router.get("/get/:id", Reclamation_controler.getReclamationByIdUser);
///////////////////////// get Reclamation By Id the reclamation method
router.get("/getById/:id", Reclamation_controler.getReclamationById);
///////////////////////// add update relacmation for refuse  reclamation method
router.put("/updateReclamationRefuser/:id",Reclamation_controler.updateReclamation2);
///////////////////////// resend reclamation the reclamation method
router.post("/relancerReclamtion/:id",Reclamation_controler.relancerReclamation);
///////////////////////// get reclamation acceted  the reclamation method
router.get("/getAccpeter", Reclamation_controler.getbyStatutAccepter);
///////////////////////// get reclamation in queu the reclamation method
router.get("/getEnAttente", Reclamation_controler.getbyStatutEnAttente);
///////////////////////// get reclamation refused the reclamation method
router.get("/getRefuser", Reclamation_controler.getbyStatutRefuser);
////////////////////// get type reclamations
router.get("/getAllReclamTypes", Reclamation_controler.getAllReclamTypes);
////////////////////// get All Classes
router.get("/getAllClass", Reclamation_controler.getAllClass);
////////// Get class of user by id
router.get("/getClassByIdEtudiant/:id",Reclamation_controler.getClassByIdEtudiant);
///////////////////////// get all speciality the reclamation method
router.get("/getAllSpecialite", Reclamation_controler.getAllSpecialite);
///////////////////////// get number of reclamation
router.get("/getNumberReclamation", Reclamation_controler.getNumberReclamation);
///////////////////////// get number accepted of reclamation the reclamation method
router.get("/getNumberReclamationA",Reclamation_controler.getNumberReclamationA);
///////////////////////// get number of in queu reclamation the reclamation method
router.get("/getNumberReclamationE",Reclamation_controler.getNumberReclamationE);
///////////////////////// get number refused reclamation the reclamation method
router.get("/getNumberReclamationR",Reclamation_controler.getNumberReclamationR);
/////////////////////// get dates of reclamation
router.get("/getDates", Reclamation_controler.getDates);
/////////////////////// get number of reclamations By Month
router.get("/getRecNbByMonth", Reclamation_controler.getRecNbByMonth);
/////////////////////// get All Reclamations
router.get("/getAllReclamtion", Reclamation_controler.getAllReclamation);
/////////////////////// get All Reclamations By ID
router.get("/getAllReclamationById/:id",Reclamation_controler.getAllReclamationById);
///////////  now we going to export all those methode
module.exports = router;
