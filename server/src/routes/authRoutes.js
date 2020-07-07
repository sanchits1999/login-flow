const express = require("express")
const mongoose = require("mongoose")
const User = mongoose.model("User")
const router = express.Router()

router.post("/login", async (req, res) => {
    const user = new User(req.body)
    try {
        const u = await User.findOne({ UserName: req.body.UserName })
        if (u) {
            try {
                u.comparePassword(req.body.Password).then(() => {

                    res.send({
                        username : u.UserName,
                        data :[ {
                            image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                            title : "React JS",
                            desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                        },{
                            image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                            title : "React JS",
                            desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                        },{
                            image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                            title : "React JS",
                            desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                        },{
                            image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                            title : "React JS",
                            desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                        },{
                            image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                            title : "React JS",
                            desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                        },{
                            image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                            title : "React JS",
                            desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                        },{
                            image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                            title : "React JS",
                            desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                        },{
                            image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                            title : "React JS",
                            desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                        },
                    
                    ],
                        message: "loged in",
                        error: false,
                    })

                }).catch((e) => {
                    res.send({ message: "error while logging in", error: true })
                })
            }
            catch (e) {
                res.send({ message: e, error: true })
            }
        } else {
            user.save().then((u) => {

                res.send({
                    username : u.UserName,
                    data :[ {
                        image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                        title : "React JS",
                        desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                    },{
                        image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                        title : "React JS",
                        desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                    },{
                        image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                        title : "React JS",
                        desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                    },{
                        image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                        title : "React JS",
                        desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                    },{
                        image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                        title : "React JS",
                        desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                    },{
                        image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                        title : "React JS",
                        desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                    },{
                        image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                        title : "React JS",
                        desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                    },{
                        image : "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                        title : "React JS",
                        desc : "React. js is an open-source JavaScript library that is used for building user interfaces"
                    },
                
                ],
                    message: "logged in",
                    error: false
                })

            }).catch((e) => {
                console.log(e)
                res.send({ message: "error while logging in", error: true })
            })
        }

    } catch (e) {
        console.log(e)
        res.send({ message: e, error: true })
    }
})




module.exports = router