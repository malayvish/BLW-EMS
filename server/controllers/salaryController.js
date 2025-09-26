import Salary from '../models/Salary.js';

const addSalary = async (req, res) => {
  try {
    const {
      employeeId,
      basicSalary = 0,
      allowances = 0,
      deductions = 0,
      payDate
    } = req.body;

    const totalSalary =
      parseFloat(basicSalary) +
      parseFloat(allowances) -
      parseFloat(deductions);

    const newSalary = new Salary({
      employeeId,
      basicSalary: parseFloat(basicSalary),
      allowances: parseFloat(allowances),
      deductions: parseFloat(deductions),
      netSalary: totalSalary,
      payDate
    });

    await newSalary.save();

    return res.status(201).json({
      success: true,
      message: "Salary record added successfully"
    });

  } catch (error) {
    console.error("Add Salary Error:", error);
    return res.status(500).json({
      success: false,
      error: "Salary add server error"
    });
  }
};

const getSalary = async (req, res) => {
  try {
    const { id } = req.params;

    const salary = await Salary.find({ employeeId: id })
      .populate('employeeId', 'employeeId');

    return res.status(200).json({ success: true, salary });

  } catch (error) {
    console.error("Get Salary Error:", error);
    return res.status(500).json({
      success: false,
      error: "Salary get server error"
    });
  }
};

export { addSalary, getSalary };
