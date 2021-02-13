import { createStore } from "redux";

//Padrão de sintaxe diferente pra saber que é da store
const INITIAL_STATE = {
  data: ["Alunos"],
};

function getStudents(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

const store = createStore(getStudents);

export default store;
