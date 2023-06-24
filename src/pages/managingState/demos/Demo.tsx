import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { componentsMap, rComponentsMap } from './config';
import { CHOOSING_THE_STATE_STRUCTURE, EXTRACTING_STATE_INTO_A_REDUCER, MANAGING_STATE, PASSING_DATA_DEEPLY_WITH_CONTEXT, PRESERVING_AND_RESETTING_STATE, REACTING_TO_INPUT_WITH_STATE, SCALING_UP_WITH_REDUCER_ADN_CONTEXT, SHARING_STATE_BETWEEN_COMPONENTS, } from "./const";

interface RouteParams {
  pid: typeof MANAGING_STATE,
  id: typeof REACTING_TO_INPUT_WITH_STATE | typeof CHOOSING_THE_STATE_STRUCTURE | typeof SHARING_STATE_BETWEEN_COMPONENTS | typeof PRESERVING_AND_RESETTING_STATE | typeof EXTRACTING_STATE_INTO_A_REDUCER | typeof PASSING_DATA_DEEPLY_WITH_CONTEXT | typeof SCALING_UP_WITH_REDUCER_ADN_CONTEXT
}
export default function Demo() {
  // root组件 匹配
  const { pid, id } = useParams() as unknown as RouteParams;
  const Comp = pid ? rComponentsMap?.[pid] || undefined : undefined;
  const CComp = id ? componentsMap?.[id] || undefined : undefined;
  return (
    <div>
      {CComp ? <CComp /> : (Comp ? < Comp /> : null)}
    </div>
  )
}
