import { fetchReactData } from "../../../../services/reactData"
import { useRequest } from "ahooks"

function useData() {
  const { data = {}, loading } = useRequest(fetchReactData, {
    defaultParams: ['']
  }) as { data: Record<string, reactTheory.ReactTheoryProps>, loading: boolean };

  return { loading, data };
  
}

export default useData;
