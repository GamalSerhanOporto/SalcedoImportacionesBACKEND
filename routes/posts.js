const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//ROUTES
router.get('/', (req,res)=>{
    res.send('Hola estamos en posts');
});

router.post('/', (req,res)=>{
    const post = new Post({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err=>
        {
            res.json({message: err});
        })
});

module.exports = router;
