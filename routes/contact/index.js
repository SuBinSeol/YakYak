var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function (req, res) {
    if(req && req.session && req.session.count) { 
        // 세션이 존재하는 경우
        res.render('contact.ejs',{user:req.session.uid});

    } else { 
        // 세션이 존재하지 않는 경우
        var id='';
        res.render('contact.ejs', {user:id});
    }
    
});

module.exports = router;