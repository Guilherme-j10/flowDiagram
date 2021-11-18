import React from 'react';
import * as Component from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import { Handle, Position } from 'react-flow-renderer';

export interface INodeProps {
  onDragStart?: (event: any, nodeType: string) => void,
  isInAside: boolean
}

export const FileNode: React.FC  <INodeProps> = ({ onDragStart, isInAside }) => {

  return(
    <Component.ContainerNode>
      {!isInAside ? (
        <Handle
          position={Position.Left}
          type="target"
          className="HandleOptionInput"
        />
      ) : false}
      <div className="Container" onDragStart={(event) => onDragStart ? onDragStart(event, 'fileNodeType') : false} draggable={isInAside || false}>
        <div className="Header">
          <div className="RightSide">
            <div className="CluterElipse">
              <FontAwesomeIcon icon={Icon.faEllipsisV} />
              <FontAwesomeIcon icon={Icon.faEllipsisV} />
            </div>
            <h1>Arquivo</h1>
          </div>
          <FontAwesomeIcon icon={Icon.faTimes} />
        </div>
        <div className="ContainerContent">
          <p>Selecione um arquivo</p>
          <label>Abrir arquivos</label>
          <small>Permitidos: mp4, mp3 ...</small>
        </div>
      </div>
      {!isInAside ? (
        <Handle 
          position={Position.Right}
          type="source"
          id="b"
          className="HandleOption"
        />
      ) : false}
    </Component.ContainerNode>
  );
}