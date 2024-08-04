const Service = require('../models/Service');

const createService = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const service = await Service.create({ name, description, price });
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const service = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
    res.json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    await Service.findByIdAndDelete(id);
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createService, getServices, updateService, deleteService };
