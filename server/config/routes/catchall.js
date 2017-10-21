const router = require('express').Router()
const path = require('path')

router.all('*', (request, response, next) => {
    
    console.log('catch all got request:', request.url);    
    response.sendFile(path.resolve('./public/dist/index.html'));
    
})

module.exports = router;
