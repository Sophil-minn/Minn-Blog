import { fetchReactData } from "../../../../services/reactData"
import { useRequest } from "ahooks"

function useReactTheoryData() {
  const { data = {}, loading } = useRequest(fetchReactData, {
  }) as { data: Record<string, reactTheory.ReactTheoryProps>, loading: boolean };

  return { loading, data };
  
}

export default useReactTheoryData;
