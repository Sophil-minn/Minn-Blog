/* 
* Graph 是 G6 图表的载体，所有的 G6 节点实例操作以及事件，行为监听都在 Graph 实例上进行。
* Graph 的初始化通过 new 进行实例化，实例化时需要传入需要的参数
*/ 
export const getConfig = (ref, Util) => ({
  container: ref.current, // 图的 DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 HTML 节点对象。
  width: 800, // 指定画布宽度，单位为 'px'，默认为画布容器宽度。
  height: 400,  // 指定画布高度，单位为 'px'，默认为画布容器高度。
  fitView: true, // 是否开启画布自适应。开启后图自动适配画布大小。
  /*
  * fitView 为 true 时生效。图适应画布时，指定四周的留白。
  * 可以是一个值, 例如：fitViewPadding: 20
  * 也可以是一个数组，例如：fitViewPadding: [ 20, 40, 50, 20 ]
  * 当指定一个值时，四边的边距都相等，当指定数组时，数组内数值依次对应 上，右，下，左四边的边距。
  * GraphOptions.fitCenter *开启后，图将会被平移，图的中心将对齐到画布中心，但不缩放。优先级低于 fitView
  */
  fitViewPadding: [10, 20],
  // Mindmap 脑图树 布局配置 https://g6.antv.antgroup.com/api/tree-graph-layout/mindmap#layoutcfggetside
  layout: {
    // Mindmap 脑图树
    type: 'mindmap', 
     /* 
    * 树布局的方向，默认为 'H'，其他选项说明
    * H：horizontal（水平）—— 根节点的子节点分成两部分横向放置在根节点左右两侧
    * V：vertical （竖直）—— 将根节点的所有孩子纵向排列
    */
    direction: 'H',
    // 每个节点的高度, 是否必须：false
    getHeight: () => {
      return 24;
    },
    // 每个节点的宽度, 是否必须：false
    getWidth: (node) => {
      return node.level === 0 ?
        Util.getTextSize(node.label, 16)[0] + 12 :
        Util.getTextSize(node.label, 12)[0];
    },
    // 每个节点的垂直间隙 是否必须：false
    getVGap: () => {
      return 10;
    },
    // 每个节点的水平间隙  是否必须：false
    getHGap: () => {
      return 60;
    },
    /*
    * 默认值：'right'
    * 是否必须：false
    * 说明：节点排布在根节点的左侧/右侧。若设置了该值，则所有节点会在根节点同一侧，即 direction = 'H' 不再起效。
    * 若该参数为回调函数，则可以指定每一个节点在根节点的左/右侧。
    */
    getSide: (node) => {
      return node.data.direction;
    },
  },
  // https://g6.antv.antgroup.com/manual/middle/elements/edges/default-edge
  defaultEdge: {
    // cubic-horizontal：水平方向的三阶贝塞尔曲线，不考虑用户从外部传入的控制点；
    type: 'cubic-horizontal',
    // https://g6.antv.antgroup.com/manual/middle/elements/edges/default-edge#%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7-style
    style: {
      lineWidth: 2,
    },
  },
  // 最小缩放比例。若 fitView、zoom、zoomTo 等操作导致图的缩放比例小于该值，则将使用该值进行缩放，并返回 false
  minZoom: 0.1,
  // 设置画布的交互模式 https://g6.antv.antgroup.com/manual/middle/states/mode
  modes: {
    default: ['drag-canvas', 'zoom-canvas', 'dice-mindmap'],
  },
})
export const dataTransform = (data) => {
  const changeData = (d, level = 0, color) => {
    const data = {
      ...d,
    };
    switch (level) {
      case 0:
        data.type = 'dice-mind-map-root';
        break;
      case 1:
        data.type = 'dice-mind-map-sub';
        break;
      default:
        data.type = 'dice-mind-map-leaf';
        break;
    }

    data.hover = false;

    if (color) {
      data.color = color;
    }

    if (level === 1 && !d.direction) {
      if (!d.direction) {
        data.direction = d.id.charCodeAt(d.id.length - 1) % 2 === 0 ? 'right' : 'left';
      }
    }

    if (d.children) {
      data.children = d.children.map((child) => changeData(child, level + 1, data.color));
    }
    return data;
  };
  return changeData(data);
};

export const colorArr = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#6F5EF9',
  '#6DC8EC',
  '#D3EEF9',
  '#DECFEA',
  '#FFE0C7',
  '#1E9493',
  '#BBDEDE',
  '#FF99C3',
  '#FFE0ED',
  '#CDDDFD',
  '#CDF3E4',
  '#CED4DE',
  '#FCEBB9',
  '#D3CEFD',
  '#945FB9',
  '#FF9845',
];