import { fetchReactData } from "../../../services/reactData"
import { useRequest } from "ahooks"
import { useParams } from "react-router-dom";
import { ReactTheoryProps } from "../../react/ReactTheory/types";

function useReactTheoryData(type: string) {
  const { questionId = ''} = useParams();
  const { data = {}, loading } = useRequest(fetchReactData, {
    defaultParams: [questionId]
  }) as { data: Record<string, ReactTheoryProps>, loading: boolean };

  return { loading, data };
  
}

export default useReactTheoryData;
