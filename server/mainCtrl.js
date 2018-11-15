module.exports = app =>{
    app.get("/api/test",(req,res)=>{
        res.status(200).json(req.session)
    })

    app.post("/api/auth/register",(req,res)=>{
        const db = req.app.get('db')
        db.users_helo.find({
            username: req.body.username
        }).then(user=>{
            // console.log("user: ",user)
            if (user.length ===0){
            // }).catch(console.log)
            db.users_helo.insert({
                username:req.body.username,
                password:req.body.password,
                profile_pic:req.body.profile_pic
            }).then(newUser=>{
                //  console.log("creating new user",newUser)
                req.session.user_id = newUser.id_helo;
                // res.redirect(process.env.REACT_APP_CLIENT+"/campaigns");
                res.status(200).send(newUser)
            }).catch(console.log)
        } else {
                // console.log('req.session after: ', req.session);
            res.status(200).json("Username Already Exists!")
            }
        }).catch(console.log)
    }),
    app.post("/api/auth/login",(req,res)=>{
        const db = req.app.get('db')
        db.users_helo.find({
            username: req.body.username
        }).then(user=>{
            // console.log("user: ",user)
            if (user.length ===0){
            // }).catch(console.log)
                res.status(200).json("Invalid Username!")
        } else {
            if(req.body.password == user[0].password){
                req.session.user_id = user[0].id_helo;
                // console.log('req.session after: ', req.session);
                res.status(200).json(user[0])
            }
            else{
                res.status(200).json("Wrong Password!")
            }
            }
        }).catch(console.log)
    }),
    app.get("/api/user",(req,res)=>{
        const db = req.app.get('db')
        db.users_helo.find({
            id_helo: req.session.user_id
        }).then(user=>{
            // console.log("user: ",user)
            if (user.length ===0){
            // }).catch(console.log)
                res.status(200).json("No User!")
        } else {
                res.status(200).json(user[0])
            }
        }).catch(console.log)
    }),
    app.get("/api/logout",(req,res)=>{
        req.session.destroy();
        // console.log(req.session)
        res.status(200).send("ok");
    })

}