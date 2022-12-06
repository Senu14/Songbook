import express from 'express';
import { sequelize } from '../config/db.sequelize.js'



const router = express.Router();

/* Modeller der skal medtages i intialiseringen */

import SongModel from '../Models/song.model.js'
import ArtistModel from '../Models/artist.model.js'

// Init Router
router.get('/init', (req, res) => { 
     try { 
         sequelize.sync()
         res.sendStatus(200)
     }
     catch(err) {
          res.send(err)
     }
 });





// router.get('/api/songs/:id([0-9]*)', (req, res) => { controller.get(req, res)});
// router.post('/api/songs', (req, res) => { controller.create(req, res)});
// router.put('/api/songs', (req, res) => { controller.update(req, res)});
// router.delete('/api/songs/:id([0-9]*)', (req, res) => { controller.delete(req, res)});
// router.get('/api/songs/search', (req, res) => { controller.search(req, res)});



export { router }