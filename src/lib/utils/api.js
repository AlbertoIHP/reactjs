//Esto es una dependencia que permite transformar objetos a URL
import queryString from 'query-string';

//Configuracion
import config from '../../config';


//Funcion encargada de hacer el fetch
export function apiFetch(endpoint, options = {}, query = false ){
	let qs;

	if(query){
		qs = queryString.stringify(query);
	}

	const getPromise = async() => {
		try{
			const fetchOptions = apiOptions(options);
			const fetchEndPoint = apiEndpoint(endpoint, qs);
			const response = await fetch(fetchEndPoint, fetchOptions);

			return response.json();

		}catch(e){
			throw e;
		}
	};

	return getPromise();

}

export function apiEndpoint(endpoint, queryString){
	let query = '';

	if(queryString){
		query = `?${queryString}`;
	}


	return `${config.api.url}${endpoint}${query}`;
}


export function apiOptions(options = {}){
	//Con esta sintaxis lo que decimos es que si viene un objeto sin nada no alterara los valroes por defectos (los primeros)
	//Si este viene con mas opciones seran reemplazadas solo aquellas que esten definidas
	const {
		method = 'GET',
		headers = {
			'Content-Type': 'application/json'
		},
		body = false
	} = options;

	const newOptions = {
		method,
		headers,
		credentials: 'include'
	};

	if (body) {
		newOptions.body = body;
	}

	return newOptions;
}
