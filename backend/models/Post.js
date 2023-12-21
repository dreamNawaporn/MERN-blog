const mongoose = require("mongoose")
const {Schema, model} = mongoose;
const PostSchema = new Schema({
    title: String,
    summary: String,
    continue:String,
    cover: String,
    author: {type: Schema.Types.ObjectId, ref:"user"},
},
{
    timestamps:true,
}
);
const PostModel = model("Post", PostSchema);
model.exports = PostModel;