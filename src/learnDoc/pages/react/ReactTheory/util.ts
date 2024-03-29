import { ICON_ADD_DIR_TYPE } from "../../../components/DirectoryTree/const";


export const getTreeData =  (data: reactTheory.ReactTheoryProps) => {
  const arr = Object.entries(data)?.map(([key, value = {}], index) => {
    return { 
      ...value, 
      belongTo: key, 
      key: `${index}-0`, 
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

export const getAnchorItems = (data: reactTheory.ReactTheoryProps, questionId: string) => data &&  Object.entries(data)?.map(([key, value], index) => {
  const { h2, id, questionList } = value || {} as any;
  return {
    key: h2,
    href: `#${id}`,
    id,
    title:`${h2}`,
    children: questionList?.map((v: {question: string, href: string; title: string, id?: string}) => {
      return {
        ...v,
        key: v.question,
        href: `#${v.id}`,
        title: `${v.question}`,
      }
    })
  }
}).filter(d => !questionId || d.id === questionId);

export const getMenuItems = (data: reactTheory.ReactTheoryProps) => data &&  Object.entries(data)?.map(([key, value], index) => {
  const { h2, id } = value || {} as any;
  return {
    key: h2,
    path: `#/react/react-theory/${id}`,
    id,
    title:`${h2}`,
  }
})

export const getTheoryData = (data: Record<string, reactTheory.ReactTheoryProps>, questionId: string) => {
  const anchorItems = getAnchorItems(data, questionId);
  const contentData =  questionId ? [data?.[questionId]]: Object.values(data);
  return { contentList: contentData, anchorItems}
}
