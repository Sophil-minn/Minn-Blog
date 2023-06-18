import G6 from '@antv/g6';

export const BaseConfig = {
  nameFontSize: 12,
  childCountWidth: 22,
  countMarginLeft: 0,
  itemPadding: 16,
  nameMarginLeft: 4,
  rootPadding: 18,
};
export const data = {
  nodes: [
    { id: 'node0', size: 50 },
    { id: 'node1', size: 30 },
    { id: 'node2', size: 30 },
    { id: 'node3', size: 30 },
    { id: 'node4', size: 30 },
    { id: 'node5', size: 30 },
    { id: 'node6', size: 15 },
    { id: 'node7', size: 15 },
    { id: 'node8', size: 15 },
    { id: 'node9', size: 15 },
    { id: 'node10', size: 15 },
    { id: 'node11', size: 15 },
    { id: 'node12', size: 15 },
    { id: 'node13', size: 15 },
    { id: 'node14', size: 15 },
    { id: 'node15', size: 15 },
    { id: 'node16', size: 15 },
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node1', target: 'node6' },
    { source: 'node1', target: 'node7' },
    { source: 'node2', target: 'node8' },
    { source: 'node2', target: 'node9' },
    { source: 'node2', target: 'node10' },
    { source: 'node2', target: 'node11' },
    { source: 'node2', target: 'node12' },
    { source: 'node2', target: 'node13' },
    { source: 'node3', target: 'node14' },
    { source: 'node3', target: 'node15' },
    { source: 'node3', target: 'node16' },
  ],
};
export const getConfig = (ref, minimap) => ({
  container: ref.current,
  width: 600,
  height: 400,
  plugins: [minimap],
  modes: {
    default: ['drag-canvas', 'zoom-canvas']
  },
  defaultNode: {
    type: 'circle',
    labelCfg: {
      style: {
        fill: '#000000A6',
        fontSize: 10
      }
    },
    style: {
      stroke: '#72CC4A',
      width: 150
    }
  },
  defaultEdge: {
    type: 'line'
  },
  layout: {
    type: 'force',
    preventOverlap: true,
    linkDistance: d => {
      if (d.source.id === 'node0') {
        return 100;
      }
      return 30;
    },
  },
  nodeStateStyles: {
    hover: {
      stroke: 'red',
      lineWidth: 3
    }
  },
  edgeStateStyles: {
    hover: {
      stroke: 'blue',
      lineWidth: 3
    }
  }
});

// 前端知识图谱
export const data2 = {
  id: '200000004',
  tooltip: 'Thing',
  label: '事物',
  description: null,
  descriptionZh: null,
  depth: 3,
  subTypeCount: 9,
  status: 0,
  children: [
    {
      id: '500000061',
      tooltip: 'Person',
      label: '自然人',
      description: null,
      descriptionZh: null,
      depth: 1,
      subTypeCount: 1,
      status: 0,
      children: [
        {
          id: '707000085',
          tooltip: 'FilmPerson',
          label: '电影人',
          description: null,
          descriptionZh: null,
          depth: 5,
          subTypeCount: 3,
          status: 1,
          children: [
            {
              id: '707000090',
              tooltip: 'FilmDirector',
              label: '电影导演',
              description: null,
              descriptionZh: null,
              depth: 0,
              subTypeCount: 0,
              status: 1,
              children: [],
            },
            {
              id: '707000091',
              tooltip: 'FilmWriter',
              label: '电影编剧',
              description: null,
              descriptionZh: null,
              depth: 4,
              subTypeCount: 0,
              status: 1,
              children: [],
            },
            {
              id: '707000092',
              tooltip: 'FilmStar',
              label: '电影主演',
              description: null,
              descriptionZh: null,
              depth: 4,
              subTypeCount: 0,
              status: 1,
              children: [],
            },
          ],
        },
        {
          id: '707000086',
          tooltip: 'MusicPerson',
          label: '音乐人',
          description: null,
          descriptionZh: null,
          depth: 17,
          subTypeCount: 2,
          status: 1,
          children: [],
        },
      ],
    },
    {
      id: '200000005',
      tooltip: 'Music',
      label: '音乐',
      description: null,
      descriptionZh: null,
      depth: 3,
      subTypeCount: 2,
      status: 1,
      children: [],
    },
    {
      id: '707000128',
      tooltip: 'Film',
      label: '电影',
      description: null,
      descriptionZh: null,
      depth: 4,
      subTypeCount: 0,
      status: 1,
      children: [
        {
          id: '7070032328',
          tooltip: 'Comedy',
          label: '喜剧',
          description: null,
          descriptionZh: null,
          depth: 4,
          operation: 'C',
          subTypeCount: 0,
          status: 1,
          children: [],
        },
      ],
    },
    {
      id: '707000095',
      tooltip: 'FilmGenre',
      label: '电影类别',
      description: null,
      descriptionZh: null,
      depth: 4,
      subTypeCount: 0,
      status: 1,
      children: [],
    },
    {
      id: '702000021',
      tooltip: 'Organization',
      label: '机构',
      description: null,
      descriptionZh: null,
      depth: 47,
      subTypeCount: 1,
      status: 0,
      children: [
        {
          id: '500000063',
          tooltip: 'Company',
          label: '公司',
          description: null,
          descriptionZh: null,
          depth: 4,
          subTypeCount: 2,
          status: 1,
          children: [
            {
              id: '707000093',
              tooltip: 'FilmCompany',
              label: '电影公司',
              description: null,
              descriptionZh: null,
              depth: 4,
              subTypeCount: 0,
              status: 1,
              children: [],
            },
            {
              id: '707000094',
              tooltip: 'MusicCompany',
              label: '音乐公司',
              description: null,
              descriptionZh: null,
              depth: 2,
              subTypeCount: 0,
              status: 1,
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
export const getConfig2 = (ref) => ({
  container: ref.current,
  width: 600,
  height: 400,
  modes: {
    default: [
      {
        type: 'collapse-expand',
      },
      'drag-canvas',
      'zoom-canvas',
    ],
  },
  defaultNode: {
    type: 'treeNode',
    anchorPoints: [
      [0, 0.5],
      [1, 0.5],
    ],
  },
  defaultEdge: {
    type: 'smooth',
  },
  layout: {
    // type: 'compactBox',
    direction: 'LR',
    getId: function getId(d) {
      return d.id;
    },
    getHeight: function getHeight() {
      return 16;
    },
    getWidth: function getWidth(d) {
      const labelWidth = G6.Util.getTextSize(d.label, BaseConfig.nameFontSize)[0];
      const width =
        BaseConfig.itemPadding +
        BaseConfig.nameMarginLeft +
        labelWidth +
        BaseConfig.rootPadding +
        BaseConfig.childCountWidth;
      return width;
    },
    getVGap: function getVGap() {
      return 15;
    },
    getHGap: function getHGap() {
      return 30;
    },
  },
});