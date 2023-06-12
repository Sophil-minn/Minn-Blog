interface QuestionItemProps {
  key: string;
  value: string;
  detail: Record<string, any>
}

export  interface ReactTheoryProps {
  h2: string;
  summary: string;
  questionList: QuestionItemProps[]
}
