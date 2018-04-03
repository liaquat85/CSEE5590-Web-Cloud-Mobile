playRoshambo = function (clientGesture) {
            //server always chooses rock
            var computerChoice = Math.random();
            if (computerChoice <0.34){
                computerChoice = "rock";
            }else if(computerChoice <=0.67){
                computerChoice = "paper";
            }
            else{
                computerChoice = "scissors";
            }

            var clc = clientGesture;
            var cuc = computerChoice;

                if(clc===cuc){
                    result=  "Both have same thing " + clc + " The result is a tie!";
                }
                else if(clc==="rock"){
                    if(cuc==="scissors"){
                        result = "User choice " + clc + " Computer choice " + cuc + " User wins";
                    }
                    else{
                        result =  "User choice " + clc + " Computer choice " + cuc + " Computer wins";
                    }
                }
                else if(clc==="paper"){
                    if(cuc==="rock"){
                        result =  "User choice " + clc + " Computer choice " + cuc + " User wins";
                    }
                    else{
                        result =  "User choice " + clc + " Computer choice " + cuc + " Computer wins";
                    }
                }
                else if(clc==="scissors"){
                    if(cuc==="rock"){
                        result =  "User choice " + clc + " Computer choice " + cuc + " User wins";
                    }
                    else{
                        result= "User choice " + clc + " Computer choice " + cuc + " Computer wins";
                    }
                }


            alert(result + "!");
        }