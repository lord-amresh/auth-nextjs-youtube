import mongoose from "mongoose";

export async function connect() {
    try {
        // Add this check!
        if (!process.env.MONGO_URI) {
            console.error("MONGO_URI is missing. Skipping connection during build.");
            return; 
        }
        await mongoose.connect(process.env.MONGO_URI!);
        // ... rest of your code
        mongoose.connect(process.env.Mongo_URI!)
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log('MongoDB connected Successfully');
        })

        connection.on("error", (err) => {
            console.log("MongoDB connection error. please make sure MongoDB is running. " + err);
            process.exit();
        });

    } catch (error) {
    console.log("Something goes wrong");
    console.log(error);
    
}

    
}