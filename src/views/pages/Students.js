//Hooks de redux
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Students() {
  const [titleName, setTitleName] = useState("");

  const students = useSelector((state) => state.data);
  const dispatch = useDispatch();

  function addStudents() {
    dispatch({ type: "ADD_STUDENT", title: titleName });
  }

  return (
    <>
      <p>
        {students.map((student) => (
          <>
            <span>{"Nome: " + student}</span>
            <br />
          </>
        ))}
        <input type="text" onChange={(e) => setTitleName(e.target.value)} />
        <button onClick={addStudents}>Adicionar aluno</button>
      </p>
    </>
  );
}

export default Students;
