const Player = require('../models/teamMgr.model');

module.exports = {

    findAllPlayers: (req, res) => {
        Player.find({}) //Find all
            .then((allPlayers) => {
                console.log(allPlayers)
                res.json(allPlayers)
            })
            .catch((err) => {
                console.log("findAllPlayers has failed!")
                console.log(err)
                res.json(err)
            })
    },

    createNewPlayer: (req, res) => {
        Player.create(req.body) //creates new based on info passed through the client request's body (likely a form)
            .then((newPlayer) => {
                console.log(newPlayer)
                res.json(newPlayer)
            })
            .catch((err) => {
                console.log(err)
                console.log("createNewPlayer has failed!")
                res.status(400).json(err)
            })
    },


    findOnePlayer: (req, res) => {
        //Use a variable pulled from params to get the specifed item. So far, the specifier has always been id
        Player.findOne({ _id: req.params.id }) //the params variable, here being id, must match the variable in our routes
            .then((onePlayer) => {
                console.log(onePlayer)
                res.json(onePlayer)
            })
            .catch((err) => {
                console.log(err)
                console.log("findOnePlayer has failed!")
                res.json(err)
            })
    },


    deleteOnePlayer: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then((deletedPlayer) => {
                console.log(deletedPlayer)
                res.json(deletedPlayer)
            })
            .catch((err) => {
                console.log(err)
                console.log("deleteOnePlayer has failed!")
                res.json(err)
            })
    },


    updatePlayer: (req, res) => {
        //This is the one query that requires two pieces of data. the param specifer, and the req body
        Player.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedPlayer) => {
                console.log(updatedPlayer)
                res.json(updatedPlayer)
            })
            .catch((err) => {
                console.log(err)
                console.log("updatePlayer has failed!")
                res.status(400).json(err) 
            })

    }
}