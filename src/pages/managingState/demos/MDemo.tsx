import React from 'react'
import { useParams } from 'react-router-dom';
import { componentsMap } from './config';
import { CHOOSING_THE_STATE_STRUCTURE, EXTRACTING_STATE_INTO_A_REDUCER, PASSING_DATA_DEEPLY_WITH_CONTEXT, PRESERVING_AND_RESETTING_STATE, REACTING_TO_INPUT_WITH_STATE, SCALING_UP_WITH_REDUCER_ADN_CONTEXT, SHARING_STATE_BETWEEN_COMPONENTS, } from "./const";

interface RouteParams {
  id: typeof REACTING_TO_INPUT_WITH_STATE | typeof CHOOSING_THE_STATE_STRUCTURE | typeof SHARING_STATE_BETWEEN_COMPONENTS | typeof PRESERVING_AND_RESETTING_STATE | typeof EXTRACTING_STATE_INTO_A_REDUCER | typeof PASSING_DATA_DEEPLY_WITH_CONTEXT | typeof SCALING_UP_WITH_REDUCER_ADN_CONTEXT
}

export default function MDemo() {
  const { id } = useParams() as unknown as RouteParams;
  console.log('id: ', id);

  const Comp = id ? componentsMap?.[id] || undefined : undefined;
  console.log('Comp: ', Comp);
  return (
    <div>
      {Comp ? <Comp /> : null}
    </div>
  )
}
