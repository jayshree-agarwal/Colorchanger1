const but=document.querySelectorAll('.button')
const body=document.querySelector('body')
but.forEach(function(buttons){
  console.log(buttons)
  buttons.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    +
    if(e.target.id==="grey"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="yellow"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="red"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="green"){
      body.style.backgroundColor=e.target.id
    }
  })
})