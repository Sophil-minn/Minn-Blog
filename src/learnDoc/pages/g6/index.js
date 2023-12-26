import React, { useCallback, useEffect } from 'react'
import G6 from '@antv/g6';
import { data, getConfig } from './mock';

const G6Demo = () => {
  const ref = React.useRef(null)
  let graph = null

  const initGraph = useCallback(() => {
    if(!graph) {
      // 实例化 Minimap
      const minimap = new G6.Minimap()
      const config = getConfig(ref, minimap);
      // 实例化 Graph
      graph = new G6.Graph(config)
    }
    
    graph.data(data)
  
    graph.render()

    graph.on('node:mouseenter', evt => {
      graph.setItemState(evt.item, 'hover', true)
    })

    graph.on('node:mouseleave', evt => {
      graph.setItemState(evt.item, 'hover', false)
    })

    graph.on('edge:mouseenter', evt => {
      graph.setItemState(evt.item, 'hover', true)
    })

    graph.on('edge:mouseleave', evt => {
      graph.setItemState(evt.item, 'hover', false)
    });
  }, [])

  useEffect(() => {
    initGraph();
  }, [initGraph])

  return <div ref={ref}></div>
}

export default G6Demo
