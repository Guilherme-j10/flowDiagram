import React from 'react';
import { INodeProps } from '../FileNode';
import { Handle, Position } from 'react-flow-renderer';
import * as Component from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';

export const RecognaizeVoiceType: React.FC <INodeProps> = ({ onDragStart, isInAside }) => {
  return(
    <Component.ContainerGlobal>
      {!isInAside ? (
        <Handle
          position={Position.Left}
          type="target"
          className="HandleOptionInput"
        />
      ) : false}
      <div className="ContainerContent"
        onDragStart={(even) => onDragStart ? onDragStart(even, 'reconganaizeVoice') : false}
        draggable={isInAside || false}
      >
        <div className="Header">
          <div className="RightSide">
            <div className="CluterElipse">
              <FontAwesomeIcon icon={Icon.faEllipsisV} />
              <FontAwesomeIcon icon={Icon.faEllipsisV} />
            </div>
            <h1>Reconhecimento de voz</h1>
          </div>
          <FontAwesomeIcon icon={Icon.faTimes} />
        </div>
        <div className="Content">
          <input type="text" defaultValue="????" placeholder="?" />
        </div>
      </div>
      {!isInAside ? (
        <Handle
          position={Position.Right}
          type="source"
          id="r"
          className="HandleOptionOutPut"
        />
      ) : false}
    </Component.ContainerGlobal>
  );
}