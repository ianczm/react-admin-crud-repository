import { createContext } from "react";
import QuestionService from "./QuestionService";

const QuestionServiceContext = createContext<QuestionService | null>(null);

export default QuestionServiceContext;
