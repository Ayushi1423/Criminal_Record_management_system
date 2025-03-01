module.exports = (app) => {
    const criminalController = require('../controllers/criminal.controller');
  
    app.post('/add-criminal', criminalController.addCriminal);
    app.get('/criminals', criminalController.getCriminals);
    app.get('/criminals/:id', criminalController.getCriminal);
    app.put('/criminals/:id', criminalController.updateCriminal);
    app.delete('/criminals/:id', criminalController.deleteCriminal);
  };
  