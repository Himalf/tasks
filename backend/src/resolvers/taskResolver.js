import Task from "../models/Task.js";
const resolvers = {
  Query: {
    tasks: async () => await Task.find(),
    task: async (_, { id }) => await Task.findById(),
  },

  Mutation: {
    createTask: async (_, { title, description, completed }) => {
      const result = await Task.create({ title, description, completed });
      return result;
    },

    updateTask: async (_, { id, title, description, completed }) => {
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title, description, completed },
        { new: true }
      );
      return updatedTask;
    },
    deleteTask: async (_, { id }) => {
      await Task.findByIdAndDelete(id);
      return "Task deleted Successfull";
    },
  },
};

export default resolvers;
