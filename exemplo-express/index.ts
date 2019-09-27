import express from 'express'
import path from'path'
import mysql from 'mysql'

const app = express()

app.set('views', path.join(__dirname,'./views'))
app.set('view engine','ejs')

app.get('/filmes', (req,res) => {
    let conn = mysql.createConnection({
        host: '172.16.99.131',
        user: 'root',
        password: '1q2w3e4r',
        database: 'sakila'
    })
    conn.connect(err => {
        if(err){
            console.log('Falha ao conectar no banco de dados')
            return
        }
        
        console.log('conectado com sucesso ao banco')
        
        conn.query('select * from film',(err,result) => {
            if(err){
                console.log('Falha ao executar consulta')
                return
            } 
            
            console.log(`número de resultados retornados: ${result.length}`)
            res.render('filmes',{films: result})
        }) 
    })   
})

app.listen(3000,() => console.log('express rodando na porta 3000'))

