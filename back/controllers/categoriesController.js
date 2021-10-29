const { Category } = require("../db/models");

const categoriesController = {
    
  findCategories(req, res) {
    Category.find()
      .then(categories => res.send(categories))
      .catch(err => {
        res.status(500).send(err)
      })
  },
  createCategories(req, res) {
    Category.create(
      {
        name: req.body.name,
        image: req.body.image,
      }
    )
      .then(category => {
        res.status(201).send(category)
      })
      .catch(err => res.status(404).send(err))
  },

  deleteCategories(req,res) {
        Category.deleteOne({_id: req.params.id})
        .then(()=>res.status(200).send("categoria eliminada"))
        .catch(err => res.status(500).send(err))
      }
  }
  
  module.exports = categoriesController;
