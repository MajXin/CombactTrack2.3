import mongoose from "mongoose";

const CandidatesSechma = new mongoose.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    Address: {
        type: String
    },
    Phoneno: {
        type: String
    },
    ChestNo: {
        type: String
    }
}, { versionKey: false });

const Candidate = mongoose.model("Candidate", CandidatesSechma);

export default Candidate;