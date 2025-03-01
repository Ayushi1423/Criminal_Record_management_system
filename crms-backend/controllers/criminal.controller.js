const Criminal = require('../models/criminal.model');

exports.addCriminal = async (req, res) => {
  try {
    const { name, crimeType, age } = req.body;
    const criminal = await Criminal.create({ name, crimeType, age });
    res.status(201).json(criminal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCriminals = async (req, res) => {
  const criminals = await Criminal.findAll();
  res.json(criminals);
};

exports.getCriminal = async (req, res) => {
  const criminal = await Criminal.findByPk(req.params.id);
  res.json(criminal);
};

exports.updateCriminal = async (req, res) => {
  await Criminal.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Updated Successfully" });
};

exports.deleteCriminal = async (req, res) => {
  await Criminal.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted Successfully" });
};
