namespace reactApiPractice {
  enum RouteIdEnumParent {
    Hooks = "Hooks",
    Components = "Components",
    ReactAPI = "ReactAPI",
  }
  enum RouteIdEnum {
    useCallback = "useCallback",
    useContext = "useContext",
    useDebugValue = "useDebugValue",
    useDeferredValue = "useDeferredValue",
    useEffect = "useEffect",
    useId = "useId",
    useImperativeHandle = "useImperativeHandle",
    useInsertionEffect = "useInsertionEffect",
    useLayoutEffect = "useLayoutEffect",
    useMemo = "useMemo",
    useReducer = "useReducer",
    useRef = "useRef",
    useState = "useState",
    useSyncExternalStore = "useSyncExternalStore",
    useTransition = "useTransition"
  }
  // interface ComponentsMap { [key in RouteIdEnum]?: React.FC };
  // interface ParentComponentsMap { [key in RouteIdEnumParent]?: React.FC };
}

namespace reactTheory {
  interface TheoryProps {
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
  
  interface QuestionItemProps {
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
  
   interface ReactTheoryProps {
    h2?: string;
    id?: string;
    title?: string;
    summary?: string;
    questionList?: QuestionItemProps[]
  }
  
}

namespace managingStateProps {
  enum RouteIdEnumParent {
    MANAGING_STATE = "managingState",
  }
  enum RouteIdEnum {
    REACTING_TO_INPUT_WITH_STATE = 'reacting-to-input-with-state',
    CHOOSING_THE_STATE_STRUCTURE = 'choosing-the-state-structure',
    SHARING_STATE_BETWEEN_COMPONENTS = 'sharing-state-between-components',
    PRESERVING_AND_RESETTING_STATE = 'preserving-and-resetting-state',
    EXTRACTING_STATE_INTO_A_REDUCER = 'extracting-state-into-a-reducer',
    PASSING_DATA_DEEPLY_WITH_CONTEXT = 'passing-data-deeply-with-context',
    SCALING_UP_WITH_REDUCER_ADN_CONTEXT = 'scaling-up-with-reducer-and-context',
  }
}
