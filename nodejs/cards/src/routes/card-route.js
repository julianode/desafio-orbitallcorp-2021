const api = require('../controllers/card-controller')

module.exports = (app) => {
    app.route('/cards')
        .get(api.findAll)
        .post(api.save)
        .put(api.updateById)
        .delete(api.deleteById)
        .get(api.findById)
        .get(api.findAllSorted)  
}