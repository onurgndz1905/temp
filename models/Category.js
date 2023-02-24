const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const CategoryseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,

    },
    slug:{
        type : String,
        unique : true
    },
    
   
});
CategoryseSchema.pre("validate",function(next){
    this.slug = slugify(this.name,{
        lower : true,
        strict : true
    })
    next()
})
 

const Category = mongoose.model("Category",CategoryseSchema);

module.exports = Category;