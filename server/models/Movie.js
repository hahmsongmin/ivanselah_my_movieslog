import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    id: Number,
    title: String,
    summary: String,
    genres: [{ type:String }],
    posterFpath: String,
    posterBpath: String,
    createdAt: Date,
    releaseDate: String,
    rating: Number,
});

const movieModel = mongoose.model("movie", movieSchema);

export default movieModel;