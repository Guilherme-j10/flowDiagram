import React from 'react';
import { Handle } from 'react-flow-renderer';
import * as Component from './style';
import { INodeProps } from '../FileNode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';

export const NumberOptionType: React.FC <INodeProps> = ({ onDragStart, isInAside }) => {
  return(
    <Component.ContainerGlobal>
      {!isInAside ? (
        <Handle
          position='left'
          type="target"
          className="HandleOptionInput"
        />
      ) : false}
      <div className="ContainerContent"
        onDragStart={(even) => onDragStart ? onDragStart(even, 'numberOptionsType') : false}
        draggable={isInAside || false}
      >
        <div className="Header">
          <div className="RightSide">
            <div className="CluterElipse">
              <FontAwesomeIcon icon={Icon.faEllipsisV} />
              <FontAwesomeIcon icon={Icon.faEllipsisV} />
            </div>
            <h1>Digito</h1>
          </div>
          <FontAwesomeIcon icon={Icon.faTimes} />
        </div>
        <div className="Content">
          <input type="text" defaultValue="?" placeholder="?" />
        </div>
      </div>
      {!isInAside ? (
        <Handle
          position='right'
          type="source"
          id="r"
          className="HandleOptionOutPut"
        />
      ) : false}
    </Component.ContainerGlobal>
  );
}