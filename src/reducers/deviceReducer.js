export default function deviceReducer(state = {})
{
  let isMobile = state.isMobile === 'false' ? false : true;

  //En es6 cuando se quiere asignar un valor a un objeto o a una funcion, y estos se llaman igual bast acon poner solo el nombre y automaticamente lo setea con ese mismo nobmre y su respectivo valor. Es como hacer esto isMobile: isMobile
  return Object.assign({}, state, {isMobile});

}
