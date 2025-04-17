const getNews = async() => {
    var word = document.getElementById("keyword").value;    
    console.log(word);
    // document.getElementById("h1").style.display = "none";
    
    const response = await axios.get('https://newsapi.org/v2/everything?q='+ word +'&from=2025-04-10&sortBy=publishedAt&apiKey=6c171fa58b324059827c3b5bdff44cfd');
    console.log(response.data);

    // var imgs = [];
    
    // for(i=0; i<response.data.articles.length; i++){
    //     imgs.push(response.data.articles[i].urlToImage);

    //     document.getElementById("img").src = imgs;}

   
    // document.getElementById("desc").innerHTML = response.data.articles[0].description;
    // document.getElementById("img").src = response.data.articles[0].urlToImage;

    // var titles = [];
    // var desc = [];
    //     for(i=0; i<response.data.articles.length; i++){
    //         titles.push(response.data.articles[i].title);

         
    //     for(i=0; i<response.data.articles.length; i++){
    //         desc.push(response.data.articles[i].url);
            
    //     }
    //     }
    //     document.getElementById("title").innerHTML = titles;
    //     document.getElementById('link').href = desc;

    for (i=0; i<= response.data.articles.length; i++){
    const image = document.createElement('img');
    const news_heading = document.createElement('h1');
    const description = document.createElement('p');
    const link = document.createElement('a');

    image.src = await response.data.articles[i].urlToImage;
    news_heading.innerHTML = await response.data.articles[i].title;
    description.innerHTML = await response.data.articles[i].description;
    link.href = await response.data.articles[i].url || "#";
    link.textContent = await response.data.articles[i].url || "#";

    document.body.appendChild(image);
    document.body.appendChild(news_heading);
    document.body.appendChild(description);
    document.body.appendChild(link);

    }




    // for (i=0; i<= response.data.articles.length; i++){
    //     const description = document.createElement('p');
    //     description.innerHTML = await response.data.articles[i].description;
    //     document.body.appendChild(description);}
    

    // }


}

var a = document.createElement('a');
a.href = "123";
document.body.appendChild(a);
console.log(a);
        
        
        