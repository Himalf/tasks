const typeDefs = `
  type Task {
    id: ID!
    title: String!
    description: String!
    completed: Boolean!
  }

  type Query {
    tasks: [Task]
    task(id: ID!): Task
  }

  type Mutation {
    createTask(title: String!, description: String!,completed:Boolean!): Task
    updateTask(id: ID!, title: String, description: String, completed: Boolean): Task
    deleteTask(id: ID!): String
  }
`;

export default typeDefs;
