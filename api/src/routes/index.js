const Router = require("express");
const axios = require("axios").default;
require("dotenv").config();
const { Dog } = require("../db");
const { Temp } = require("../db");

const router = Router();

router.get("/breeds", async (_req, res) => {
  const DBdogs = await Dog.findAll();
  const APIdogs = await axios
    .get("https://api.thedogapi.com/v1/breeds")
    .catch((error) => {
      return res.status(500).send(error);
    });
  const dogs = await DBdogs.concat(APIdogs.data);
  res.send(dogs);
});

router.post("/breed", async (req, res) => {
  const dog = req.body; 
  if (dog.name === "") return res.status(505).send("Debe tener un nombre");
  await Dog.create(dog).catch((error) => {
    return res.status(500).send(error);
  });
  res.send(dog);
});

router.get("/temps", async (_req, res) => {
  var check = await Temp.findAll();
  if (check.length === 0) {
    var tempAPI = await axios
      .get(`https://api.thedogapi.com/v1/breeds`)
      .catch((error) => {
        return res.status(500).send(error);
      });
    var tempList = await tempAPI.data
      .map((n) => n.temperament)
      .join()
      .split(", ")
      .join()
      .split(",");
    const list = new Set(tempList);
    for (let item of list) {
      await Temp.create({ name: item });
    }
  }
  var temp = await Temp.findAll();
  res.json(temp);
});

router.get("/search", async (req, res) => {
  const name = req.query.name;
  const search = await axios
    .get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
    .catch((error) => {
      return res.status(500).send(error);
    });
  res.send(search.data);
});

router.get("/dogs/:id", async (req, res) => {
  const id = req.params.id;
  const DBdogs = await Dog.findAll();
  const search = await axios
    .get(`https://api.thedogapi.com/v1/breeds`)
    .catch((error) => {
      return res.status(500).send(error);
    });
  if(id.includes('db')){
    let ID = id.split('db');
    return res.send(DBdogs.find(e => e.id === Number(ID[0])).dataValues);
  } else {const dog = await search.data.find((dog) => dog.id == id);
    
    if(dog == null || dog == undefined) {
      return  res.send(404);
     }
    return res.send(dog) 
  }
  
});

module.exports = router;
