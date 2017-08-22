/*

# Breadth First Search
+ Graph traversing algorithm
* From `starting node`traverse the graph
layerwise
+Move horizontally, visit all nodes of current layer,
then move on to next layer

* Sources:
+ https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/tutorial/
+ http://gregtrowbridge.com/a-basic-pathfinding-algorithm/

*/

let gridSize = 4
let grid = []
for (let i = 0; i < gridSize; i++) {
  grid[i] = []
  for (let j = 0; j < gridSize; j++) {
    grid[i][j] = 'Empty'
  }
}

grid[0][0] = "Start"
grid[2][2] = "Goal"

grid[1][1] = "Obstacle"
grid[1][2] = "Obstacle"
grid[1][3] = "Obstacle"
grid[2][1] = "Obstacle"

console.log(grid);

const findShortestPath = (startCoordinates, grid) => {
  const distanceFromTheTop = startCoordinates[0]
  const distanceFromTheLeft = startCoordinates[1]

  let location = {
    distanceFromTheTop: distanceFromTheTop,
    distanceFromTheLeft: distanceFromTheLeft,
    path: [],
    status: 'Start'
  }

  let queue = [location]

  while(queue.length > 0) {
    let currentLocation = queue.shift()
    // Explore North
    let newLocation = exploreInDirection(currentLocaion, 'North', grid)
    if (newLocation.status === 'Goal') {
      return newLocation.path
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation)
    }
    // Explore East
    let newLocation = exploreInDirection(currentLocaion, 'East', grid)
    if (newLocation.status === 'Goal') {
      return newLocation.path
    } else if (newLocation.status === 'Valid') {
        queue.push(newLocation)
    }
  }
}
