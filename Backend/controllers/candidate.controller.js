import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import bcrypt from "bcrypt"
import GenerateToken from "../utils/candidate_token.js"
import Candidate from "../models/candidates.js"
const registercandidate = async (req, res) => {
    try {
        const { name, address, phoneno, email, password } = req.body;
        if (!name|| !address || !phoneno || !email || !password) {
            return res.status(400).json(new ApiResponse(false, "Name,Address,Phoneno,Email and Password is required"));
        }
        const candidate = await Candidate.findOne({
            Email: email
        });
        if (candidate) {
            return res.status(400).json(new ApiResponse(false, "Candidate Already Registered"));
        }
        const hasedpassword = await bcrypt.hash(password, 10);
        const newcandidate = await Candidate.create({
            Name: name,
            Email: email,
            Password: hasedpassword,
            Address: address,
            Phoneno: phoneno,
        });
        res.status(201).json(new ApiResponse(true, "Candidate Added Successfully"));
    } catch (error) {
        res.status(500).json(new ApiError(false, error.message));
    }
}
const logincandidate = async (req, res) => {
    try {
        const { email, password } = req.body;
        const candidate = await Candidate.findOne({
            Email: email
        });
        if (!candidate) {
            return res.status(400).json(new ApiResponse(false, "Invalid Email Id"));
        }
        const ismatched = await bcrypt.compare(password,candidate.Password);
        if (!ismatched) {
            return res.status(400).json(new ApiResponse(false, "Invalid Password Entered"));
        }
        const token = GenerateToken(candidate._id);
        res.status(200).json(new ApiResponse(true, token));
    } catch (error) {
        res.status(500).json(new ApiError(false, error.message));
    }
}
const hello = async(req,res)=>{
    const candidate = await Candidate.findOne({
        Email:req.candidate.Email
    });
    res.status(200).json(new ApiResponse(true,candidate));
}
export { registercandidate, logincandidate ,hello};