import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        lowercase: true
    },
    discription: {
        type: String,
        lowercase: true
    }
});

export default mongoose.model('Note', noteSchema, 'notes');