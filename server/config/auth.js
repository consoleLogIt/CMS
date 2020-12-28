const jwt = require('jsonwebtoken');

function auth(req,res,next){
    const authHeader = req.header('authorization');
    const token  = authHeader && authHeader.split(' ')[1]
    //check token
    if(!token){
        return res.json(401,{
            message:'No token, denied'
    })
}

// verify token 
try{
    const decoded  = jwt.verify(token, 'thisisthkey');

    req.user = decoded;
    next();
}
catch(err){
    console.log(err);
 return res.json(400,{
     message:'token is not valid'
 }); 


}
}

module.exports = auth;