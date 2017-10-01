//ESTE ES EL CONTENEDOR EN SI (O COMPONENTE SEGUN REACT PERO COMO ES CON REDUX ESTE RECIBE STATE Y MANEJA ACTIONS)

//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux'; // ESTO CONECTA AL STATE DE REDUX
import PropTypes from 'prop-types'; // ESTO ES PARA PASAR PROPS ENTRE COMPONENETES !
import { Link } from 'react-router-dom'; // ESTO ES PARA RUTEAR

// INCLUIMOS LOS ACTIONS PARA ESTE CONTENEDOR
import * as actions from './actions';

// Utilidades como por ejemplo el de renderizar la pagina solamente cuando este todo cargado
import { isFirstRender } from '../../lib/utils/frontend';

class Library extends Component {
  static propTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array,
    book: PropTypes.array
  };

  constructor(props){
    super(props);
    this.state = {
      displaySingleBook: false
    };
  }

  // Antes de terminar el montado en el ciclo de vida se hacen algunas configs
  componentWillMount(){
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = this.props;

    this.setState({
      displaySingleBook: id > 0  // Si se cumple la condicion propuesta entonces se asigna true si no false
    });

    // Identificamos si la peticion viene con un libro especifico y cargar solo ese, en caso de que no sea asi entonces los cargamos todos
    if(id > 0) {
      this.setState({})
      this.props.loadSingleBook({ id }); // Esto sigue la misma logica que abajo !
    }else{
      this.props.loadBooks();  // ESTO MANDA A LLAMAR A LOADBOOS QUE ES UNA FUNCION --> QUE EN LAS ACCIONES SE ESPECIFICA QUE EJECUTA GET ALLBOOKS DESDE LAS ACCIONES (EN EL ARCHIVO ACTIONS.JS DE ESTE MISMO DIRECTORIO) --> ESTA A SU VEZ EJECUTA EL APIFETCH QUE ESTA EN LA ESPECIFICACION DE LA API (EN EL ARCHIVO API.JS DE ESTE MISMO DIRECTORIO) --> ESTO EJECUTARA EL PROMISE Y ESTO EL REQUEST
    }
 }


 //Cuando algo cambie se ejecuta este metodo
  componentWillReceiveProps(nextProps){
    const{
      match: {
        params: {
          id = 0
        }
      }
    } = nextProps;

    if(nextProps.match.params !== this.props.match.params){
      this.setState({
        displaySingleBook: id > 0  // Si se cumple la condicion propuesta entonces se asigna true si no false
      });

      if(id > 0){
        this.props.loadSingleBook({ id });
      }
    }
  }

  renderSingleBook(book){
    return (
        <div>
          <h1> {book.title} </h1>
          <p>Author: {book.author}</p>
          <p><img src={book.image} style={{maxWidth: '300px'}} /></p>
          <p><Link to="/library">Go Back</Link></p>
        </div>

      );
  }

  renderBooksList(books){
    return (
      <div>
        <h1> Libreria </h1>

        <ul>
          {
            books.map((book, key) => {
              return(
                  <li key={key}>
                    <Link to={`/library/${book.id}`}>{book.title}</Link> - {book.author}
                  </li>
                );
            })
          }
        </ul>
      </div>
      );
  }

  render(){
    const {
      books,
      book
    } = this.props;

    if(isFirstRender(books) && isFirstRender(book)){
      return null;
    }


    let show = this.renderBooksList(books);

    if(this.state.displaySingleBook && book.length > 0){
      show = this.renderSingleBook(book[0]);
    }


    return(

        <div className="Library">
          {show}
        </div>
      );
  }
}

// Esto nos permite conectar el componente con todos los initialStates conocido como MapPropsState, primero se pasa esto y luego las acciones, y luego el contenedor en si (En este caso esta misma Library)
export default connect(state => ({
  books: state.library.books,
  book: state.library.book
}), actions)(Library);
