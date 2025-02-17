const getNews = async() => {
    var word = document.getElementById("keyword").value;    
    console.log(word);
    document.getElementById("h1").style.display = "none";
    
    try {
        const response = await axios.get("https://newsapi.org/v2/everything?q="+ word +"&from=2025-01-17&sortBy=publishedAt&apiKey=6c171fa58b324059827c3b5bdff44cfd");
    
        
        var body = document.getElementById("news-container");


        for(var i = 0; i < response.data.articles.length; i++){
            var news = document.createElement("div");
            var title = document.createElement("p"); 
            var img = document.createElement("img");
            var desc = document.createElement("p"); 

            news.className = "news";
            title.className = "title";
            desc.className = "desc";


            

            title.innerHTML = response.data.articles[i].title;
            desc.innerHTML = response.data.articles[i].description;
            img.src = response.data.articles[i].urlToImage;

            news.appendChild(img);
            news.appendChild(title);
            news.appendChild(desc);
            body.appendChild(news);

        }
            
        
    } catch (error) {
        var desc = document.getElementById("desc");
        desc.innerHTML = "something went wrong";
        
    }

}; 
