import express from 'express';
import dotenv from 'dotenv';
import SongRouter from './Routes/song.router.js';
import ArtistRouter from './Routes/artist.router.js';
import InitRouter  from './Routes/init.sequelize.router.js';


// import { router as ArtistRouter } from './Routes/artist.router.js';




const app = express();

dotenv.config();



app.use(express.urlencoded({extended: true }))
  


// Route til forside
app.get('/', (req, res) => {
	res.send('Hello There')
})

// app.use(express.json())


app.use(InitRouter);
app.use(SongRouter);
app.use(ArtistRouter);
//  app.use(UserRouter)

const port = process.env.PORT || 4200;

app.listen(port, () => {
	console.log(`Server kører på port http://localhost:${port}`);
})