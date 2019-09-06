(function (){        
    let teamOneStats = {
        numShots: document.querySelector("#teamone-numshots"),
        numHits: document.querySelector("#teamone-numhits"),
        teamAvg: (Math.random()*(1 - 0.2)+0.2),
    }
    let teamOneShoot = document.querySelector("#teamone-shoot"); //button to take a shot

    let teamTwoStats = {
        numShots: document.querySelector("#teamtwo-numshots"),
        numHits: document.querySelector("#teamtwo-numhits"),
        teamAvg: (Math.random()*(1 - 0.2)+0.2),
    }
    let teamTwoShoot = document.querySelector("#teamtwo-shoot"); //button to take a shot

    let resetButton = document.querySelector("#reset");
    let resetCount = document.querySelector("#num-resets");
    
    let scoreSFX = document.querySelector("audio");

    function handleShot(team) {
        console.log(team);
        let shotCount = team.numShots.innerHTML;
        let newScore = team.numHits.innerHTML;
        let shotRand = Math.random(); 

        if (team.teamAvg >= shotRand) {
            newScore++;
            team.numHits.innerHTML = newScore;

            scoreSFX.play();
        }

        shotCount++;
        console.log(typeof(team.teamAvg))
        //handleAvg(team, shotCount, newScore);
        console.log(typeof(team.teamAvg))
        team.numShots.innerHTML = shotCount;
    }

    function resetScore() {
        resetCount.innerHTML++;

        teamOneStats.numShots.innerHTML = 0;
        teamOneStats.numHits.innerHTML = 0;
        teamTwoStats.numShots.innerHTML = 0;
        teamTwoStats.numHits.innerHTML = 0;
    }

    function handleAvg (team, teamShots, teamScore) {
        teamScore = parseInt(teamScore);

        console.log(team.teamAvg, teamScore, teamShots);

        team.teamAvg = (team.teamAvg + (teamScore/teamShots))/2;

    }

    teamOneShoot.addEventListener("click", handleShot.bind(this, teamOneStats));
    teamTwoShoot.addEventListener("click", handleShot.bind(this, teamTwoStats));
    resetButton.addEventListener("click", resetScore);
})()