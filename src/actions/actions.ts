"use server";
import { prisma,mockProducts } from "@/lib/db";

export async function AddUser(formData: FormData) {
  try {
    console.log("Starting AddUser function");
    console.log("Form data fields:", Array.from(formData.entries()).map(([key, value]) => `${key}: ${value}`));
    
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    
    console.log("Extracted form fields:", { firstName, lastName, email, password: "****", confirmPassword: "****" });

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.log("Missing required fields");
      throw new Error("Missing required fields");
    }

    if (password !== confirmPassword) {
      console.log("Passwords don't match");
      throw new Error("Passwords do not match");
    }

    console.log("Checking if user exists...");
    
    
    if (!prisma){
      throw new Error('Database not found!')
      }
      
    
    

    const existingUser = await prisma.users.findUnique({
      where: { 
        email: email.toString(),
      },
    });

    if (existingUser) {
      console.log("User already exists");
      throw new Error("The email you entered already exists!");
    }

    console.log("Creating new user...");
    const newUser = await prisma.users.create({
      data: {
        first_name: firstName.toString(),
        last_name: lastName.toString(),
        email: email.toString(),
        password: password.toString(),
      },
    });
    
    console.log("User created successfully:", newUser.id);
    return { success: true };
  } catch (error) {
    console.error("Error in AddUser:", error);
    throw error;
  }
}

export async function authorization(formData: FormData){
  const email = formData.get("email");
  const password = formData.get("password")

  if(!password || !email){
    throw new Error("Missing reqiered fields");
  }
  
}