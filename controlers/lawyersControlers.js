const Lawyers = require("../models/lawyersSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

const addNewLawyer = async (req, res) => {
  try {
    const { email, password, confirmePassword } = req.body;
    const Lawyer = await Lawyers.findOne({ email });
    if (Lawyer) {
      return res.status(400).json({ message: "Lawyer already exists" });
    } else {
      const hashedpassword = await bcrypt.hash(password, saltRounds);
      const hashedconfirmepassword = await bcrypt.hash(confirmePassword, saltRounds);

      const newLawyer = new Lawyers({ ...req.body, password: hashedpassword ,confirmePassword: hashedconfirmepassword});
      if(password.length>8 && password===confirmePassword){
       
        await newLawyer.save();
      return res.status(200).json({ message: "Lawyer added successfully"});
      }
      return res.status(400).json({ error: "error" });
      
    }
  } catch (error) {
    return res.status(400).json({ message: "server Lawyer error" });
  }
};

const getLawyers = async (req, res) => {
  try {
    const allLawyers = await Lawyers.find()
    return res.json({ message: "Lawyers found successfully", allLawyers });
  } catch (error) {
    return res.json({ message: 'error' });
  }
};

const getLawyer = async (req, res) => {
  try {
    const Lawyer = await Lawyers.findById(req.params.id).populate("listOfSecretaries").populate("listOfClients").populate("listOfFiles")
    return res.status(200).json({ message: "Lawyer found successfully", Lawyer });
  } catch (error) {
    return res.status(400).json({ message: error })
  }
};

const deleteLawyer = async (req, res) => {
  try {
    await Lawyers.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Lawyer deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const updateLawyer = async (req, res) => {
  try {
    const updatedLawyer = await Lawyers.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    return res.status(200).json({ message: "Lawyer updated successfully", updatedLawyer });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const Lawyer = await Lawyers.findOne({ email });
    console.log(Lawyer)
    if (!Lawyer) {
      return res.status(400).json({ error: "bad credentials" });
    } else {
      const match = await bcrypt.compare(password, Lawyer.password);
      if (!match) {
        return res.status(400).json({ error: "bad credentials" });
      } else {
        var token =   jwt.sign({ id: Lawyer._id }, process.env.privateKey);
        return res.status(200).json({
          message: "Lawyer loggedIn successfully",
          Lawyer:Lawyer,
          token,
        });
      }
    }
  } catch (error) {
    return res.status(400).json({ error: 'error' });
  }
};

module.exports = {
  addNewLawyer,
  getLawyers,
  updateLawyer,
  deleteLawyer,
  getLawyer,
  login,
};
 