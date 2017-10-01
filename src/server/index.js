import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

//Configuracion del puerto y de handlebars
import config from '../config';

// Helpers
import * as hbsHelper from '../lib/handlebars';

//Utils
import { isMobile } from '../lib/utils/device';


// //WebPack configuration
// import webpackConfig from '../../webpack.config.dev'; ESTE ES PARA DESARROLLO !!
import webpackConfig from '../../webpack.config.babel';

//Api
import blogApi from './api/blog';
import libraryApi from './api/library';

//VEMOS EL AMBIENTE
const isDevelopment = process.env.NODE_ENV !== 'production';

//Instancia express
const app = express();


//Declaramos la carpeta publica
app.use(express.static(path.join(__dirname, '../public')));


//Handlebars setup
app.engine(config.views.engine, exphbs({
	extname: config.views.extension,
	helpers: hbsHelper
}));

//View engine setup

app.set('views', path.join(__dirname, config.views.path));
app.set('view engine', 'hbs')



//Compilador webpack
const webpackCompiler = webpack(webpackConfig);


//Hot sirve para desarrollo ya que actualiza la compilacion si hay cambios en lso archivos
if(isDevelopment){
	//Webpack Middleware
	app.use(webpackDevMiddleware(webpackCompiler));
	app.use(webpackHotMiddleware(webpackCompiler));
}

// Deteccion del dispositivo
app.use((req, res, next) => {
	res.locals.isMobile = isMobile(req.headers['user-agent']);

	return next();
});





// Api dispatch
app.use('/api/blog', blogApi);
app.use('/api/library', libraryApi);



//Creamos la ruta a react
app.get('*', (req,res) =>{
	// ASI SE LEE UN ARCHIVO POR LO QUE NO SE PUEDE MANDAR VARIABLES res.sendFile(path.join(__dirname, '../public/index.html'));
	res.render('frontend/index', {
		layout: false
	})
});


//Escuchar puerto
app.listen(config.serverPort, err => {
	if(!err){
	open(`${config.baseUrl}`);
	}
});
