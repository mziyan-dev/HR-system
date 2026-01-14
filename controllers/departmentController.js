import departmentModel from "../models/Department.js"


export async function createDepartment(req, res) {
  let { name, description, createdAt } = req.body;
  if (!name || !description || !createdAt) {
    return res.status(400).json({ message: "All fields required" });
  }
  const newDepartment = new departmentModel({
    name,
    description,
    createdAt
  });
  newDepartment.save()
    .then(department => {
      res.status(201).json({ message: "Department created successfully", department });
    })
    .catch(error => {
      res.status(500).json({ message: "Error creating department", error });
    });
}


export async function updateDepartment(req, res) {
  try {
    const { id } = req.params;
    const { name, description, createdAt } = req.body;

    if (!name || !description || !createdAt) {
      return res.status(400).json({ message: "All fields required" });
    }

    const updatedDepartment = await departmentModel.findByIdAndUpdate(id, {
      name,
      description,
      createdAt
    }, { new: true });

    if (!updatedDepartment) {
      return res.status(404).json({ message: "Department not found" });
    }

    res.status(200).json({
      status: "true",
      message: "Department updated successfully",
      department: updatedDepartment
    });
  } catch (error) {
    res.status(500).json({
      message: "Department not updated",
      error: error.message
    });
  }
};

export async function deleteDepartment(req, res) {
  try {
    const { id } = req.params;
    const deletedDepartment = await departmentModel.findByIdAndDelete(id);

    if (!deletedDepartment) {
      return res.status(404).json({ message: "Department not found" });
    }

    res.status(200).json({
      status: "true",
      message: "Department deleted successfully",
      department: deletedDepartment
    });
  } catch (error) {
    res.status(500).json({
      message: "Department not deleted",
      error: error.message
    });
  }
};


export async function getAllDepartments(req, res){
  try{
    const departments = await departmentModel.find()
    res.status(200).json({
      totalDepartments: departments.length,
      departments
   })
  } catch(error){
   res.status(500).json({ message: "Server error" });
  }
}