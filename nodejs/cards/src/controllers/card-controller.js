const neDB = require('../configurations/database')
const api = {}

api.findAll = (request, response) => {
    neDB.find({},  (exception, cards) => {
        if (exception) {
            const message = 'Sorry, an error occorred. we could not find any documents.'
            console.log(message, exception)
            response.status(exception.status | 404)
            response.json({ 'mensagem': message })
        }
        response.status(200)
        response.json(cards)
    })
}

api.save = (request, response) => {
    const canonical = request.body
    neDB.insert(canonical, (exception, card) => {
        if (exception) {
            const message = 'Sorry, an error occorred. we could not save your document.'
            console.log(message, exception)
            response.status(exception.status | 500)
            response.json({ 'mensagem': message })
        }
        response.status(201)
        response.json(card)
    })
}

/*
* updateById substitutes the entire document (or object)
*/
api.updateById = (request, response) => {
    
    //const oldDocumentId = request.body?????   TODO

    //const newDocumentId = request.body?????   TODO

    db.update({ "_id" : oldDocumentId }, { "_id" : newDocumentId }, {}, (exception, card) => {
        if (exception) {
            const message = 'Sorry, an error occorred. we could not find and update your document.'
            console.log(message, exception)
            response.status(exception.status | 404)
            response.json({ 'mensagem': message })
        }
        response.status(200)
        response.json(card)
    }) 
}

api.deleteById = (request, response) => {

    const documentId = request.body

    db.remove({ "_id" : documentId }, {}, (exception, card) => {
        if (exception) {
            const message = 'Sorry, an error occorred. we could not find and delete your document.'
            console.log(message, exception)
            response.status(exception.status | 404)
            response.json({ 'mensagem': message })
        }
        response.status(200)
        const message = 'Document deleted successfully.'
        console.log(message, exception)
        response.json({ 'mensagem': message })
    })    
}

api.findById = (request, response) => {
    
    const searchId = request.body
    
    neDB.findOne({ "_id" : searchId }, (exception, card) => {
        if (exception) {
            const message = 'Sorry, an error occorred. we could not find your document.'
            console.log(message, exception)
            response.status(exception.status | 404)
            response.json({ 'mensagem': message })
        }
        response.status(200)
        response.json(card)
    })    

}



api.findAllSorted = (request, response) => {
    
    const searchParameter = request.body
    
    neDB.find({}).sort({ searchParameter }).exec((exception, cards) => {
        if (exception) {
            const message = 'Sorry, an error occorred. we could not find any objects.'
            console.log(message, exception)
            response.status(exception.status | 404)
            response.json({ 'mensagem': message })
        }
        response.status(200)
        response.json(cards)
    })
}

module.exports = api