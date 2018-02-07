var imgs = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg"]
var zebra = 0;
var clickCount = 0;

function nextImg(){
  clickCount++;
  if(clickCount === 3){
    clickCount = 0;
    var random = Math.round(Math.random() * imgs.length - 1)
    $("img").attr("src", imgs[random]);
    zebra = random;
  }else{
    zebra++;
    if(zebra> imgs.length-1 ){
      zebra = 0;
    }
    $("img").attr("src", imgs[zebra]);
  }
}
function prevImg(){
  zebra--;
  if(zebra<0){
    zebra = imgs.length-1;
  }
  $("img").attr("src", imgs[zebra]);
}

$(document).ready(function(){
  $(".btn[value='Skip']").on("click",nextImg);
  $(".btn[value='Back']").on("click",prevImg);
});
