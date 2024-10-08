const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  time: String,
  department: String,
  doctor: String,
  symptoms: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
