const express = require('express');
const moviesController = require('./../Controllers/moviesControllers.js');
const router = express.Router();

// router.param('id', moviesController.checkId);

router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.createMovie)
    
router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.updatedMovie)
    .delete(moviesController.deleteMovie)



module.exports = router;
