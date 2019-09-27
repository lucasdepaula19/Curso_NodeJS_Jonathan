const loopback = require('loopback')
const promisify = require('util').promisify
const fs = require('fs')
const writeFile = promisify(fs.writeFile)

const datasourceConfig = require('./server/datasources.json')
const db = new loopback.DataSource(datasourceConfig['sakilaDS'])

const models = ['customer', 'inventory', 'rental']

async function discover() {
    let promises = []

    models.forEach(model => {
        promises.push(new Promise(async (resolve, reject) => {
            try {
                const schema = await db.discoverSchemas(model)

                await writeFile(
                    `common/models/${model}.json`,
                    JSON.stringify(schema['sakila.' + model], null, 2)
                )

                const config = require(`./server/model-config.json`)
                config[model] = { dataSource: 'sakilaDS', public: true }
                await writeFile('server/model-config.json',
                    JSON.stringify(config, null, 2))
                resolve()
            } catch (error) {
                reject(error)
            }
        }))
    })

    return Promise.all(promises)



}

discover().then(() => console.log(`modelos ${models} importados!`))
    .catch(error => console.log(`falha ao importar modelos ${models}`, error))

