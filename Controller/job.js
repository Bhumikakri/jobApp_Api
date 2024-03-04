const jobModel = require("../models/job");


// save data in db Api logic-----------------
const createJob = async (req, res) => {
  // console.log(req.body);
  try {
    const newJob = new jobModel(req.body);
    const newjobCreated = await newJob.save();
    // console.log(newjobCreated._id);

    res.json({
      success: true,
      message: `job created successfully for this new id: ${newjobCreated._id} `,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Something went wrong`,
    });
  }
};

// show all data Api logic-------------------
const getJob = async (req, res) => {
  try {
    const allJobs = await jobModel.find();
    res.json({
      success: true,
      results: allJobs,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// updated Api logic------------------------
const updateJob = async (req, res) => {
  // console.log(req.body);
  try {
    await jobModel.updateOne({ _id: req.body._id }, { $set: req.body });
    // await jobModel.findByIdAndUpdate(req.body._id, req.body);
    res.json({
      success: true,
      message: `updated successfully `,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong in updation",
    });
  }
};

// delet Api logic--------------------------
const deleteJob = async (req, res) => {
  try {
    await jobModel.findByIdAndDelete(req.body._id);

    res.json({
      success: true,
      message: `deleted this ${req.body._id} id successfully`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong in delete",
    });
  }
};

module.exports = {
  createJob,
  getJob,
  updateJob,
  deleteJob,
};
