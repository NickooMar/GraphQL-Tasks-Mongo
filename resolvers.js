const Task = require("./models/Task");

const resolvers = {
  Query: {
    hello: () => "Hello World",
    getAllTasks: async () => await Task.find(),
    getTask: async (_, args) => {
      const { id } = args;
      const task = await Task.findById(id);
      return task;
    },
  },

  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args;

      const newTask = await new Task({ title, description });

      return newTask.save();
    },

    deleteTask: async (_, args) => {
      const { id } = args;
      await Task.findByIdAndDelete(id);
      return "Task Deleted Successfully";
    },

    updateTask: async (_, args) => {
      const { id, title, description } = args;
      await Task. findByIdAndUpdate(id, {title, description});
      return 'Task Updated Successfully';
    }
  },
};

module.exports = { resolvers };
