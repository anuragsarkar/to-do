import gql from "graphql-tag";
//fetches all todos (left to be done!)
export const FetchAllQuery = gql`
{
    todo(where: {todo_done: {_eq: false}}, order_by: {todo_id: asc}) {
      todo_id
      todo_item
      todo_done
      todo_user
    }
  }
`;
//Used to add an item to todo list -> default:false
export const AddTodoQuery = gql`
mutation addTodo($todo_item: String!, $todo_user: String!) {
    insert_todo(objects: [{todo_item: $todo_item, todo_user: $todo_user}]) {
      returning {
        todo_id
        todo_item
        todo_done
        todo_user
      }
    }
  }
`;
// Marks Done=true 
export const MarkDoneQuery = gql`
mutation mark($todo_id: Int!) {
    update_todo(where: {todo_id: {_eq: $todo_id}}, _set: {todo_done: true}) {
      affected_rows
    }
  }
  
`;
// gets done = true (similar to done = false)
export const getDoneQuery = gql`
{
    todo(where: {todo_done: {_eq: true}}, order_by: {todo_id: asc}) {
      todo_id
      todo_item
      todo_done
      todo_user
    }
  }
  
`;
//Delete function not added Yet , Uncomment when added
/*
export const deleteQuery = gql`
mutation del($todo_id: Int!) {
  delete_todo(where: {todo_id: {_eq: $todo_id}}) {
    affected_rows
  }
}}
`; */