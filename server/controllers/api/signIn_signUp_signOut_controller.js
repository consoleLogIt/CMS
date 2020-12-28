const Users   = require('../../models/users');
const jwt = require('jsonwebtoken');


module.exports.signUp = async (req,res) => {

    try{
        if(req.body.password!==req.body.confirm_password)
        return res.json(200,{
            message:"passwords did not matched"
        })

        let user   = await Users.findOne({email:req.body.email})
        if(!user){
            Users.create(req.body);
            return res.json(200,{
                message:"user created"
            })

        }
        else{
            return res.json(200,{
                message:"user already present"
            })
        }

    }catch(err){
        return res.json(500,{
            message:"internal server error",
            error:err
        })

    }

}

module.exports.signIn = async (req,res) => {
    try{
        const user = await Users.findOne({email:req.body.email,password:req.body.password})
        if(!user){
            return res.json(200,{
                message:"invalid username password"
            })
        }
        else{
            return res.json(200,{
                message:"sign in successfull and here's your webtoken",
                token:jwt.sign({id:user.id,name:user.name,type:user.userType},"thisisthekey")
            }
            )
        }

    }catch(err){
        return res.json(500,{
            message:"internal server error"
        })

    }
    

}

module.exports.singOut = async (req,res) => {
    

}