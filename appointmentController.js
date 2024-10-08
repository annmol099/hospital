exports.createAppointment = (req, res) => {
    const appointment = new Appointment(req.body);
    appointment.save((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.render('thankyou');
      }
    });
  };
  
  