function addGame() {
    const dataString = localStorage.getItem('teams');
    const teams = JSON.parse(dataString);

    const winTeamId = document.querySelector("#winnerSelect").value;
    const winTeam = teams[winTeamId]
    const loseTeamId = document.querySelector("#loserSelect").value;
    const loseTeam = teams[loseTeamId]

    const winPoints = document.querySelector("#winnerPoints").value
    const losePoints = document.querySelector("#loserPoints").value
    const date = document.querySelector("#gameDate").value // yyyy-mm-dd
    //if any fields are empty, sends error notification
    if (winTeam === "Select a team" || loseTeam === "Select a team" || winPoints === "" || losePoints === "" || date === "" || (!(document.querySelector('#home').checked) && !(document.querySelector('#road').checked))) {
      let notif = document.createElement('div')
      notif.classList.add('notification', 'is-danger','is-light')
      notif.setAttribute('id','remove')
      const del = document.createElement('button')
      del.classList.add('delete')
      notif.textContent = "Please ensure all fields are filled out"
      const body = document.getElementById('body')
      notif.appendChild(del)
      body.appendChild(notif)
      del.setAttribute('onclick',"this.parentElement.style.display='none'")
      //if user inputed the same team twice
    } else if(winTeam === loseTeam) {
      let notif = document.createElement('div')
      notif.classList.add('notification', 'is-danger','is-light')
      notif.setAttribute('id','remove')
      const del = document.createElement('button')
      del.classList.add('delete')
      notif.textContent = "Please select two different teams"
      const body = document.getElementById('body')
      notif.appendChild(del)
      body.appendChild(notif)
      del.setAttribute('onclick',"this.parentElement.style.display='none'")
      // if either points are smaller than or equal to zero
    } else if(winPoints <= 0 || losePoints <= 0) {
      let notif = document.createElement('div')
      notif.classList.add('notification', 'is-danger','is-light')
      notif.setAttribute('id','remove')
      const del = document.createElement('button')
      del.classList.add('delete')
      notif.textContent = "Please input valid points"
      const body = document.getElementById('body')
      notif.appendChild(del)
      body.appendChild(notif)
      del.setAttribute('onclick',"this.parentElement.style.display='none'")
      //if the date chose is past todays date (games can't be in the future)
    }else if (new Date(date) > new Date()) {
      let notif = document.createElement('div')
      notif.classList.add('notification', 'is-danger','is-light')
      notif.setAttribute('id','remove')
      const del = document.createElement('button')
      del.classList.add('delete')
      notif.textContent = "That date hasn't happened yet"
      const body = document.getElementById('body')
      notif.appendChild(del)
      body.appendChild(notif)
      del.setAttribute('onclick',"this.parentElement.style.display='none'")
      //if the winners points are smaller than the loser's points
    }else if (Number(winPoints) < Number(losePoints)) {
      let notif = document.createElement('div')
      notif.classList.add('notification', 'is-danger','is-light')
      notif.setAttribute('id','remove')
      const del = document.createElement('button')
      del.classList.add('delete')
      notif.textContent = "Please input team with more points first"
      const body = document.getElementById('body')
      notif.appendChild(del)
      body.appendChild(notif)
      del.setAttribute('onclick',"this.parentElement.style.display='none'")
    }else {
      //getting rid of any notifications
      while(document.getElementById('body').contains(document.getElementById('remove'))) {
        document.getElementById('remove').remove()
      }
      //if the winner's points is bigger that the loser's points
      if (Number(winPoints) > Number(losePoints)) {
      //adding game to team
      const winnerGame = {'opponent': Number(loseTeamId)+1, 'ourscore':winPoints, 'opponentscore':losePoints, 'date':date}
      const loserGame = {'opponent': Number(winTeamId)+1, 'ourscore':losePoints, 'opponentscore': winPoints, 'date':date}

      winTeam.games.push(winnerGame)
      loseTeam.games.push(loserGame)
      //adding wins & losses
      winTeam.W++
      loseTeam.L++
      //changing pct
      winTeam.PCT = pct(winTeam)
      loseTeam.PCT = pct(loseTeam)
      //changing streak
      
      //win team streak
      if (winTeam.STREAK.includes("W")) {//if already on win streak
        const num = Number(winTeam.STREAK.substring(1))
        winTeam.STREAK = "W" + (num+1)
      } else { //if on losing streak
        winTeam.STREAK = "W1"
      }
      //lose team streak
      if (loseTeam.STREAK.includes("L")) { //if already on losing streak
        const num = Number(loseTeam.STREAK.substring(1))
        loseTeam.STREAK = "L" + (num+1)
      } else { //if on win streak
        loseTeam.STREAK = "L1"
      }
      const checked = document.querySelector('input[name="answer"]:checked').value;
      //if winning team is home
      if (checked === "home") {
        //changing home for win team
        const temp = Number(winTeam.HOME.substring(0, winTeam.HOME.indexOf('-'))) + 1
        const end = winTeam.HOME.substring(winTeam.HOME.indexOf('-'))
        winTeam.HOME = temp + end 
        //changing road for losing team
        const temp2 = Number(loseTeam.ROAD.substring(loseTeam.ROAD.indexOf("-")+1)) + 1
        const start = loseTeam.ROAD.substring(0, loseTeam.ROAD.indexOf("-")+1)
        loseTeam.ROAD = start + temp2
      } else{
        //changing road for win team
        const temp3 = Number(winTeam.ROAD.substring(0, winTeam.ROAD.indexOf('-'))) + 1
        const end1 = winTeam.ROAD.substring(winTeam.ROAD.indexOf('-'))
        winTeam.ROAD = temp3+end1
        //changing home for lose team
        const temp4 = Number(loseTeam.HOME.substring(loseTeam.HOME.indexOf("-")+1)) + 1
        const start1 = loseTeam.HOME.substring(0, loseTeam.HOME.indexOf("-")+1)
        loseTeam.HOME = start1 + temp4
      }      
    } else if (winPoints === losePoints) { //if tied
      const winnerGame = {'opponent': loseTeam+1, 'ourscore':winPoints, 'opponentscore':losePoints, 'date':date}
      const loserGame = {'opponent': winTeam+1, 'ourscore':losePoints, 'opponentscore': winPoints, 'date':date}

      teams[winTeam].games.push(winnerGame)
      teams[loseTeam].games.push(loserGame)
    }

    //gb
    let highestTeamNum = 0
    for (let i = 1; i <= teams.length-1; i++) {
      if (teams[highestTeamNum].W < teams[i].W){
        highestTeamNum = i;
      }
    }
    const highTeam = teams[highestTeamNum]

    teams.forEach(team => {
      if (team === highTeam) {
        team.GB = 0
      } else {
        const diffWins = Number(highTeam.W) -Number(team.W)
        const diffLosses = Math.abs(Number(highTeam.L)-Number(team.L))
        team.GB = (diffWins + diffLosses)/2
      }
    });


    localStorage.setItem('teams',JSON.stringify(teams));
    resetForm();
    }    
  }
  //reseting form after submitting
  function resetForm(){
    document.getElementById("winnerSelect").value = "Select a team";
    document.getElementById("loserSelect").value = "Select a team";
    document.getElementById("winner").reset();
    document.getElementById("loser").reset();
    document.getElementById("gameDate").value = "mm/dd/2022"
    document.querySelector('input[name="answer"]:checked').checked = false;
  }
  function pct(team){    
    return (team.W/team.games.length).toFixed(3);
  }