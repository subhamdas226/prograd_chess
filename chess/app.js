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
    function boundarycheck(position){
        var pos = [position.x , position.y]
        if (((position.x >= 8) || (position.x < 0)) || ((position.y < 0) || (position.y >= 8)))
        {
            //This move is out the chess board..
        } 
        else {
            return pos;
        }
    }
    function updatePosition(pos) {
        positionLog = [
            ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
            ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
            ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
            ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
            ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
            ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
            ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
            ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
        ];
        return (positionLog[pos[1]][pos[0]]);
    }
    function moveForward(array){
        for (i = 0; i < array.length; i++)
        {
            var queen_moves =  array[i].slice(-1);
            var pos = [queen[i].position,queen[i].direction,queen_moves]

            document.write("<br/>Queen " + (i + 1) + ":" + updatePosition(arr) + "<br/>");
            queens[i].position = pos;
            
        }
        
    }
    

    

    // Bonus 1 - Gotta keep her in the battle!

    // Bonus 2 - The queen is more powerful than what you think!

    // Bonus 3 - How about multiple queens?
