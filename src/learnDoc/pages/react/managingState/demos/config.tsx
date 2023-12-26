import ManagingState from "..";
import ChoosingTheStateStructure from "../ChoosingTheStateStructure";
import ExtractingStateLogicIntoAReducer from "../ExtractingStateLogicIntoAReducer";
import PassingDataDeeplyWithContext from "../PassingDataDeeplyWithContext";
import PreservingAndResettingState from "../PreservingAndResettingState";
import ReactingToInputWithState from "../ReactingToInputWithState";
import ScalingUpWithReducerAndContext from "../ScalingUpWithReducerAndContext";
import SharingStateBetweenComponents from "../SharingStateBetweenComponents";

import { CHOOSING_THE_STATE_STRUCTURE, EXTRACTING_STATE_INTO_A_REDUCER, MANAGING_STATE, PASSING_DATA_DEEPLY_WITH_CONTEXT, PRESERVING_AND_RESETTING_STATE, REACTING_TO_INPUT_WITH_STATE, SCALING_UP_WITH_REDUCER_ADN_CONTEXT, SHARING_STATE_BETWEEN_COMPONENTS, } from "./const";


export const componentsMap: { [key in managingStateProps.RouteIdEnum]?: React.FC } = {
  [REACTING_TO_INPUT_WITH_STATE]: () => <ReactingToInputWithState />,
  [CHOOSING_THE_STATE_STRUCTURE]: () => <ChoosingTheStateStructure />,
  [SHARING_STATE_BETWEEN_COMPONENTS]: () => <SharingStateBetweenComponents />,
  [PRESERVING_AND_RESETTING_STATE]: () => <PreservingAndResettingState />,
  [EXTRACTING_STATE_INTO_A_REDUCER]: () => <ExtractingStateLogicIntoAReducer />,
  [PASSING_DATA_DEEPLY_WITH_CONTEXT]: () => <PassingDataDeeplyWithContext />,
  [SCALING_UP_WITH_REDUCER_ADN_CONTEXT]: () => <ScalingUpWithReducerAndContext />,

};

export const rComponentsMap: { [key in managingStateProps.RouteIdEnumParent]?: React.FC } = {
  [MANAGING_STATE]: () => <ManagingState />,
}
