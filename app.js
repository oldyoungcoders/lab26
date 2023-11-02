const post  = document.querySelector('.post')
const title = document.querySelector('.title')
const img = document.querySelector('.image')
const desc = document.querySelector('.desc')
let i = 1;

function savePost(){
    //localStorage/setItem()->hadgalah,getItem()->avah

    let data = {
        id : i++,
        title : title.value,
        img : img.value,
        desc : desc.value
    }

    let sav = JSON.parse(localStorage.getItem('post')) || [];
    sav.push(data);
    //JSON.stringify() --> string luu huvruuldeg
    localStorage.setItem('post',JSON.stringify(sav));
}

post.addEventListener('click',()=>{
    savePost();
})