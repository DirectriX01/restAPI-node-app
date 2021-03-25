const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');


const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'images');
    },
    filename: (req, file, cb) =>{
     cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
}});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
    console.log('here 1');
  }
  else {
      cb(null, false);
  }
};
app.use(express.json()); // application/json
app.use(multer({storage:fileStorage, fileFilter:fileFilter}).single('image'));
app.use('/images',express.static(path.join(__dirname,'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
})

mongoose
  .connect(
    "mongodb+srv://mongo:mongo@cluster0.sx44x.mongodb.net/messages?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));

