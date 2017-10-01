//Dpenedencias
import express from 'express';


// Data
import posts from '../../data/posts.json';
import post from '../../data/post.json';


// Router
const Router = express.Router();



//RUTAS
Router.get('/posts', (req, res, next) => {
  res.json(posts);
});

Router.get('/post', (req, res, next) => {
  res.json(post);
});

export default Router;
