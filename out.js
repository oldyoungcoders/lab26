const dtitle = document.querySelector('.dtitle')
const dimg = document.getElementsByTagName('img')[0];
const desc = document.querySelector('.desc')

function getPost(){
    // dtitle.innerText = localStorage.getItem('title');
    // dimg.src = localStorage.getItem('img');
    // desc.innerText = localStorage.getItem('desc')

    let get = localStorage.getItem('post');
    console.log(JSON.parse(get));

    let post = '';
    jsonPost = JSON.parse(get);
    jsonPost.slice(0,3).map(
        data => {
            console.log(data);
            post += `
            <h1 class="dtitle">${data.title}</h1>
            <img src="${data.img}" width='300px' height='300px' >
            <p class="desc">${data.desc}</p>
            `
        }
    )

    document.querySelector('.display').innerHTML = post;
}

getPost();