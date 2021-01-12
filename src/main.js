
import './main.css'
import '../libs/normalize.css'
import {router} from './router/index.routes.js';


window.addEventListener('hashchange', () =>{

router(window.location.hash);

} )

