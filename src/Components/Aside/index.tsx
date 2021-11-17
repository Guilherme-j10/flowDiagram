import React from 'react';
import { DestinType } from '../DestinType';
import { FileNode } from '../FileNode';
import { NumberOptionType } from '../NumberOptionType';
import { RecognaizeVoiceType } from '../RecognaizeVoiceType';
import * as Component from './style';

export const NodeTypes = {
  fileNodeType: FileNode,
  numberOptionsType: NumberOptionType,
  destinType: DestinType,
  reconganaizeVoice: RecognaizeVoiceType
};

export const Aside = () => {

  const onDragStart = (event: any, nodeType: string): void => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  }

  return(
    <Component.ContainerGlobal>
      <div className="ContainerHeader">
        <h1>Arraste um para o lado</h1>
      </div>
      <div className="ContainerModule">
        <div style={{marginBottom: 10}}>
          <FileNode onDragStart={onDragStart} isInAside={true} />
        </div>
        <div style={{marginBottom: 10}}>
          <NumberOptionType onDragStart={onDragStart} isInAside={true} />
        </div>
        <div style={{marginBottom: 10}}>
          <DestinType onDragStart={onDragStart} isInAside={true} />
        </div>
        <div style={{marginBottom: 10}}>
          <RecognaizeVoiceType onDragStart={onDragStart} isInAside={true} />
        </div>
      </div>
    </Component.ContainerGlobal>
  );
}