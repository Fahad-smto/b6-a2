import { Request, Response } from "express";
import { userServices } from "./user.service";
 

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUserIntoDB(req.body);
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserIntoDB();
    return res.status(200).json({
      success: true,
      message: "All users fetched",
      data: result.rows,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const email = req.user!.email;
    const user = await userServices.getSingleUserIntoDB(email);

    return res.status(200).json({
      success: true,
      message: "User fetched",
      data: user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
 
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await userServices.deleteUserIntoDB(id);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await userServices.updateUserIntoDB(id, req.body);

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

 

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
};
