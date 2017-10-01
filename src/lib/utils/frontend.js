import { isDefined } from './is';

//Funcion para crear nuevos estados immutables
export function getNewState(state, newState){
  return Object.assign({}, state, newState);
}


// Este util lo que hace es verificar si es que hay items o si estan definidos y si no lo estan entonces retorna false para no renderizar la pagina hasta que todos los elementos esten cargados o los elementos l oesten
export function isFirstRender(items){
  return items && items.length === 0 || !isDefined(items);
}
