
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  //selectors
  var psw = document.querySelector('#user_password');
  const vals = document.querySelector('#vals');
  const m1 = document.querySelector('#m1');
  const m2 = document.querySelector('#m2');
  const m3 = document.querySelector('#m3');
  const m4 = document.querySelector('#m4');
  const m5 = document.querySelector('#m5');
  const psw2 = document.querySelector('#user_password_confirm');
  const psw2Div = document.querySelector('#psw2-div');
  const em = document.querySelector('#em');
  const emDiv = document.querySelector('#em-div');
  const mail = document.querySelector('#mail');
  const phone = document.querySelector('#user_phoneno');
  const pm = document.querySelector('#pm');
  const pmDiv = document.querySelector('#pm-div');
  const form = document.querySelector('#new_user');
  const allInputs = document.querySelectorAll(".input")

  //adding-removing shadow
  allInputs.forEach(el=>{
    el.addEventListener('focus',()=>{
      el.classList.add("input-focus")
	});

	el.addEventListener('focusout',()=>{
	  el.classList.remove("input-focus")
	});
  });

  //add-remove errors on focus and focusout
  function focusInOut(errorDiv,element)
  {
    element.addEventListener('focus',()=>{
 	  errorDiv.style.display = 'block';	
	});

	element.addEventListener('focusout',()=>{

	  errorDiv.style.display = 'none';
	});
  }
  
  //focusInOut function calls
  focusInOut(vals,psw)
  focusInOut(psw2Div,psw2)
  focusInOut(emDiv,mail)
  focusInOut(pmDiv,phone)

  //validates password, phoneno and mail using regex
  function validate(element,re,para)
  {	// element=='psw2'?reg=psw.value:reg=re;
    element.addEventListener('keyup',()=>{
	  element.value.match(re)?para.style.display = "none" : para.style.display = "block";
	});	
  }

  //validate function calls
  validate(mail,/^\w+\.?\w+@[a-z]+\.[a-z]{2,}/,em);
  validate(phone,/\d{10}/,pm);
  validate(psw,/[A-Z]+/,m1);
  validate(psw,/[a-z]+/,m2);
  validate(psw,/[0-9]+/,m3);
  validate(psw,/.{8}/,m5);


  //validates confirm password field
  psw2.addEventListener('keyup',()=>{
    psw.value == psw2.value? m4.style.display = 'none':m4.style.display = 'block';   
  });

  //validation for not allowing empty fields
  form.addEventListener('submit',()=>{
    count = 0

    allInputs.forEach(el=>{
	  if(el.value == '')
	  {
	     count += 1;
	  }
	 });

	if(count > 0)
	{
	   alert("All fields are mandatory")
	}
	else
	{
	   alert("Form submitted successfully")
	}
  });
		
});


