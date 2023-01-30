const express = require('express');
const UserSchema = require('../models/userSchema.js');

const router = express.Router();

router.get('/:id', async (req, res) => {
    const user = await UserSchema.findById(req.params.id);
    console.log('get uzytkownik');
    console.log(user);
    res.json(user);
});

router.put('/:id/change-password', (req, res) => {
  const { id, oldPassword, newPassword } = req.body;
  UserSchema.findById(id, (e, doc) => {
    if (e) 
      return res.send('Wystąpił błąd');
    if(doc.password == oldPassword) {
      doc.password = newPassword;
      doc.save();
      res.send('Pomyślnie zmieniono');
    } else {
      return res.status(400).send({ message: 'Nieprawidłowe hasło', code: 400 });
    } 
  });
});
  
module.exports = router;