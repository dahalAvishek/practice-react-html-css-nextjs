import { useState } from "react";
import "./App.css";
import SubjectiveQ from "./SubjectiveQ.jsx";
import ObjectiveQ from "./ObjectiveQ.jsx";
import YesNoQ from "./YesNoQ.jsx";

export default function App() {
  const [surveyInfo, setSurveyInfo] = useState({ title: "", description: "" });
  const [state, setState] = useState([
    {
      id: 1,
      question: "",
      questionType: "subjective",
      answers: [],
    },
  ]);
  
  function handleInfo(e) {
    setSurveyInfo((prevSurveyInfo) => {
      const newSetSurveyInfo = {
        ...prevSurveyInfo,
        [e.target.name]: e.target.value,
      };
      return newSetSurveyInfo;
    });
  }
  
  function handleQuesType(e, id) {
    e.preventDefault();
    let ansList; 
    if (e.target.value==="objective") {
      ansList = [{ id: 1, ans: "" }, { id: 2, ans: "" }]
    } 
    else if (e.target.value==="subjective") {
      ansList = ""
    }
    else {
      ansList = "fasle"
    }
    setState((prevState) => {
      const newState = prevState.map((item) =>
        item.id === id
          ? { 
            ...item, 
            question: "", 
            questionType: e.target.value, 
            answers: ansList
          }
          : item
          );
          return newState;
    });
  }

  function handleAddNew(e) {
    e.preventDefault();
    setState((prevState) => {
      const newState = [
        ...prevState,
        {
          id: prevState.length + 1,
          question: "",
          questionType: "subjective",
          answers: [],
        },
      ];
      console.log(newState)
      return newState;
    });
  }
  
  function handleAddOptions(e, id) {
    e.preventDefault();
    setState((prevState) => {
      const newState = prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              answers: [
                ...item.answers,
                { id: item.answers.length + 1, ans: "" },
              ],
            }
          : item
      );
      return newState;
    });
  }

  function handleInput(e, id, ansId) {
    e.preventDefault();
    if (ansId) {
      setState((prevState) => {
        const newState = prevState.map((item) =>
          item.id === id
            ? {
                ...item,
                answers: item.answers.map((ansItem) =>
                  ansItem.id === ansId
                    ? { ...ansItem, ans: e.target.value }
                    : ansItem
                ),
              }
              : item
              );
        return newState;
      });
    } else {
      setState((prevState) => {
        const newState = prevState.map((item) =>
          item.id === id ? { ...item, question: e.target.value } : item
        );
        return newState;
      });
    }
  }

  function handleDelete(e, id, ansId) {
    e.preventDefault();
    if (ansId) {
      setState((prevState) => {
        let num = 0
        const newState = prevState.map((item) =>
          item.id === id
            ? {
                ...item,
                answers: (item.answers.filter((ansItem) => ansItem.id !== ansId).map(elems => {
                  num = num + 1
                  return {
                    ...elems,
                    id : num
                  }
                })),
              }
              : item
              );
        return newState;
      });
    } else {
      setState((prevState) => {
        let newState = prevState.filter((item) => item.id !== id);
        let num = 0;
        newState = newState.map(item => {
          num = num + 1
          return {
            ...item,
            id: num
          }
        } 
        )
        return newState;
      });
    }
  }


  function answerBlock(id) {
    if (state[id - 1].questionType === "yesno") {
      return <YesNoQ />;
    } else if (state[id - 1].questionType === "objective") {
      return (
        <ObjectiveQ
          answers={state[id - 1].answers}
          handleAddOptions={handleAddOptions}
          handleInput={handleInput}
          handleDelete={handleDelete}
          id={id}
        />
      );
    } else {
      return <SubjectiveQ id={id} state={state} />;
    }
  }
  
  const questionComponent = state.map((item) => (
    <div key={item.id} className="questionBlock">
      <header>
        <button onClick={(e) => handleDelete(e, item.id)}>Delete</button>
        <input
          type="text"
          name="question"
          value={item.question}
          placeholder="Type your question here."
          onChange={(e) => handleInput(e, item.id)}
          />
        <select
          value={item.questionType}
          onChange={(e) => handleQuesType(e, item.id)}
          name="questionType"
        >
          <option value="subjective">Subjective</option>
          <option value="objective">Objective</option>
          <option value="yesno">Yes/No</option>
        </select>
      </header>
      {answerBlock(item.id)}
    </div>
  ));

  return (
    <div className="formWrapper">
      <header>
        <h1>Create Survey</h1>
        <p>
          Please add valid survey title and add question to start creating a
          survey.
        </p>
      </header>
      <input
        type="text"
        name="title"
        value={surveyInfo.title}
        placeholder="Survey title goes here"
        onChange={handleInfo}
        />
      <textarea
        type="text"
        name="description"
        value={surveyInfo.description}
        placeholder="Write a short suitable description for your survey"
        onChange={handleInfo}
        />
      <form onSubmit={(e) => handleAddNew(e, state[state.length - 1].id)}>
        {questionComponent}
        <br />
        <button> + Add New</button> <br />
      </form>
    </div>
  );
}
