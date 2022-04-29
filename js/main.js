fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5f0b401b87c948698241a2d113f7782e")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
        console.log(data.articles);
        document.querySelector('h4').innerText = data.articles[0].title
        document.querySelector('.news-body').innerText = data.articles[0].content
        document.querySelector('.news-img').src = data.articles[0].urlToImage
        document.querySelector('.news-link').href = data.articles[0].url

        document.querySelector('.lead2').innerText = data.articles[1].title
        document.querySelector('.news-body2').innerText = data.articles[1].content
        document.querySelector('.news-img2').src = data.articles[1].urlToImage
        document.querySelector('.news-link2').href = data.articles[1].url

        document.querySelector('.lead3').innerText = data.articles[2].title
        document.querySelector('.news-body3').innerText = data.articles[2].content
        document.querySelector('.news-img3').src = data.articles[2].urlToImage
        document.querySelector('.news-link3').href = data.articles[2].url

        document.querySelector('lead4').innerText = data.articles[4].title
        document.querySelector('news-body4').innerText = data.articles[4].content
        document.querySelector('.news-img4').src = data.articles[4].urlToImage
        document.querySelector('.news-link4').href = data.articles[4].url
       
        
    })
    .catch((err) => {
        console.log(`error ${err}`)
    });
