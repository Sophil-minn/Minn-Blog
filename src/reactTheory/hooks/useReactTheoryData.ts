import { fetchReactData } from "../../services/reactData"
import { useRequest } from "ahooks"

function useReactTheoryData(type: string) {
  const { data, loading } = useRequest(fetchReactData, {
    ready: !!type,
    defaultParams: [type]
  })


  return { data, loading } as const;
}


export default useReactTheoryData;