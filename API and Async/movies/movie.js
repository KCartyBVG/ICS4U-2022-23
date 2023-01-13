const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64b91a1026msh0234989feb35615p19ffbdjsn680744288036',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
	.catch(err => console.error(err));