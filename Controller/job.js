const jobModel = require("../models/job");

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
      message: "Something went wrong",
    });
  }
};

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

const updateJob = async (req, res) => {
  console.log(req.body);
  await jobModel.updateOne(
    { _id: req.body._id },
    { $set: req.body }
  );
  // await jobModel.findByIdAndUpdate(req.body._id, req.body);
  res.json({
    success: true,
    message: "this is updated api",
  });
};

const deleteJob = async (req, res) =>{
  try {
    await jobModel.findByIdAndDelete(req.body._id);
   

    res.json({
      success: true,
      message: "This is dlt Api",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
  
}

module.exports = {
  createJob,
  getJob,
  updateJob,
  deleteJob
};
