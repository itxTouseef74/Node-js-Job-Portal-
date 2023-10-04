const express = require ('express');
const postController = require('../Controller/postcontroller');
const router =express.Router();

router.post('/test-post' ,postController)
module.exports=router;