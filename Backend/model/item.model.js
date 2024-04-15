const mongoose=require("mongoose")

const itemSchema=new mongoose.Schema({
   title:{
    type:String
   },
   category:{
    type:String
   },
   company:{
       type:String
   },
   gender:{
    type:String
   },
   img:{
      type:String
   },
   price:{
     type:String
   }
},timeStamps=true)

const item=mongoose.model("Item",itemSchema);

module.exports=item;