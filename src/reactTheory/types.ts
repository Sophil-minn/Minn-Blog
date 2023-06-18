
export interface TheoryProps {
  title: string;
  concept: string;
  elements?: string;
  methods?: {
    title: string;
    content: string;
    tips?: string;
  }[]
}

export interface QuestionItemProps {
  key: string;
  value: string;
  question: string;
  detail?: {
    description?: string;
    theory?: TheoryProps[];
    summary?: string[];
    // methods?: { title: string; content: string}[];
    tips?: string;
  }
}

export  interface ReactTheoryProps {
  h2?: string;
  title?: string;
  summary?: string;
  questionList?: QuestionItemProps[]
}

