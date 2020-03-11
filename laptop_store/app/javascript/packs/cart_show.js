
window.addEventListener('click',(e)=>{
  if (e.target.className == 'delete_button')
  {
    let x = e.target.parentElement.childNodes[1].innerText
    console.log(x)
  }
})