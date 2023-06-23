import { ICON_ADD_DIR_TYPE } from "../../components/DirectoryTree/const";
import { formatToTreeData } from "../../util/utils";
import { ReactTheoryProps } from "./types";

export const getTreeData =  (data: ReactTheoryProps) => {
  const arr = Object.entries(data)?.map(([key, value = {}], index) => {
    // const { title, path, type } = value || {} as any;
    return { 
      ...value, 
      belongTo: key, 
      key: `${index}-0`, 
      // children: questionList && formatToTreeData(questionList, `${index}-0`) 
    };
  });
  return [
    {
      title: '学习react', 
      belongTo: 0, 
      key: 0, 
      path: '/react',
      id: 'learn React',
      type: ICON_ADD_DIR_TYPE,
      dirIconType: ICON_ADD_DIR_TYPE,
      children: arr
    },
    {
      title: 'react哲学', 
      belongTo: 0, 
      key: 1, 
      path: '/react',
      id: 'Thinking in React',
      type: ICON_ADD_DIR_TYPE,
      dirIconType: ICON_ADD_DIR_TYPE,
      children: []
    },
  ]
}

export const getAnchorItems = (data: ReactTheoryProps, questionId: string) => data &&  Object.entries(data)?.map(([key, value], index) => {
  const { h2, id, questionList } = value || {} as any;
  return {
    key: h2,
    href: `#${id}`,
    id,
    title:`${h2}`,
    children: questionList?.map((v: {question: string, href: string; title: string, id?: string}) => {
      // const theories = v.detail?.theory?.map(h => ({
      //   key: h.id,
      //   href: `#${h.id}`,
      //   title: `${h.title}`,
      // })) || [];
      // const summary = v.detail?.summary ? [{
      //   key: `#${v.id}__summary`,
      //   href: `#${v.id}__summary`,
      //   title: "总结",
      // }]: [];
      return {
        ...v,
        key: v.question,
        href: `#${v.id}`,
        title: `${v.question}`,
        // children: [...theories, ...summary]
      }
    })
  }
}).filter(d => !questionId || d.id === questionId);
