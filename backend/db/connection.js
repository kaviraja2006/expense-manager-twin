const mongoose=require("mongoose")
require("dotenv").config()
const connection=mongoose.connect(Process.env.mongo_url)
module.export=connection