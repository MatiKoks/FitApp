const express = require('express');
const UserSchema = require('../models/userSchema.js');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { password, login } = req.body;
    console.log(req.body);
    try {
      const user = await UserSchema.findOne({ login });
      if (!user) {
        return res.status(400).send({ message: 'Login lub hasło nieprawidłowe!', code: 400 });
      }
      if (password !== user.password) {
        console.log('invalid');
        return res.status(400).send({ message: 'Login lub hasło nieprawidłowe!', code: 400 });
      }
      return res.status(200).send({ id: user._id.toString() });
    } catch {
      res.status(400).send({ message: 'Wystapił błąd aplikacji', code: 400 });
    }
  });
  
  router.post('/registration', async (req, res) => {
    const userToCreate = req.body.formData;
    console.log(userToCreate);
   
    
      console.log('Weszlo')
      console.log(req.body)
      
      const newUser = new UserSchema({ ...userToCreate, image: req.body.image});
    
    
  
    try {
      await newUser.save();
    } catch {
      return res.status(400).send({message:'Wystąpił błąd przy rejestracji!', code: 400});
    }
    return res.status(200).send({message:'Zarejestrowano', code: 200});
  });

module.exports = router;