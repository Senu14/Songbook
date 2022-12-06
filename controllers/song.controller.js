import SongModel from '../Models/song.model.js';

const model = new SongModel();

class SongController { 
     constructor() { }
     
// Song Controller Methods Begin
    list = async (req, res) => {
     const result = await SongModel.findAll()
     res.json(result)
    }
// Song Controller Methods End
}

export default SongController;