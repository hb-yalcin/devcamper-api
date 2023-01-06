// Build-in modules
const express = require('express');

// Custom modules
const {
  getAllBootcamps,
  getBootcampById,
  getAllBootcampsInRadius,
  createBootcamp,
  updateBootcamp,
  uploadBootcampPhoto,
  deleteBootcamp,
} = require('../controllers/bootcamps-controller');

const router = express.Router();

router.get('/api/v1/bootcamps', getAllBootcamps);
router.get('/api/v1/bootcamps/:id', getBootcampById);
router.get('/api/v1/bootcamps/radius/:zipcode/:distance', getAllBootcampsInRadius);
router.post('/api/v1/bootcamps', createBootcamp);
router.put('/api/v1/bootcamps/:id', updateBootcamp);
router.put('/api/v1/bootcamps/:id/photo', uploadBootcampPhoto);
router.delete('/api/v1/bootcamps/:id', deleteBootcamp);

module.exports = router;
