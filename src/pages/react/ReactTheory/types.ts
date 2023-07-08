
export interface TheoryProps {
  title: string;
  id: string;
  concept: string;
  elements?: string;
  tips?: string;
  answer?: string[];
  methods?: {
    title: string;
    content: string;
    tips?: string;
  }[]
}

export interface QuestionItemProps {
  key: string;
  title: string;
  id?: string;
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
  id?: string;
  title?: string;
  summary?: string;
  questionList?: QuestionItemProps[]
}


interface AnchorItemsProps {
  key: string;
  href: string;
  title: string;
  children: {
    key: string;
    href: string;
    title: string;
  }
}

