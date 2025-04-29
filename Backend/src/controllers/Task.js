const task = require("../models/Task");

async function getAllTasks(req,res){
    const result=await task.find();
    return res.status(200).json(result);
}
async function getTaskById(req,res){
    const d=await task.findById(req.params.id)
    return res.status(201).json(d);
}
async  function deleteTask(req,res){
    try{

        const d=await task.findByIdAndDelete(req.params.id);
        if(d==null)res.send("Task with given id not found");
        return res.status(201).json(d);
    }
    catch(error){
        return res.send(error.message);
    }
}
async function updateTask(req,res){
    try {
        const updatedTask = await task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Error updating Task" });
    }
}
async function createUser(req,res){
    try{
        const body=req.body;
        if(body==null)return res.status(202).send("Enter User Body correctly");      
        const existingUser = await user.findOne({ email: body.email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" }); 
        }
        const result=await user.create({
            title:body.title,
            description:body.description,
            Job_Title:body.Job_Title,
            first_name:body.first_name,
            lastname:body.lastname,
            
        })
        
        return res.status(201).send(result);
    } catch(err){
        if(err.code==11000){
            return res.send("Email already exist")
        }
        
        return res.send(err.message);
    }
}