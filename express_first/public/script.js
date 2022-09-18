

 let main_container=document.getElementById('container').innerText;

   url='/userapi';
   fetch(url).then((response)=>{
      return response.text();
   }).then((data)=>{
      data_obj=JSON.parse(data);

for(var i=0;i<data_obj.length;i++){
 var html = ` 
 <link rel='stylesheet' href='style.css'>
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
 rel="stylesheet">
 <div class="wrapper">
 <div class="img-container"> <a href="">
     <img src="${data_obj[i].image}">
     <div class="offer-and-time">
     <div id='offer' class="img-bottom">${data_obj[i].offer}OFF up to 100 </div><div id="time">${data_obj[i].time}</div>
     </div>
    
 </a>
 <div class="food-cart-detail">
     <a href="">
         <div class="rest-rating">
         <div id='rest' class="rest-detail">${data_obj[i].restname}
         <div id="rate">${data_obj[i].rating}</div>
         </div>
     </div>
         <div class="food-detail">
           <p>${data_obj[i].item}</p> 
           <p>${data_obj[i].rateforone} for two</p>      
         </div>
     </a>
 </div>
 <div class="cart-bottom">
     <span id='icon'class="material-icons">
         trending_up
         </span>
     <span>${data_obj[i].nooforder} orders placed from here recently</span>
 </div>
</div>
 </div>`;
 let div = document.createElement('div');
 var x=document.getElementById('container').appendChild(div);
div.innerHTML=html;
}   })
