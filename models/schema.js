import mongoose from 'mongoose';

const head=mongoose.Schema({
    heading:{
        type: String,
        required: true,
    }



});


export default mongoose.model('heads', head);