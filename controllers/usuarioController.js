const formularioLogin = (req,res)=> {
    res.render('auth/login',{
        pagina:'iniciar sesion'
    })
}
const formularioRegistro = (req,res)=> {
    res.render('auth/registro',{
        pagina:'crear cuenta'
    })
}
export{
    formularioLogin , formularioRegistro
}