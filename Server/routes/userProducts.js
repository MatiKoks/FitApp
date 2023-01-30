const express = require('express');
const UserProduct = require('../models/userProductSchema.js');

const router = express.Router();

router.post('/:id', (req, res) => {
    const UserProductToInsert = req.body.userProductToInsert;
    const { userId } = req.body;
   


    const newUserProduct = new UserProduct({userId: userId, ...UserProductToInsert}); 
    try {
    newUserProduct.save();
    res.status(200).send({message:'Dodano produkt: ' + req.body.userProductToInsert.productName, code: 200});
    } catch {
        return res.status(400).send({message: "Wystąpił błąd", code: 400});
    }
    
  });

  router.post('/:id/daily', async (req, res) => {
    console.log(req.body.userId)
    const allUserProducts = await UserProduct.find({userId: req.body.userId});
    //console.log(req.body)
    return res.send(allUserProducts);
});

router.post('/', async (req, res) => {
    console.log("Delete ",req.body)
        const allUserProducts = await UserProduct.findByIdAndDelete({_id: req.body.userProductId});
        res.status(200).send({message:'Usunięto produkt: ' + req.body.userProductId, code: 200});
        
});
  

  module.exports = router;