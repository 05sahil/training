console.log('hello')
    document.addEventListener('DOMContentLoaded',()=>{
      
      $('#sd').click(()=>{alert('jquery')})  
    
       
    
    let countValue = 0
    let userRow = document.querySelectorAll('.user-row') 
    countValue = userRow.length
    
    window.addEventListener('scroll',()=>{
      console.log('scrolled')

      $.ajax({
          url:  "/users",
          type: "get",
          data: {
            count: countValue,
          },
          dataType: "script",
        });  
    })
    
    })