export type Question = {
  id: string;
  title: string;
  categories: QuestionCategory[];
  complexity: QuestionComplexity;
  link: string;
  description: string;
};

export enum QuestionCategory {
  FUNCTIONAL = "Functional",
  OBJECT_ORIENTED = "Object-Oriented",
  MATHEMATICAL = "Mathematical",
}

export enum QuestionComplexity {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}
