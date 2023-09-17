import { Question } from "@/models/questions/Question";
import QuestionService from "./QuestionService";
import axios, { AxiosRequestConfig } from "axios";

export default class LiveQuestionService implements QuestionService {
  config: AxiosRequestConfig<Question>;

  constructor() {
    this.config = {
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
  }

  createQuestion(body: Question): Promise<Question> {
    return axios.post("/questions", body, this.config).then((res) => res.data);
  }

  getQuestions(): Promise<Question[]> {
    return axios.get("/questions", this.config).then((res) => res.data);
  }

  getQuestionById(id: string): Promise<Question> {
    return axios.get(`/questions/${id}`, this.config).then((res) => res.data);
  }

  updateQuestion(id: string, body: Question): Promise<Question> {
    return axios
      .put(`/questions/${id}`, body, this.config)
      .then((res) => res.data);
  }

  deleteQuestion(id: string): Promise<Question> {
    return axios
      .delete(`/questions/${id}`, this.config)
      .then((res) => res.data);
  }
}
