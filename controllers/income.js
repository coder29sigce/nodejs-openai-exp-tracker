const IncomeSchema = require("../models/IncomeModel");

// code to add incomes
exports.addIncome = async (req, res) => {
  // Destructuring
  const { title, amount, category, description, date } = req.body;

  const income = await IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validating Data
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive Number!" });
    }

    // Saving data to database
    await income.save();

    res.status(200).json({ message: "Income Added!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// code to get incomes
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// code to delete income
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const income = await IncomeSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "Income Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
