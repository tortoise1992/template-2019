const jsonServer = require('json-server')
const path=require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname,'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
    console.log('JSON Server 启动成功！')
})