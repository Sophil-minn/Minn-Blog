import ManagingState from "..";
import ChoosingTheStateStructure from "./ChoosingTheStateStructure";
import ExtractingStateLogicIntoAReducer from "./ExtractingStateLogicIntoAReducer";
import PassingDataDeeplyWithContext from "./PassingDataDeeplyWithContext";
import PreservingAndResettingState from "./PreservingAndResettingState";
import ReactingToInputWithState from "./ReactingToInputWithState";
import ScalingUpWithReducerAndContext from "./ScalingUpWithReducerAndContext";
import SharingStateBetweenComponents from "./SharingStateBetweenComponents";
import { CHOOSING_THE_STATE_STRUCTURE, EXTRACTING_STATE_INTO_A_REDUCER, PASSING_DATA_DEEPLY_WITH_CONTEXT, PRESERVING_AND_RESETTING_STATE, REACTING_TO_INPUT_WITH_STATE, SCALING_UP_WITH_REDUCER_ADN_CONTEXT, SHARING_STATE_BETWEEN_COMPONENTS, } from "./const";

interface ComponentsMap {
  [REACTING_TO_INPUT_WITH_STATE]: React.FC,
  [CHOOSING_THE_STATE_STRUCTURE]: React.FC,
  [SHARING_STATE_BETWEEN_COMPONENTS]: React.FC,
  [PRESERVING_AND_RESETTING_STATE]: React.FC,
  [EXTRACTING_STATE_INTO_A_REDUCER]: React.FC,
  [PASSING_DATA_DEEPLY_WITH_CONTEXT]: React.FC,
  [SCALING_UP_WITH_REDUCER_ADN_CONTEXT]: React.FC,
}

interface RComponentsMap {
  ManagingState: React.FC,
}

export const componentsMap: ComponentsMap = {
  [REACTING_TO_INPUT_WITH_STATE]: () => <ReactingToInputWithState />,
  [CHOOSING_THE_STATE_STRUCTURE]: () => <ChoosingTheStateStructure />,
  [SHARING_STATE_BETWEEN_COMPONENTS]: () => <SharingStateBetweenComponents />,
  [PRESERVING_AND_RESETTING_STATE]: () => <PreservingAndResettingState />,
  [EXTRACTING_STATE_INTO_A_REDUCER]: () => <ExtractingStateLogicIntoAReducer />,
  [PASSING_DATA_DEEPLY_WITH_CONTEXT]: () => <PassingDataDeeplyWithContext />,
  [SCALING_UP_WITH_REDUCER_ADN_CONTEXT]: () => <ScalingUpWithReducerAndContext />,

};

export const rComponentsMap: RComponentsMap = {
  ManagingState: () => <ManagingState />,
}
