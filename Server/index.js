const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth.js');
const userRouter = require('./routes/user.js');
const productRouter = require('./routes/product.js');
const userProductRouter = require('./routes/userProducts.js');

mongoose.set('strictQuery', true);


const UserSchema = require('./models/userSchema.js');
const ProductSchema = require('./models/productSchema.js');
//const User = mongoose.model('User', UserSchema);


const SERVER_PORT = process.env.PORT || 4000;
dotenv.config({ path: path.join(path.resolve(), './.env') });


app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

mongoose.connect(process.env.DATABASE_URL)
    .then (() => {
        console.log("Mongo connection open!");
        mongoose.connection.db.listCollections().toArray(function (err, names) {
            console.log(names); 
        });
    })
    .catch(err => {
        console.log("Oh no mongo connection error!!!");
        console.log(err);
    })

    app.use('/user-products', userProductRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);



app.listen(SERVER_PORT, '0.0.0.0', () => console.log(`APP IS LISTENING ON PORT ${SERVER_PORT}!`));