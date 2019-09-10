const express = require('express');

const router = express.Router();


router.get('/referencia', (req, res)=>{
res.json('hola desde referencia')
});
// router.post();
// router.put();
// router.delete();

module.exports = router;