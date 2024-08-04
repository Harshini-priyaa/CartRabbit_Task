const Booking = require('../models/Booking');
const sendMail = require('../config/mailer');

const createBooking = async (req, res) => {
  const { user, service, date } = req.body;
  try {
    const booking = await Booking.create({ user, service, date });
    const userInfo = await booking.populate('user').execPopulate();
    sendMail(userInfo.user.email, 'Service Booking Confirmed', `Your booking for service is confirmed for ${date}`);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({}).populate('user').populate('service');
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const booking = await Booking.findByIdAndUpdate(id, { status }, { new: true }).populate('user');
    if (status === 'ready for delivery') {
      sendMail(booking.user.email, 'Service Ready for Delivery', 'Your bike is ready for delivery.');
    }
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createBooking, getBookings, updateBookingStatus };
