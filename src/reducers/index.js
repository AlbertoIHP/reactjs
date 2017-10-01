// Dependencias
import { combineReducers } from 'redux';

// Reducers exclusivos de cada aplicacion o contenedor
import library from '../containers/Library/reducer';



// Shared Reducers
import device from './deviceReducer';

// SE hace una constante para combinar los reducers
const rootReducer = combineReducers({
  device,
  library
});


//Se exporta para quien lo necesite
export default rootReducer;
