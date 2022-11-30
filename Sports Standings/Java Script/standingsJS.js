    
    // initTeams();
    // function initTeams(){
    //     let teams = [];
    // let team = {
    //     id : 1,
    //     img: "/Sports Standings/img/Sky.png",
    //     Name: "Chicago Sky", 
    //     W:0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: [{


    //     }]
    // }
    // teams.push(team);
    // team = {
    //     id : 2,
    //     img: "/Sports Standings/img/Sun.png",
    //     Name: "Conneticut Sun",
    //     W:0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 3,
    //     img: "/Sports Standings/img/storm.png",
    //     Name: "Seattle Storm",
    //     W:0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 4,
    //     img: "/Sports Standings/img/mystics.png",
    //     Name: "Washington Mystics",
    //     W:0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 5,
    //     img: "/Sports Standings/img/wings.png",
    //     Name: "Dallas Wings",
    //     W: 0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 6,
    //     img: "/Sports Standings/img/liberty.png",
    //     Name: "New York Liberty",
    //     W: 0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 7,
    //     img: "/Sports Standings/img/mercury.png",
    //     Name: "Phoenix Mercury",
    //     W: 0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 8,
    //     img: "/Sports Standings/img/lynx.png",
    //     Name: "Minnesota Lynx",
    //     W: 0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 9,
    //     img: "/Sports Standings/img/dream.png",
    //     Name: "Atlanta Dream",
    //     W:0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     CONF: "0-0",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 10,
    //     img: "/Sports Standings/img/sparks.png",
    //     Name: "Los Angeles Sparks",
    //     W: 0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 11,
    //     img: "/Sports Standings/img/fever.png",
    //     Name: "Indiana Fever",
    //     W: 0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);
    // team = {
    //     id : 12,
    //     img: "/Sports Standings/img/aces.png",
    //     Name: "Las Vegas Aces",
    //     W: 0,
    //     L:0,
    //     PCT:0,
    //     GB: "-",
    //     HOME: "0-0",
    //     ROAD: "0-0",
    //     STREAK:"",
    //     games: []
    // }
    // teams.push(team);

    // localStorage.setItem('teams',JSON.stringify(teams));
    // }
// initTeams();
let teams;
function loadTeams(){
    teams = JSON.parse(localStorage.getItem('teams'));
    createTable(teams);
}
    function createTable(teams){
        let tableBody = document.querySelector('#standings tbody');
        tableBody.replaceChildren();
        teams.forEach((team) => {
            const row = document.createElement('tr'); 
            const logo = document.createElement('img');
            logo.src = team.img;
            logo.classList.add('image');
            logo.classList.add('is-32x32');
            logo.classList.add('m-1')
            row.appendChild(logo);

            let cell = document.createElement('td');
            let link = document.createElement('a');
            link.href = 'teams.html?id=' + team.id;
            link.textContent = team.Name;
            cell.appendChild(link)
            row.appendChild(cell);

            cell = document.createElement('td'); 
            cell.textContent = team.W;
            row.appendChild(cell);

            cell = document.createElement('td'); 
            cell.textContent = team.L;
            row.appendChild(cell);

            cell = document.createElement('td'); 
            if(team.PCT === 0){
                cell.textContent = "0.000";
            } else{
                cell.textContent = team.PCT;
            }
            row.appendChild(cell);

            cell = document.createElement('td'); 
            cell.textContent = team.GB;
            row.appendChild(cell);

            //home
            cell = document.createElement('td'); 
            cell.textContent = team.HOME;
            cell.setAttribute('id','responsive')
            row.appendChild(cell);

            //road
            cell = document.createElement('td'); 
            cell.textContent = team.ROAD;
            cell.setAttribute('id','responsive')
            row.appendChild(cell);

            //streak
            cell = document.createElement('td'); 
            cell.textContent = team.STREAK;
            cell.setAttribute('id','responsive')
            row.appendChild(cell);

            tableBody.appendChild(row);
        });
    }

    function sort(field) {
        if (field === 'Name') {
            teams = teams.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? -1 : 1})
        } else if (field === 'W') {
            teams = teams.sort((teamA, teamB) => teamB.W - teamA.W)
        } else if (field === 'L') {
            teams = teams.sort((teamA, teamB) => teamB.L - teamA.L)
        } else if (field === 'PCT'){
            teams = teams.sort((teamA, teamB) => teamB.PCT - teamA.PCT)
        } else if (field === 'GB') {
            teams = teams.sort((teamA, teamB) => teamA.GB - teamB.GB)
        }
        createTable(teams);
    }

//bulma js for hamburger bar

//makes hamburger bar responsive
document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Add a click event on each of them
$navbarBurgers.forEach( el => {
el.addEventListener('click', () => {

// Get the target from the "data-target" attribute
const target = el.dataset.target;
const $target = document.getElementById(target);

// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
el.classList.toggle('is-active');
$target.classList.toggle('is-active');

});
});

});


    
