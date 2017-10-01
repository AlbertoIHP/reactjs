//Recibe el user agent que es un string que contiene toda la informacion del browser
export function isMobile(ua){
  return /mobile/i.test(ua);
}
