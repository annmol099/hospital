const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Appointment = require('/Appointment'); // Assuming Appointment model is defined in ./models/Appointment.js



// Connect to MongoDB
mongoose.connect('mongodb://localhost/appointmentDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Appointment model
const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: Date,
  time: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);


// Welcome page
router.get('/appointment/welcome', (req, res) => {
  res.render('/welcome.ejs');
});

// Appointment form
router.get('/form', (req, res) => {
  res.render('appointment-form');
});

// Create appointment
router.post('/create', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    const savedAppointment = await appointment.save();
    res.render('thankyou');
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: 'Error creating appointment', error: err });
  }
});

module.exports = router;