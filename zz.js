let p=document.querySelector('p');
let button=document.querySelector('button');
button.addEventListener('click',news);

let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=f7cbf058397c4955a6d1a591d0b95380`;

function news(){
    fetch(url).then((responce)=>{

        responce.json().then((data)=>{
            p.innerText=data.articles[Math.floor(Math.random()*10)+1].title;

        })
    })
}