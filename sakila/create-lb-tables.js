const app = require('./server/server')
const ds = app.dataSources.sakilaDS
let lbTables = ['User','AccessToken','ACL','Role','RoleMapping']

// o automigrate APAGA as tabelas e as cria novamente se elas existirem
// se quiser atualiar, use o autoupdate
ds.automigrate(lbTables, error => {
    if (error) {
        console.log(`falha ao criar as tabelas do loopback no banco`,error)
        return
    }

    console.log(`tabelas do loopback criadas com sucesso! verifique o banco`)
    ds.disconnect()
})