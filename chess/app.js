// Checkpoint 1 | Creating the queen object
var queen = {
    direction:"south",
    position:{
      x: 0 ,
      y: 4   }
           };
// Checkpoint 2 | Turning the queen
var inp_dir = prompt("Enter the Direction N, S, E, W, NE, NW, SE and SW ");

    var array = inp_dir.split(" "); 
    for (i = 0; i < array.length; i++)
     {
        var steps = array[i].slice(-1);
        var direction = array[i].slice(0,-1);
     }
    

     function changedirection(steps, direction) {
        switch (direction) {
            case 'S':
                queen.position.x = queen.position.x + steps;
                break;
            case 'N':
                temp = queen.position.x - steps;
                if (boundarycheck(temp)) {
                    queen.position.x = temp;
                }
                else {
                    console.log("crossing the boundary");
                }
    
                break;
            case 'E':
                temp = queen.position.x - steps;
                if (boundarycheck(temp)) {
                    queen.position.x = temp;
                }
                else {
                    console.log("crossing the boundary");
                }
                break;
            case 'W':
                temp = queen.position.x + steps;
                if (boundarycheck(temp)) {
                    queen.position.x = temp;
                }
                else {
                    console.log("crossing the boundary");
                }
                break;
            case 'SE':
                temp = queen.position.x - steps;
                if (boundarycheck(temp)) {
                    queen.position.x = temp;
                }
                else {
                    console.log("crossing the boundary");
                }
                break;
            case 'SW':
                temp = queen.position.x + steps;
                if (boundarycheck(temp)) {
                    queen.position.x = temp;
                }
                else {
                    console.log("crossing the boundary");
                }
                break;
            case 'NW':
                temp = queen.position.x - steps;
                if (boundarycheck(temp)) {
                    queen.position.x = temp;
                }
                else {
                    console.log("crossing the boundary");
                }
                break;
            case 'NE':
                temp = queen.position.x - steps;
                if (boundarycheck(temp)) {
                    queen.position.x = temp;
                }
                else {
                    console.log("crossing the boundary");
                }
                break;
    
        }
    }
// Checkpoint 3 | Moving the queen
function boundarycheck(pos){
    let pos = { 
        x: 0,
        y: 0  
       };
}

// Checkpoint 4 | Jump move the queen

// Checkpoint 5 |  Tracking the position

// Bonus 1 - Gotta keep her in the battle!

// Bonus 2 - The queen is more powerful than what you think!

// Bonus 3 - How about multiple queens?