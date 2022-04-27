fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5f0b401b87c948698241a2d113f7782e")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
        console.log(data.articles);
        document.querySelector('h4').innerText = data.articles[0].title
        document.querySelector('.news-body').innerText = data.articles[0].content
        document.querySelector('.news-img').src = data.articles[0].urlToImage
        document.querySelector('.news-link').href = data.articles[0].url
       
        
    })
    .catch((err) => {
        console.log(`error ${err}`)
    });
