import { INode, direction } from "./Node";

export const BFS = (grid: INode[][], rowSize: number, colSize: number) => {
   console.log("🚀 ~ file: BFS.ts ~ line 4 ~ BFS ~ grid", grid)
   const startNode = grid.find(row => {
      return row.find(node => node.isStartNode)
   })?.find(node => node.isStartNode)
   const endNode = grid.find(row => {
      return row.find(node => node.isEndNode)
   })?.find(node => node.isEndNode)
   const queue = new Array<INode>();
   if (!startNode || !endNode) return false;
   queue.push(startNode);
   let isPathFound = false;
   while (queue.length > 0) {
      let currNode = queue.shift();
      // if (queue.length > 15) break;
      if (!currNode) break;
      currNode.isVisited = true;
      // console.log("🚀 ~ file: BFS.ts ~ line 16 ~ BFS ~ currNode", currNode)
      const neighbors = getNeighbors(currNode, grid, rowSize, colSize);
      // console.log("🚀 ~ file: BFS.ts ~ line 21 ~ BFS ~ neighbors", neighbors)
      for (let neighbor of neighbors) {
         if (neighbor === endNode) {
            isPathFound = true;
            console.log("🚀 ~ file: BFS.ts ~ line 27 ~ BFS ~ isPathFound", isPathFound)
            break;
         }
         queue.push(neighbor);
      }
      if (isPathFound) return generatePath(grid, startNode, endNode);
   }
   return false;
}

const generatePath = (grid: Array<Array<INode>>, startNode: INode, endNode: INode) => {
   let path = new Array<INode>();
   let currNode = endNode;
   let orderCounter = 0;
   while (currNode != startNode) {
      console.log("🚀 ~ file: BFS.ts ~ line 40 ~ generatePath ~ currNode", currNode)
      if (!currNode) break;
      let currX = currNode.posX, currY = currNode.posY;
      switch (currNode.directions) {
         case "DOWN":
            currX -= 1;
            break;
         case "UP":
            currX += 1;
            break;
         case "LEFT":
            currY += 1;
            break;
         case "RIGHT":
            currY -= 1;
            break;
         default:
            break;
      }
      currNode = grid[currX][currY]
      currNode.order = orderCounter;
      currNode.isPath = true;
      orderCounter++;

   }
   return grid;
}



const getNeighbors = (currNode: INode, grid: Array<Array<INode>>, rowSize: number, colSize: number) => {
   let dirs = [1, 0, -1, 0, 1];
   const directions = ["DOWN", "LEFT", "UP", "RIGHT"]
   let neighbors: Array<INode> = new Array();
   let currX = currNode.posX, currY = currNode.posY;
   for (let idx = 0; idx < dirs.length - 1; idx++) {
      let newX = currX + dirs[idx], newY = currY + dirs[idx + 1];
      if (newX < 0 || newX >= rowSize || newY < 0 || newY >= colSize || grid[newX][newY].isVisited || grid[newX][newY].isWall) continue;
      const newNeighbor = grid[newX][newY];
      newNeighbor.isVisited = true;
      newNeighbor.directions = directions[idx] as direction;
      neighbors.push(newNeighbor);
   }
   return neighbors;
}