
var rover = {
  name: "R1",
  direction: "N",
  x: 4,
  y: 4,
  travelLog: ['x: 4, y: 4']
}

var grid = [
  [null,null,null,null,null,null,obstacle,null,null,null],
  [null,null,null,null,null,null,null,null,null,obstacle],
  [null,null,null,null,obstacle,null,null,null,null,null],
  [null,obstacle,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,obstacle,null],
  [null,null,null,null,obstacle,null,null,null,null,null],
  [null,null,null,null,null,null,obstacle,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,obstacle,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],

]

var gridWidth = grid[0].length;
var gridHeight = grid.length;




// ======================

// ======================



function turnLeft(rover){
  switch (rover.direction) {
    case "N": rover.direction = "W"
    console.log("turnLeft was called!")
    break;

    case "W": rover.direction = "S"
    console.log("turnLeft was called!")
    break;

    case "S": rover.direction = "E"
    console.log("turnLeft was called!")
    break;

    case "E": rover.direction = "N"
    console.log("turnLeft was called!")
    break;

    default: console.log("no direction was selected");
    break;
  }
}


function turnRight(rover){
  switch (rover.direction) {
    case "N": rover.direction = "E";
      console.log("turnRight was called!")
    break;

    case "E": rover.direction = "S";
      console.log("turnRight was called!")
    break;

    case "S": rover.direction = "W";
      console.log("turnRight was called!")
    break;

    case "W": rover.direction = "N";
      console.log("turnRight was called!")
    break;

    default: console.log("no direction was selected");
      break;
  }
}

function moveForward(rover,grid){
  switch (rover.direction) {
    case "N":
      
      if (rover.y !== 0) {
        grid[rover.y][rover.x] = null; // Clean the former position
        rover.y = rover.y - 1; // Change the position 
        grid[rover.y][rover.x] = rover.name; // Write the new position
        rover.travelLog.push(`x: ${rover.x}, y: ${rover.y}`);
        console.log("moveForward was called")
      }
 
      else { 
      console.log("Warning! Going out of bounds")
      }
    break;
    
    case "S": 
      if (rover.y !== 0) {
        (grid[rover.y][rover.x] = null) 
        rover.y = rover.y + 1;
        grid[rover.y][rover.x] = rover.name;
        console.log("moveForward was called")
      } 
      
      else {
        console.log("Warning! Going out of bounds")
      }
    break;

    case "W": 
      if (rover.x !== 0) {
        (grid[rover.y][rover.x] = null) 
        rover.x = rover.x - 1;
        grid[rover.y][rover.x] = rover.name
        console.log("moveForward was called")
      }
      
      else {
        console.log("Warning! Going out of bounds")
      }
    break;

    case "E": 
      if (rover.x !== 0) {
        (grid[rover.y][rover.x] = null) 
        rover.x = rover.x + 1;
        grid[rover.y][rover.x] = rover.name
        console.log("moveForward was called")
      }
        
      else {
        console.log("Warning! Going out of bounds")
      }
  }
}

function moveBackward(rover,grid){
  switch (rover.direction) {
    case "N":
      
      if (rover.y !== 0) {
        grid[rover.y][rover.x] = null;
        rover.y = rover.y + 1; 
        grid[rover.y][rover.x] = rover.name; 
        rover.travelLog.push(`x: ${rover.x}, y: ${rover.y}`);
        console.log("moveBackward was called")
      }
 
      else {
      console.log("Warning! Going out of bounds")
      }
    break;
    
    case "S": 
      if (rover.y !== 0) {
        (grid[rover.y][rover.x] = null) 
        rover.y = rover.y - 1;
        grid[rover.y][rover.x] = rover.name;
        console.log("moveBackward was called")
      } 
      
      else {
        console.log("Warning! Going out of bounds")
      }
    break;

    case "W": 
      if (rover.x !== 0) {
        (grid[rover.y][rover.x] = null) 
        rover.x = rover.x + 1;
        grid[rover.y][rover.x] = rover.name
        console.log("moveBackward was called")
      }
      
      else {
        console.log("Warning! Going out of bounds")
      }
    break;

    case "E": 
      if (rover.x !== 0) {
        (grid[rover.y][rover.x] = null) 
        rover.x = rover.x - 1;
        grid[rover.y][rover.x] = rover.name
        console.log("moveBackward was called")
      }
        
      else {
        console.log("Warning! Going out of bounds")
      }
  }
}
function readCommands(commands) {
  for (var i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "f":
      moveForward(rover,grid);
      break;

      case "r":
      turnRight(rover);
      break;

      case "l":
      turnLeft(rover);
      break;

      default: console.log("please input a valid command: f, r or l")
      break;
    }
  }
}

