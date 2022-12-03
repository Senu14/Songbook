import express from 'express';
import { router as SongRouter } from '/Routes/song.router.js';
import dotenv from 'dotenv';


// import db from '/config/db.config.js'


// db.query(`SELECT title FROM song`, ( err, result) =>{
//     console.log(result);
// })


dotenv.config();

const app = express();
app.use(express.urlencoded({
    extended: true
}))

const port = process.env.port ||4000;

app.use(SongRouter);
