const passport  = require('passport');
const Users = require('../models/users');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey :'thisisthkey'
}

passport.use(new JWTStrategy(opts,function(JWTPayLoad,done){
    Users.findById(JWTPayLoad._id,function(err,user){
        if(err)
        {
            console.log(err)
            return;
        }
        else if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })

}))


module.exports = passport;