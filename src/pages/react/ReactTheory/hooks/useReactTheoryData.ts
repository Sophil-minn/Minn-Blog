import { fetchReactData } from "../../../../services/reactData"
import { useRequest } from "ahooks"
import { ReactTheoryProps } from "../types";

function useReactTheoryData(questionId: string) {
  const { data = {}, loading } = useRequest(fetchReactData, {
    defaultParams: [questionId]
  }) as { data: Record<string, ReactTheoryProps>, loading: boolean };

  return { loading, data };
  
}

export default useReactTheoryData;
