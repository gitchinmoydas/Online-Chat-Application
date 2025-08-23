import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "virat.kohli@example.com",
    fullName: "Virat Kohli",
    password: "123456",
    profilePic: "https://documents.bcci.tv/resizedimageskirti/164_compress.png",
  },
  {
    email: "rohit.sharma@example.com",
    fullName: "Rohit Sharma",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",
  },
  {
    email: "jasprit.bumrah@example.com",
    fullName: "Jasprit Bumrah",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/0/02/Jasprit_Bumrah_in_PMO_New_Delhi.jpg",
  },
  {
    email: "ravindra.jadeja@example.com",
    fullName: "Ravindra Jadeja",
    password: "123456",
    profilePic: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTB-zjYNY2JJ1w6f1kt1qHQoPeElciRUIqSKXr2XpfRE5FMLWWGL1bdI-J3Yk_w6FmcaD6ItE5N_ubm4-w",
  },
  {
    email: "kl.rahul@example.com",
    fullName: "KL Rahul",
    password: "123456",
    profilePic: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS1P9QGMetX8C57GJm-2GsnXiCw12Pw5lsCoS_Z04pw06QwwLggOBBVhsiNgW4NZtmYDR75mINtCyfTkF8",
  },
  {
    email: "shubman.gill@example.com",
    fullName: "Shubman Gill",
    password: "123456",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSHphykaGPfeWxQkTRzaiR0Pq2rBr-eOWrA&s",
  },
  {
    email: "hardik.pandya@example.com",
    fullName: "Hardik Pandya",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/7/73/Hardik_Pandya_2022.jpg",
  },
  {
    email: "mohammed.siraj@example.com",
    fullName: "Mohammed Siraj",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/3/37/Mohammed_Siraj_2023.jpg",
  },
  {
    email: "rishabh.pant@example.com",
    fullName: "Rishabh Pant",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Rishabh_Pant_2021.jpg",
  },
  {
    email: "kuldeep.yadav@example.com",
    fullName: "Kuldeep Yadav",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Kuldeep_Yadav_2023.jpg",
  },
  {
    email: "gautam.gambhir@example.com",
    fullName: "Gautam Gambhir",
    password: "123456",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjZYqjFCFqU3YHgHaqUrH4fh4WyLteFhyyT8sOaRl6dKIa-e7",
  },
  {
    email: "shreyas.iyer@example.com",
    fullName: "Shreyas Iyer",
    password: "123456",
    profilePic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfH0-0I4cci4_Bk6Pm934GW4ltZKY1PSIYQWWsY1wRuwuy2DEX0mz_9hxIpHGR0eWLVX9zqRS3510BRj-MQkq-BA",
  },
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();