import express from 'express';
import indexController from './../controller/index';
const router = express.Router();

router.get('/', async (req, res, next) => {
  const content = await indexController.index();
  res.send(content);
});


router.get('/index',(req,res)=>{
    res.render('index');
});


module.exports = router;
