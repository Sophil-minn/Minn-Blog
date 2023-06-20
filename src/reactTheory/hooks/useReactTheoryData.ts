import { fetchReactData } from "../../services/reactData"
import { useRequest } from "ahooks"
import { ReactTheoryProps } from "../types";
import { getTreeData, getAnchorItems } from "../util";
import { useParams } from "react-router-dom";

function useReactTheoryData(type: string) {
  const { questionId = ''} = useParams();
  const { data = {}, loading } = useRequest(fetchReactData, {
    // ready: !!questionId,
    defaultParams: [questionId]
  }) as { data: Record<string, ReactTheoryProps>, loading: boolean };

  const treeData = getTreeData(data);

  const anchorItems = getAnchorItems(data);

  return { treeData, loading, contentList: Object.values(data) , contentData: data?.[questionId] && [data?.[questionId]], anchorItems };
  
}

export default useReactTheoryData;
