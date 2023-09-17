import { Question } from "@/models/Question";

export default interface QuestionService {
  // Create [POST]
  createQuestion(body: Question): Promise<Question>;

  // Read [GET]
  getQuestions(): Promise<Question[]>;
  getQuestionById(id: string): Promise<Question>;

  // Update [PUT]
  updateQuestion(id: string, body: Question): Promise<Question>;

  // Delete [DELETE]
  deleteQuestion(id: string): Promise<Question>;
}
