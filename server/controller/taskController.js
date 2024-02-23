const TASK_LIST = require("../model/todoModel");

// create a task
exports.create = async (req, res) => {
  try {
    const { task, priority, dueDate, description, completed } = req.body;

    console.log(req.body);

    const newTaskList = new TASK_LIST({
      task,
      priority,
      dueDate,
      description,
      completed,
    });

    await newTaskList.save();

    res.status(201).json(newTaskList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// retrive all data
exports.find = async (req, res) => {
  try {
    const tasks = await TASK_LIST.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while retrieving data" });
  }
};

// delte a task
exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await TASK_LIST.findByIdAndDelete(id);

    if (!data) {
      res.status(404).send({ message: `Cannot delete task with id ${id}` });
    } else {
      res.send({ message: "Task deleted successfully" });
    }
  } catch (error) {
    res.status(500).send({ message: `Could not delete task: ${error}` });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const tasks = await TASK_LIST.findById(id);
    if (!tasks) {
      return res.status(400).send({ message: `Error while updating task` });
    }

    const updatedData = {
      ...req.body,
    };

    const updated = await TASK_LIST.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
