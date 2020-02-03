import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

export default function Test() {
  useFirestoreConnect("tips"); // sync todos collection from Firestore into redux
  const todos = useSelector(state => state.firestoreReducer.ordered.tips);
  return (
    <ul>
      {todos &&
        todos.map(todo => (
          <li>
            id: {todo.id} todo: {todo.content}
          </li>
        ))}
    </ul>
  );
}
