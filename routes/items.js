const express = require("express");

const { getItems, createItem, getItemById, updateItem, deleteItem, patchItem } = require("../controllers/items");

const router = express.Router();

router.get("/", getItems);
router.post("/", createItem);
router.get("/:id", getItemById);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.patch("/:id", patchItem);

module.exports = router;
