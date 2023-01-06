// Build-in modules

// Custom modules
const asyncHandler = require('../middlewares/async-handler');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getAllBootcamps = asyncHandler(async (req, res, next) => {
  console.log('Get all bootcamps');
  res.send('Get all bootcamps');
});

// @desc    Get bootcamp by id
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcampById = asyncHandler(async (req, res, next) => {
  console.log('Get bootcamp by id');
  res.send('Get bootcamp by id');
});

// @desc    Get bootcamps within a radius
// @route   GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access  Public
exports.getAllBootcampsInRadius = asyncHandler(async (req, res, next) => {
  console.log('Get bootcamps within a radius');
  res.send('Get bootcamps within a radius');
});

// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  console.log('Create bootcamp');
  res.send('Create bootcamp');
});

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  console.log('Update bootcamp');
  res.send('Update bootcamp');
});

// @desc    Upload photo for bootcamp
// @route   PUT /api/v1/bootcamps/:id/photo
// @access  Private
exports.uploadBootcampPhoto = asyncHandler(async (req, res, next) => {
  console.log('Upload photo for bootcamp');
  res.send('Upload photo for bootcamp');
});

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  console.log('Delete bootcamp');
  res.send('Delete bootcamp');
});
