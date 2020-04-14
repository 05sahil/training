document.addEventListener("DOMContentLoaded", function(event) { 
  window.addEventListener('click',(e)=>{
  if (e.target.className == 'delete_button')
  {
    let x = e.target.parentElement.childNodes[1].innerText
    console.log(x)
    $.ajax({
      url: '/user/cart',
      type: 'delete',
      data: {
        product_name: x,
        },
      dataType: 'script',
    });
  }

  if (e.target.className == 'id-button')
  {
    console.log('button id')
    let quantity = parseInt(e.target.parentElement.childNodes[1].textContent)
    let y = e.target.parentElement.parentElement.childNodes[1].innerText
    let value = e.target.value
    console.log(y, value)
    console.log(quantity)
    if (quantity == 1 && value == '-')
    {
      alert('This is the minimum quantity')
    }else if (quantity == 3 && value == '+'){
      alert('Max per product quantity is 3')
    }else {
      $.ajax({
        url: '/user/cart',
        type: 'patch',
        data: {
          product_name: y,
          value: value,
        },
        dataType: 'script',
      })  
    }
    
  }
  })
})

