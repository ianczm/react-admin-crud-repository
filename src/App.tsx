import "./App.css";
import QuestionTable from "./components/questions/table/QuestionTable";
import { NextUIProvider } from "@nextui-org/react";
import LiveQuestionService from "./services/LiveQuestionService";
import QuestionServiceContext from "./services/QuestionServiceProvider";

function App() {
  const questionService = new LiveQuestionService();

  return (
    <NextUIProvider>
      <QuestionServiceContext.Provider value={questionService}>
        <QuestionTable />
      </QuestionServiceContext.Provider>
    </NextUIProvider>
  );
}

export default App;
