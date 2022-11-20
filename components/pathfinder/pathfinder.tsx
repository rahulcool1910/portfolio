import React, { useEffect, useRef, useState } from 'react';
import styles from './pathfinder.module.scss';
import Image from 'next/image';
import { RiLoader3Fill } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { SlPlus } from 'react-icons/sl';
import { useOnScreen } from '../../hooks/useOnScreen';
import { createNode } from './Node';
import { BFS } from './BFS';

const PathFinder: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  let rowSize = 5;
  let colSize = 5;
  let startNode = [0, 0];
  let endNode = [rowSize - 1, colSize - 1];
  const [grid, setGrid] = useState(
    createNode(rowSize, colSize, startNode, endNode)
  );
  // while (true) {
  if (isOnScreen) {
    console.log('🚀 ~ file: pathfinder.tsx ~ line 24 ~ grid', grid);
    const data = BFS(grid, rowSize, colSize);
    // setTimeout(() => {
    if (data) {
      setGrid(data);
    }
    // console.log('🚀 ~ file: pathfinder.tsx ~ line 24 ~ data', data);
    // }, 10000);
  }
  let currTotalBlock = 0;
  let currInnerTotalBlock = 0;

  const addDiv = (node: String) => {
    console.log('🚀 ~ file: pathfinder.tsx ~ line 36 ~ addDiv ~ node', node);
    return (
      <div
        className={styles.node_inner_circle}
        style={{
          animationDelay: `${currInnerTotalBlock++ * 0.5}s`,
        }}
      ></div>
    );
  };
  return (
    <div className={styles.container} ref={elementRef}>
      {grid.map((row) => {
        return (
          <div className={styles.node_row}>
            {row.map((node) => {
              return (
                <div
                  className={
                    styles.node +
                    ` ${node.isWall ? styles.node_wall : ''}` +
                    ` ${node.isPath ? styles.node_path : ''}` +
                    ` ${node.isEndNode ? styles.node_end : ''}` +
                    ` ${node.isStartNode ? styles.node_start : ''}` +
                    ` node-${node.posX}- ${node.posY}`
                  }
                  style={{
                    transitionDelay: `${currTotalBlock++ * 0.1615}s`,
                  }}
                >
                  {node.isPath &&
                    !node.isEndNode &&
                    !node.isStartNode &&
                    addDiv(` node-${node.posX}- ${node.posY}`)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PathFinder;
