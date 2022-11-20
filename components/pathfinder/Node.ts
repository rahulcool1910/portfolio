import { number } from "prop-types";
type direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
interface INode {
   posX: number;
   posY: number;
   isStartNode: boolean;
   isVisited: boolean;
   isEndNode: boolean;
   isWall: boolean;
   isPath: boolean;
   directions?: direction;
   order: number
}
const constructNode = (
   posX: number,
   posY: number,
   isVisited: boolean = false,
   isStartNode: boolean = false,
   isEndNode: boolean = false,
   isPath: boolean = false,
   isWall: boolean = false
): INode => {
   return {
      posX,
      posY,
      isVisited,
      isStartNode,
      isEndNode,
      isPath,
      isWall,
      order: 0
      // toggleBlock: () => {
      //    (this as any).isWall = !(this as INode).isWall;
      // },
   };
};



let wallSet = new Set<string>(["1-0", "0-2", "1-2", "3-2", "4-2", "1-4"]);

const createNode = (rowSize: number = 5, colSize: number = 5, start: Array<number>, end: Array<number>) => {
   const grid: Array<Array<INode>> = new Array(rowSize).fill(null);
   grid.forEach((row, rIdx) => {
      grid[rIdx] = new Array<INode>(colSize)
      Array(colSize).fill(colSize).forEach((node, cIdx) => {

         const isStart = rIdx == start[0] && cIdx == start[1]
         const isEnd = rIdx == end[0] && cIdx == end[1]
         const newNode = constructNode(
            rIdx,
            cIdx,
            false,
            isStart,
            isEnd,
            false,
            wallSet.has(`${rIdx}-${cIdx}`)
         )
         grid[rIdx][cIdx] = newNode;
      })
      // console.log("🚀 ~ file: Node.ts ~ line 56 ~ Array ~ newNode", grid)
   })
   // console.log("🚀 ~ file: Node.ts ~ line 60 ~ createNode ~ grid", grid)
   return grid;
}


export { createNode };
export type { INode, direction };
