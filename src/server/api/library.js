//Dpenedencias
import express from 'express';


// Data
import books from '../../data/books.json';

// Router
const Router = express.Router();



//RUTAS
Router.get('/books', (req, res, next) => {
  res.json(books);
});

Router.get('/book', (req, res, next) => {
  const {
    query: {
      id = 0
    }
  } = req;

  const selectedBook = books.response.filter(book => book.id === Number(id));

  res.json({
    response: selectedBook
  });

});

export default Router;
