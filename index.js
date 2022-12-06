import express from 'express';
import dotenv from 'dotenv';
import { router as SongRouter } from './Routes/song.router.js';
import { router as InitRouter } from './Routes/init.sequelize.router.js';

// import { router as ArtistRouter } from './Routes/artist.router.js';




const app = new express();

dotenv.config();



app.use(express.urlencoded({extended: true }))
  
 

// app.use(express.json())

 app.use(SongRouter);
 app.use(InitRouter);
// app.use(ArtistRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server kører på port http://localhost:${port}`);
})