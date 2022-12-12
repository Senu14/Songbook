import express from 'express';
import SongController from '../controllers/song.controller.js';

const SongRouter = express.Router();

const controller = new SongController();

// Kalder routes med controller metoder
SongRouter.get('/api/songs', (req, res) => { controller.list(req, res)});
SongRouter.get('/api/songs/:id([0-9]*)', (req, res) => { controller.get(req, res)});
SongRouter.post('/api/songs', (req, res) => { controller.create(req, res)});
SongRouter.put('/api/songs', (req, res) => { controller.update(req, res)});
SongRouter.delete('/api/songs/:id([0-9]*)', (req, res) => { controller.delete(req, res)});
SongRouter.get('/api/songs/search', (req, res) => { controller.search(req, res)});


export default SongRouter