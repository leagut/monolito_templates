import  express  from "express";
import usuarioRoutes from './routes/usuarioRoutes.js'

//crear la app
const app = express()

//habilita pug
app.set('view engine', 'pug')
app.set('views', './views')

//carpeta publica
app.use(express.static('public'))

// Routing 
app.use('/auth',usuarioRoutes)

const port = 3000;
app.listen(port,()=>{
    console.log(`funcionando en ${port}`);
});

