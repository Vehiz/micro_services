import mongoose from 'mongoose'
import { DB_URL } from '../config'
import dotEnv from 'dotenv'
dotEnv.config()

export const databaseConnection = async() => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(DB_URL)
        console.log('Db connected')
        
       
    } catch (error) {
        console.log('Error===')
        console.log(error)
        process.exit(1)
    }
}