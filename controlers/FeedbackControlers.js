const FeedBack=require('../models/feedbackSchema');
const Lawyers = require('../models/lawyersSchema')

//add newFeedBack

const addNewFeedBack = async (req, res) => {
      try {
        const newFeedBack = new FeedBack(req.body);
        await newFeedBack.save();
    
        await instractor.findByIdAndUpdate(req.body.authorId, {
          $push: { listOfFeedBack: newFeedBack },
        });
        return res.status(200).json({ message: "FeedBack added successfully", newFeedBack });
      } catch (error) {
        return res.status(400).json({ message: "error" });
      }
    };

    
// updateFeedBack

const updateFeedBack = async (req, res) => {
  try {
    const updateFeedBack = await FeedBack.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    return res.status(200).json({ message: "FeedBack updated successfully", updateFeedBack });
  } catch (error) {
    return res.status(400).json({ message: "error" });
  }
};

// getFeedBack

const getFeedBack = async (req, res) => {
  try {
    const getFeedBack = await FeedBack.findById(
      req.params.id,
    );
    return res.status(200).json({ message: "getFeedBack  successfully", getFeedBack });
  } catch (error) {
    return res.status(400).json({ message: "error" });
  }
};

// deleteFeedBack

const deleteFeedBack = async (req, res) => {
  try {
    await FeedBack.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "FeedBack deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: "error" });
  }
};

module.exports={addNewFeedBack,updateFeedBack,deleteFeedBack ,getFeedBack}