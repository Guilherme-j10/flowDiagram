import React, { useState, useRef, useEffect } from 'react';
import * as Component from './style';
import ReactFlow, { removeElements, ReactFlowProvider, addEdge, Elements, Controls, MiniMap } from 'react-flow-renderer';
import { Aside, NodeTypes } from '../Components/Aside';

let nodeId = 0;
const getNodeId = (): string => `nodeid_${nodeId++}`;

export const Application = () => {

  const ReactFlowWrapper = useRef<HTMLDivElement>((<></> as unknown) as HTMLDivElement);
  const [ ReactFlowInstance, setReactFlowInstance ] = useState<any>(null);
  const [ Elements, setElements ] = useState<Elements>([]);

  const onElementRemove = (elements: Elements) => setElements((els: Elements) => removeElements(elements, els))
  const onConnect = (edge: any) => setElements((els: Elements) => addEdge({ ...edge, animated: true, style: { stroke: '#0099ff' } }, els));
  const onLoad = (_reactFlowInstance: any) => setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event: any): void => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  const onDrop = (event: any): void => {
    event.preventDefault();

    const reactFlowsBounds = ReactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = ReactFlowInstance.project({
      x: event.clientX - reactFlowsBounds.left,
      y: event.clientY - reactFlowsBounds.top
    });

    const newNode = {
      id: getNodeId(),
      type,
      position,
      data: { label: `${type} node` }
    };

    setElements((els) => els.concat(newNode))
  }

  useEffect(() => {
    const ElementsStorage = localStorage.getItem('Element');
    if(ElementsStorage){
      setElements(JSON.parse((ElementsStorage as unknown) as string));
      return;
    }

    localStorage.setItem('Element', JSON.stringify([]));
  }, [])

  useEffect(() => {
    localStorage.setItem('Element', JSON.stringify(Elements));
    console.log(Elements);
  }, [Elements])

  const onSaveData = (node: any) => {
    setElements((els) => els.map(dados => {
      if(dados.id !== node.id) return dados;

      return {
        ...node,
        position: {
          x: node.position.x,
          y: node.position.y
        }
      };
    }))
  }

  return(
    <Component.ContainerAplication>
      <ReactFlowProvider>
        <Aside />
        <div className="SpaceFlow" ref={ReactFlowWrapper}>
          <ReactFlow 
            elements={Elements}
            onElementsRemove={onElementRemove}
            onLoad={onLoad}
            onConnect={onConnect}
            onNodeDragStop={(_, node) => onSaveData(node)}
            nodeTypes={NodeTypes}
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </Component.ContainerAplication>
  );
}