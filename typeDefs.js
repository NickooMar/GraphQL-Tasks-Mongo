const { gql } = require('apollo-server-express');


const typeDefs = gql`

    type Task {
        id: ID!
        title: String,
        description: String,
    }

    type Query {
        hello: String
        getAllTasks: [Task],
        getTask(id: ID!): Task
    }


    type Mutation {
        createTask(title: String, description: String ): Task
        deleteTask(id: ID!): String
        updateTask(id: ID!, title: String, description: String): String
    }
`

module.exports = {typeDefs};