const mongoose = require("mongoose");

const bodyParaSchema = new mongoose.Schema({
    spO2: { type: Number, required: true },
    ambientTempC: { type: Number, required: true },
    objectTempC: { type: Number, required: true },
    heartRate: { type: Number, required: true },
    gsrValue: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now, expires: '2d' }, // Data will expire after 2 days
});

const BodyPara = mongoose.model("BodyPara", bodyParaSchema);

module.exports = BodyPara;


// createdAt: {
//     type: String,
//     default: () => {
//         const now = new Date();
//         return now.toISOString().slice(0, 16); // Get YYYY-MM-DDTHH:mm
//     },
//     expires: '2d'
// }, 
