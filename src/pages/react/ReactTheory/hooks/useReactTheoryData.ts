import { fetchReactData } from "../../../../services/reactData"
import { useRequest } from "ahooks"
import { ReactTheoryProps } from "../types";

function useReactTheoryData() {
  const { data = {}, loading } = useRequest(fetchReactData, {
  }) as { data: Record<string, ReactTheoryProps>, loading: boolean };

  return { loading, data };
  
}

export default useReactTheoryData;
