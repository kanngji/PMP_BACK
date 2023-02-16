const List = require("../models/listModel");
const mongoose = require("mongoose");

// get all lists
const getLists = async (req, res) => {
  const lists = await List.find({}).sort({ createAt: -1 });
  res.status(200).json(lists);
};

// get a single list
const getList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.stats(404).json({ error: "No such list" });
  }

  const list = await List.findById(id);
  if (!list) {
    return res.status(404).json({ error: "No such list" });
  }

  res.status(200).json(list);
};

// create new list
const createList = async (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);
  // add doc to db
  try {
    const list = await List.create({ title, content });

    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a list
const deleteList = async (req, res) => {
  const { id } = req.params;

  const list = await List.findOneAndDelete({ _id: id });
  if (!list) {
    return res.status(404).json({ error: "no such list" });
  }
  res.status(200).json({ messge: "success delete" });
};

// update a list
const updateList = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const list = await List.findOneAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      content: req.body.content,
    }
  );

  if (!list) {
    return res.status(404).josn({ error: "no such list" });
  }
  res.status(200).json({ msg: "success update" });
};

module.exports = {
  createList,
  getLists,
  getList,
  deleteList,
  updateList,
};
