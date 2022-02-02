const db = require("../model/stormDB");

const getAll = (req, res) => {
  const divisions = db.get("divisions").value();
  res.send(divisions);
};

const create = (req, res) => {
  const division = req.body;
  db.get("divisions").push(division).save();
  res.status(201).send({
    success: "create ok",
  });
};

const getById = (req, res) => {
  const { id } = req.params;
  const divisions = db.get("divisions").value();
  const division = divisions.filter((division) => division.id == id);
  res.send(division);
};

const deleteById = (req, res) => {
  const { id } = req.params;
  db.get("divisions")
    .filter((division) => division.id != id)
    .save();

  res.status(200).send({
    success: "delete ok",
  });
};

const updateById = (req, res) => {
  const { id } = req.params;
  const division = req.body;
  const divisions = db.get("divisions").value();
  const indexBook = divisions.findIndex((division) => division.id == id);
  db.get("divisions").get(indexBook).set(division).save();

  res.status(200).send({
    success: "update ok",
  });
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
