const Secretarys = require("../models/secretariesSchema");
const Lawyers= require("../models/lawyersSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

const addNewSecretary = async (req, res) => {
  try {
    const { email, password, confirmePassword } = req.body;
    const Secretary = await Secretarys.findOne({ email });
    if (Secretary) {
      return res.status(400).json({ message: "Secretary already exists" });
    } else {
      const hashedpassword = await bcrypt.hash(password,saltRounds);
      const hashedconfirmepassword = await bcrypt.hash(confirmePassword, saltRounds);

      const newSecretary = new Secretarys({ ...req.body, password:hashedpassword  , confirmePassword: hashedconfirmepassword});
      if(password.length>8 && password===confirmePassword){

      await newSecretary.save();
      await Lawyers.findByIdAndUpdate(req.body.id,{$push:{listOfSecretaries:newSecretary}})
      return res.json({ message: "Secretary added successfully" });}    
        return res.status(400).json({ error: "error" });

    }
  } catch (error) {
    return res.status(400).json({ message: "server secretary error" });
  }
};

const getSecretaries = async (req, res) => {
  try {
    const allSecretarys = await Secretarys.find();
    return res.json({ message: "Secretarys found successfully", allSecretarys });
  } catch (error) {
    console.log(error);
    return res.json({ message: 'error' });
  }
};

const getSecretary = async (req, res) => {
  try {
    const Secretary = await Secretarys.findById(req.params.idSec).populate("listOfClients").populate("listOfFiles");
    return res.json({ message: "Secretary found successfully", Secretary });
  } catch (error) {
    console.log(error);
    return res.json({ message: error })
  }
};

const deleteSecretary = async (req, res) => {
  try {
    await Secretarys.findByIdAndDelete(req.params.idSec);
    return res.json({ message: "Secretary deleted successfully" });
  } catch (error) {
    return res.json({ message: error });
  }
};

const updateSecretary = async (req, res) => {
  try {
    const updatedSecretary = await Secretarys.findByIdAndUpdate(
      req.params.idSec,
      { $set: { ...req.body } },
      { new: true }
    );
    return res.json({ message: "Secretary updated successfully", updatedSecretary });
  } catch (error) {
    return res.json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const Secretary = await Secretarys.findOne({ email });
    if (!Secretary) {
      return res.json({ message: "bad credentials" });
    } else {
      const match = await bcrypt.compare(password, Secretary.password);
      if (!match) {
        return res.json({ message: "bad credentials" });
      } else {
        var token =  await jwt.sign({ idSec: Secretary._id }, process.env.privateKey);
        return res.json({
          message: "Secretary loggedIn successfully",
          Secretary:Secretary,
          token,
        });
      }
    }
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports = {
  addNewSecretary,
  getSecretaries,
  updateSecretary,
  deleteSecretary,
  getSecretary,
  login,
};
 