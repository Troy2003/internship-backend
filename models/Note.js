import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        lowercase: true
    }
});

export default mongoose.model('Note', noteSchema, 'notes');