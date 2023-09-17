import QuestionService from "@/services/questions/QuestionService";
import { createContext } from "react";

const QuestionServiceContext = createContext<QuestionService | null>(null);

export default QuestionServiceContext;
