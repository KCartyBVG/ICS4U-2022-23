let currentPage = 1;
  let teams=[];
  let teamItem=[];
  let games=[];
  let sortedGames=[];
  const numPerPage = 3;
  let lastPage;
  let filteredGames=[];

  function start() {
    const dataString = localStorage.getItem('teams');
    teams = JSON.parse(dataString);
    let params = (new URL(document.location)).searchParams;

    const team = Number(params.get('id')) - 1; 

    teamItem = teams[team]

    const logo = document.createElement('img');
    logo.src = teamItem.img;
    logo.classList.add('image','m-auto','is-96x96')

    document.querySelector('#logo').append(logo)
    document.querySelector('#title').append(teams[team].Name);

    document.querySelector('#wins').append(teamItem.W)
    document.querySelector('#losses').append(teamItem.L)
    document.querySelector('#pct').append(teamItem.PCT)

    games = teams[team].games
    sortedGames = games.sort((a, b) => new Date(b.date) - new Date(a.date)) //sorts for most recent games first

    showPage(1, sortedGames); 
  }

  function showPage(pageNum, gameList){
    if (!(filteredGames.length === 0)) { //if the games have been filtered
      gameList = filteredGames
    }
    let numPages = Math.ceil(gameList.length/numPerPage)
    document.getElementById('pageBtns').innerHTML = ""

    const start = (pageNum-1) * numPerPage;
    const currPageGames = gameList.slice(start,start+numPerPage);

    createTiles(currPageGames);
    
    if(numPages>1) { //if theres more than one page
      for (let i = 1;i<= numPages; i++) { //makes all the pagination buttons
      let btn = document.createElement('button')
      btn.classList.add('button')
      btn.setAttribute('id', i)
      btn.textContent = i

      btn.setAttribute('onclick', 'numClicked(this.id);')
      document.getElementById('pageBtns').appendChild(btn)
      }  
      document.getElementById(currentPage).classList.add('is-dark')
      if (!(lastPage == null) && !(currentPage === lastPage)) {
        document.getElementById(lastPage).classList.remove('is-dark')
      }
      document.getElementById('prevPage').disabled = false
      document.getElementById('nextPage').disabled = false
      document.getElementById('prevPage').style.visibility = 'visible'
      document.getElementById('nextPage').style.visibility = 'visible'

      if (Number(currentPage) === numPages) { //if on the last page, disabling the next page button
        document.getElementById('nextPage').disabled = true
      } else if (currentPage === 1) { //if on the first page, diabling the prevpage button
        document.getElementById('prevPage').disabled = true
      } else if (numPages === 1) {
        document.getElementById('prevPage').disabled = true
        document.getElementById('nextPage').disabled = true
      }} else {
        document.getElementById('prevPage').style.visibility = 'hidden'
        document.getElementById('nextPage').style.visibility = 'hidden'
      }
  }  

  function numClicked(value){ // when a number is clicked
    lastPage=currentPage
    currentPage = value
    showPage(value, sortedGames)
  }
  function prevPage() {
    lastPage = currentPage
    currentPage--;
    showPage(currentPage, sortedGames)
  }

  function nextPage() { 
    lastPage = currentPage
    currentPage++;
    showPage(currentPage, sortedGames)
  }

  function createTiles(currPageGames) {
    let gameBoard = document.querySelector('#games');
    if (!(gameBoard.childNodes.length === 0)) {
      while (gameBoard.childNodes.length > 0) {
        gameBoard.removeChild(gameBoard.firstChild)
      }
    }
    currPageGames.forEach((game) => { //makes a tile for each game
        let parent = document.createElement('div')
        parent.setAttribute('id', 'parentDiv')
        parent.classList.add('is-parent','m-6')
        gameBoard.appendChild(parent)

        let box = document.createElement('div')
        box.classList.add('tile','is-child','box','columns')

        //this team
        let thisTeam = document.createElement('div')
        thisTeam.classList.add('is-size-5','column','is-one-third',"m-auto")
        thisTeam.setAttribute('id', 'gameText')
        // our team name
        let ourName = document.createElement('h1')
        ourName.textContent = teamItem.Name;
        ourName.classList.add('has-text-weight-semibold')
        thisTeam.appendChild(ourName)
        //team points
        let ourPoints = document.createElement('p')
        ourPoints.textContent = game.ourscore
        thisTeam.appendChild(ourPoints)
        box.appendChild(thisTeam)
      
        const oppId = game.opponent

        //middle
        const middle = document.createElement('div')
        middle.classList.add('is-one-third','column','columns','m-auto')
        middle.setAttribute('id', 'gameText')        
        //our logo
        const pic1 = document.createElement('div')
        pic1.classList.add('column', 'is-one-third')
        const ourLogo = document.createElement('img')
        ourLogo.src = teamItem.img;
        ourLogo.classList.add('image','is-64x64', 'm-auto')
        pic1.appendChild(ourLogo)
        middle.appendChild(pic1)
        //vs
        const versus = document.createElement('h1')
        versus.textContent = "VS."
        versus.classList.add('column', 'is-one-third','m-auto')
        middle.appendChild(versus)
        //date
        const dateDiv = document.createElement('div')
        dateDiv.textContent = game.date
        versus.appendChild(dateDiv)
        //opp logo
        const pic2 = document.createElement('div')
        pic2.classList.add('column', 'is-one-third')
        const oppLogo = document.createElement('img')
        oppLogo.src = teams[oppId-1].img
        oppLogo.classList.add('image','is-64x64','m-auto')
        pic2.appendChild(oppLogo)
        middle.appendChild(pic2)

        box.appendChild(middle)

        // opponents
        let oppTeam = document.createElement('div')
        oppTeam.classList.add('is-size-5','is-two-third','column','m-auto')
        oppTeam.setAttribute('id', 'gameText')
        //opponent team name
        let oppName = document.createElement('h1')
        oppName.classList.add('has-text-weight-semibold')
        oppName.textContent = teams[oppId-1].Name
        oppTeam.appendChild(oppName)
        //opp points
        let oppPoints = document.createElement('p')
        oppPoints.textContent = game.opponentscore
        oppTeam.appendChild(oppPoints)
        box.appendChild(oppTeam)

        parent.appendChild(box)
    })
  }
  

  function filter() {
    const dataString = localStorage.getItem('teams');
    const teams = JSON.parse(dataString);
    let params = (new URL(document.location)).searchParams;
    const startDate = new Date(document.querySelector('#start').value)
    const endDate = new Date(document.querySelector('#end').value)

    if (isNaN(startDate) || isNaN(endDate)) { //if either date is not selected
      let notif = document.createElement('div')
      notif.classList.add('notification', 'is-danger','is-light')
      notif.setAttribute('id','remove')
      const del = document.createElement('button')
      del.classList.add('delete')
      notif.textContent = "Please ensure both dates are inputed"
      const body = document.getElementById('section')
      notif.appendChild(del)
      body.appendChild(notif)
      del.setAttribute('onclick',"this.parentElement.style.display='none'")
    } else if (startDate>endDate) { //
      let notif = document.createElement('div')
      notif.classList.add('notification', 'is-danger','is-light')
      notif.setAttribute('id','remove')
      const del = document.createElement('button')
      del.classList.add('delete')
      notif.textContent = "Please make sure dates are in order"
      const body = document.getElementById('section')
      notif.appendChild(del)
      body.appendChild(notif)
      del.setAttribute('onclick',"this.parentElement.style.display='none'")
    } else{
    filteredGames = sortedGames.filter(function(game) {
      const gameDate = new Date(game.date);
      return (gameDate >= startDate && gameDate <= endDate);
    })

    document.getElementById('remove').remove()

    currGameList = filteredGames
    showPage(1, filteredGames)
    }
  }