// const dotenv = require("dotenv")
// const user = require("../models/User")
// async function createUser(req, res) {
//     try {
//         const body = req.body;
//         if (body == null) return res.status(202).send("Enter User Body correctly");
//         const existingUser = await user.findOne({ email: body.email });
//         if (existingUser) {
//             return res.status(400).json({ error: "Email already exists" });
//         }
//         const result = await task.create({
//             email: body.email,
//             name: body.name,
//             dueDate:body.dueDate,
//             priority:body.priority,
            
            

//         })
//         return res.status(201).send(result);
//     }
//     catch (err) {
//         if (err.code == 11000) {
//             return res.send("Email already exist")
//         }

//         return res.send(err.message);
//     }
// }
// function getUser(req,res){
//     return res.send("Hello");
// }
// module.exports = { createUser ,getUser};