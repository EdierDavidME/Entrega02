const info = require('./cursos');
const datos={
    curso:{
        demand:true,
        alias: 'c'
    },
    nombre:{
        demand:true,
        alias: 'n'
    },
    documento:{
        demand: true,
        alias: 'd'
    }
}
let argv = require('yargs')
    .command('inscribir','Llena los siguientes datos',datos)
    .argv
id= ('c1','c2','c3','c4');
let cursoEs=info.Cursos.find(function(cursoE){
        if(cursoE==undefined){
            return cursoEs.id='no encontrado'
}else{
    return cursoE.id==argv.c
}
})
if(argv.nombre){
setTimeout(function(){
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(1969)
    texto = '<p>Registrado: '+argv.n+ '</p>'+
            '<p>Documento: '+argv.d+'</p>'+
            '<p>Curso: '+cursoEs.nombre+'</p>'+
            '<p>Duracion: '+cursoEs.duracion+'</p>'+
            '<P>Valor: '+cursoEs.valor+'</p>'
    console.log('Pagina actualizada')
    
},8000);
}