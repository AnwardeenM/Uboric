var Kitchendata=JSON.parse(localStorage.getItem("Kitchendata"));
displaydata(Kitchendata);

function sort(){
   
var priceselector = document.querySelector("#lowtohigh").value;
if(priceselector=="low"){
   Kitchendata.sort(function (a,b){
       return Number(a.price)-Number(b.price)
   })

}
if(priceselector=="high"){
   Kitchendata.sort(function (a,b){
       return Number(b.price) - Number(a.price)
   })
}
displaydata(Kitchendata);


}
function displaydata(Kitchendata){
    document.querySelector("#productcont4").innerHTML="";   
    Kitchendata.map(function (data){
var div=document.createElement("div");


var image=document.createElement("img");
image.setAttribute("src",data.image_url);
image.setAttribute("width","100%");
image.setAttribute("height","70%");


var name=document.createElement("p");
name.textContent=data.description;

var div2 = document.createElement("div");

var p1=document.createElement("p");
p1.textContent ="Rs."+ data.price;


// var p2=document.createElement("p");
// p2.textContent =data.strikedoffprice;

div2.append(p1);

var btn =document.createElement("button");
btn.textContent = "Add To Cart"


div.append(image,name,div2,btn);
document.querySelector("#productcont4").append(div);

});
}

