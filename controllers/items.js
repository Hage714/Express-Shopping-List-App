//here we write the business logic

const Item = require("../models/items");

const getItems = async (req, res) => {
  const items = await Item.find({});
  res.send({ count: items.length, items: items }).status(200);
};

const createItem = async (req, res) => {
  const data = req.body;
  const newItem = await Item.create(data); //creating a new item

  if (!newItem) {
    res.send({ error: "Item creation failed" });
  }
  res.send(newItem).status(201);
};

const getItemById = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findById({ _id: id });

    if (!item) {
      res.send({ error: "No item with id: &{id} found!!" }).status(404);
    }
    res.send(item).sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error" });
  }
};

const updateItem = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const item = await Item.findByIdAndUpdate(id, { ...data }, { new: true });

    if (!item) {
      res.send({ error: "Item with id: &{id} does not exist!!" }).status(404);
    }
    res.send(item).status(201);
  } catch (error) {
    console.log(error);
    res.send({ error: "Internal server error" }).status(500);
  }
};

const deleteItem = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedItem = await Item.findByIdAndDelete({"_id": id})
    if (!deletedItem) {
      res.send({ "error": "Item with id: &{id} does not exist!!" }).status(404);
  }
  res.send({ "success": `Item: &{id} deleted successfully`}).status(204)
}catch (error) {
  console.log(error);
  res.send({ "error": "Internal server error" }).status(500);
}
};

const patchItem = async(req, res) => {
const id = req.params.id;

const pathchData = req.body;
try {
  const patchedItem = await Item.findByIdAndUpdate(id, pathchData, {new: true});
  if (!patchedItem) {
    res.send({ "error": "Item with id: &{id} does not exist!!" }).status(404);
  }
  res.send(patchedItem).status(200);
} catch (error) {
  console.log(error);
  res.send({ "error": "Internal server error" }).status(500);
}
}

module.exports = {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
  patchItem
};
