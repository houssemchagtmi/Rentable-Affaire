const Clients=require('../models/clientsSchema')
const Lawyer = require('../models/lawyersSchema');
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const Secretaries = require('../models/secretariesSchema');

const addNewClient = async (req, res) => {
  try {
    const { email, password, confirmePassword} = req.body;
    const Client = await Clients.findOne({ email });
    if (Client) {
      return res.status(400).json({ message: "Client already exists" });
    } else {
      const hashedpassword = await bcrypt.hash(password, saltRounds);
      const hashedconfirmepassword = await bcrypt.hash(confirmePassword, saltRounds);

      const newClient = new Clients({ ...req.body, password: hashedpassword, confirmePassword: hashedconfirmepassword });
      if(password.length>8 && password===confirmePassword){

      await newClient.save();
      await Lawyer.findByIdAndUpdate(req.body.id,{$push:{listOfClients:newClient}})
      await Secretaries.findByIdAndUpdate(req.body.idSec,{$push:{listOfClients:newClient}})
      return res.json({ message: "Client added successfully" });
    }   
    return res.status(400).json({ error: "error" });


    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const getClients = async (req, res) => {
  try {
    const allClients = await Clients.find();
    return res.json({ message: "Clients found successfully", allClients });
  } catch (error) {
    console.log(error);
    return res.json({ message: 'error' });
  }
};

const getClient = async (req, res) => {
  try {


    const Client = await Clients.findById(req.params.idCl).populate("listOfFiles");
    return res.json({ message: "Client found successfully", Client });
  } catch (error) {
    console.log(error);
    return res.json({ message: error })
  }
};

const deleteClient = async (req, res) => {
  try {
    await Clients.findByIdAndDelete(req.params.idCl);
    return res.json({ message: "Client deleted successfully" });
  } catch (error) {
    return res.json({ message: error });
  }
};

const updateClient = async (req, res) => {
  try {
    const updatedClient = await Clients.findByIdAndUpdate(
      req.params.idCl,
      { $set: { ...req.body } },
      { new: true }
    );
    return res.json({ message: "Client updated successfully", updatedClient });
  } catch (error) {
      console.log(error);
    return res.json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const Client = await Clients.findOne({ email });
    if (!Client) {
      return res.json({ message: "bad credentials" });
    } else {
      const match = await bcrypt.compare(password, Client.password);
      if (!match) {
        return res.json({ message: "bad credentials" });
      } else {
        var token =  await jwt.sign({ idCl: Client._id }, process.env.privateKey);
        return res.json({
          message: "Client loggedIn successfully",
          Client:Client,
          token,
        });
      }
    }
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports = {
  addNewClient,
  getClients,
  updateClient,
  deleteClient,
  getClient,
  login,
};
 