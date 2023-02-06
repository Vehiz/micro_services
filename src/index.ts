import express from 'express';
import {PORT} from './config';
import { databaseConnection } from './database/connection';
import { expressApp } from './express-app';

const startServer = async()=>{
    const app = express();

    await databaseConnection()
    await expressApp(app)

    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    }).on('error', (err)=>{
        console.log(err)
        process.exit(1)
    })
}

startServer()