import { fetchReactData } from "../../services/reactData"
import { useRequest } from "ahooks"
import { ReactTheoryProps } from "../types";
import { formatToTreeData } from "../../util/utils";

function useReactTheoryData(type: string) {
  const { data = {}, loading } = useRequest(fetchReactData, {
    ready: !!type,
    defaultParams: [type]
  }) as { data: Record<string, ReactTheoryProps>, loading: boolean };

  const treeData: any = data &&  Object.entries(data)?.map(([key, value], index) => {
    const { title, questionList } = value || {} as any;
    return { title, belongTo: key, key: `${index}-0`, children: questionList && formatToTreeData(questionList, `${index}-0`) }
  });

  console.log('treeData: ', treeData);

  return { treeData, loading, contentList: Object.values(data) , contentData: data?.[type] } as const;
  
}

export default useReactTheoryData;