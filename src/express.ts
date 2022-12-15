import express from 'express'
import { getName, postName } from './name'
import { getBalance, postBalance, deleteBalance} from './balance'

const server = express()

server.use(express.json())

server.get('/name', getName)
server.post('/name', postName)

server.get('/balance', getBalance)
server.post('/balance', postBalance)
server.delete('/balance', deleteBalance)

server.listen(8080, () => {
    console.log('Expres ishladi')
})