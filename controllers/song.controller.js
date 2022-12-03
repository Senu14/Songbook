import SongModel from '../Models/song.model.js';

constmodel = new SongModel();

class SongController { 
     constructor() {
          console.log('This calls a instans of class SongController');
     }

     list = (req, res) => {
          const result = model.list();
          res.send('The list method has been called on the Song Controller class');
     }

     get = (req, res) => {
          console.log(req.params.id);
          res.send('The get method has been called on the Song Controller class');
     }
}

export default SongController;