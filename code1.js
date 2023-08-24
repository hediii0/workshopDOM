let buttonplus=Array.from(document.getElementsByClassName("fa-plus-square"))
console.log(buttonplus)

for(let plus of buttonplus){
  plus.addEventListener("click",function(){
    plus.nextElementSibling.innerHTML ++
    somme()
  })
}
let buttonminus=Array.from(document.getElementsByClassName("fa-minus-square"))
    for (let minus of buttonminus){
      minus.addEventListener("click",function(){
        if(minus.previousElementSibling.innerHTML > 0){
        minus.previousElementSibling.innerHTML --
      }
        somme()
      })
    }
//*remove *//
let buttonremove=Array.from(document.getElementsByClassName("fa-trash-alt"))
for(let rmv of buttonremove){
  rmv.addEventListener("click",function(){
    rmv.parentNode.remove()
    somme()
  })
}
//**calculate sum*//

function somme(){
  let quantity=Array.from(document.getElementsByClassName("qte"))
  let prices=Array.from(document.getElementsByClassName("price"))
  let sum=0
  for(let i =0;i<prices.length;i++){
    sum += quantity[i].innerHTML*prices[i].innerHTML
  }
  return(document.getElementById("totalp").innerHTML="Shopping Bag total : $ " + sum)
  
}
//*like /dislike*//

let hearts=Array.from(document.getElementsByClassName("fa-heart"))
for(let heart of hearts){
  heart.addEventListener("click",function(){
    if(heart.style.color == "red"){
      heart.style.color = "gray"
    }
    else{
      heart.style.color="red"
    }
  })
}