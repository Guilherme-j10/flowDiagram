import React from 'react';
import * as Component from './style';
import { Handle, Position } from 'react-flow-renderer';
import { INodeProps } from '../FileNode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';

export const DestinType: React.FC <INodeProps> = ({ onDragStart, isInAside }) => {
  return(
    <Component.ContainerContent>
      {!isInAside ? (
        <Handle
          position={Position.Left}
          type="target"
          className="HandleOptionInput"
        />
      ) : false}
      <div className="ContainerContent"
        onDragStart={(even) => onDragStart ? onDragStart(even, 'destinType') : false}
        draggable={isInAside || false}
      >
        <div className="Header">
          <div className="RightSide">
            <div className="CluterElipse">
              <FontAwesomeIcon icon={Icon.faEllipsisV} />
              <FontAwesomeIcon icon={Icon.faEllipsisV} />
            </div>
            <h1>Destino</h1>
          </div>
          <FontAwesomeIcon icon={Icon.faTimes} />
        </div>
        <div className="Content">
          <select>
            <option>Tipo do destino</option>
            <option>Ramal</option>
            <option>Fila</option>
          </select>
          <select>
            <option>Selecione um ramal</option>
            <option>1015</option>
            <option>1016</option>
            <option>1017</option>
            <option>1018</option>
            <option>1019</option>
            <option>1020</option>
            <option>1021</option>
          </select>
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
    </Component.ContainerContent>
  );
}