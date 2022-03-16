const imgs = [
  './img/mostak.jpg' ,
  './img/rafi.jpg' ,
  './img/my-self.jpg' ,
  './img/sakib.jpeg' ,
  './img/ali.jpg' ,
  './img/asif.jpg' ,
  './img/afia.jpg' ,
  './img/mahid.jpg'
];

let path = document.getElementById('img-cont');
let index = 1;
setInterval(()=>{
  if(index > imgs.length-1){
    index = 0;
  }
  path.innerHTML = `<img id="img" src="${imgs[index]}"  alt="">`
  index++;
},3000)