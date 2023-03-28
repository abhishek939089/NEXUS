function phonenumber(inputtxt)
{ 
  if(inputtxt.value!=" "){
  var phoneno = /^\d{10}$/;
  if(!inputtxt.value.match(phoneno))
  {
    swal({
      title: "OOPS!",
      text: "Phone Number Not valid!",
      icon: "warning",
      button: "OKAY",
    });
      inputtxt.value="";
      $(inputtxt.id).val(inputtxt.value);
  }
}
else
{
    swal({
      title: "OOPS!",
      text: "Please Enter the value",
      icon: "warning",
      button: "OKAY",
    });
}
}
function validateaddhar(inputtxt){
    if (inputtxt.value != " ") {
        var addhaar = /^\d{4}\s\d{4}\s\d{4}$/;
        if (!inputtxt.value.match(addhaar)) {
            swal({
                title: "OOPS!",
                text: "Addhar Number Not valid!",
                icon: "warning",
                button: "OKAY",
            });
            inputtxt.value = "";
            $(inputtxt.id).val(inputtxt.value);
        }
    } else {
        swal({
            title: "OOPS!",
            text: "Addhar Number Not valid",
            icon: "warning",
            button: "OKAY",
        });
    }
}
function validatestrings(inputtxt)
{
  if(inputtxt.value!=" "){
  var character = /^[a-zA-Z ]*$/;
 if(!inputtxt.value.match(character))
  {
    swal({
      title: "OOPS!",
      text: "Only Alpahabets Are Allowed!",
      icon: "warning",
      button: "OKAY",
    });
    inputtxt.value="";
    $(inputtxt).val(inputtxt.value);
  }
}else
{
    swal({
      title: "OOPS!",
      text: "Please Enter the value",
      icon: "warning",
      button: "OKAY",
    });
}
}
function validatenumber(inputtxt)
{
  if(inputtxt.value!=" "){
  var character = /^[0-9. ]*$/;
  if(!inputtxt.value.match(character))
  {
    swal({
      title: "OOPS!",
      text: "Only Numbers Are Allowed!",    
      icon: "warning",
      button: "OKAY",
    });
     inputtxt.value="";
   $(inputtxt.id).val(inputtxt.value);
  }
}else
{
    swal({
      title: "OOPS!",
      text: "Please Enter the value",
      icon: "warning",
      button: "OKAY",
    });
    inputtxt.focus();
}
}

function validatestringsandnumber(inputtxt)
{
  if(inputtxt.value!=null){
  var character = /^[a-zA-Z0-9- ]*$/;
  if(!inputtxt.value.match(character))
  {
    swal({
      title: "OOPS!",
      text: "Only Alpahabets And Numbers Are Allowed!",
      icon: "warning",
      button: "OKAY",
    });
    inputtxt.value="";
    $(inputtxt.id).val(inputtxt.value);
  }
}else
{
    swal({
      title: "OOPS!",
      text: "Please Enter the value",
      icon: "warning",
      button: "OKAY",
    });
}
}
function validatespecialstrings(inputtxt)
{
  if(inputtxt.value!=null){
	  var character = /^[a-zA-Z0-9-&.+()!,:"''@\s\t\n*$]*$/;
	  if(!inputtxt.value.match(character))
	  {
		swal({
		  title: "OOPS!",
		  text: "Only A-z,0-9 and special Characters (. + () ! , : ' ' @) are allowed!",
		  icon: "warning",
		  button: "OKAY",
		});
		  inputtxt.value="";
	   $(inputtxt.id).val(inputtxt.value);
	  }
	}else
	{
		swal({
		  title: "OOPS!",
		  text: "Please Enter the value",
		  icon: "warning",
		  button: "OKAY",
		});
		inputtxt.focus();
	}	
}
function validateemail(inputtxt)
{
  if(inputtxt.value!= null){
  var character = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  if(!inputtxt.value.match(character))
  {
    swal({
      title: "OOPS!",
      text: "Not a Valid Email!",
      icon: "warning",
      button: "OKAY",
    });
     inputtxt.value="";
   $(inputtxt.id).val(inputtxt.value);
  }
}else
{
    swal({
      title: "OOPS!",
      text: "Please Enter the value",
      icon: "warning",
      button: "OKAY",
    });
    inputtxt.focus();
}
}
function validatespecialemail(email) { 
  var re =/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)([\w-]+.)+[\w-]{2,4})?$/;
  ;
  if(!email.match(re))
  {
      
              swal({
                title: "OOPS!",
                text: "Only official Id is allowed",
                icon: "warning",
                button: "OKAY",
              });
                inputtxt.value="";
   $(inputtxt.id).val(inputtxt.value);
    }else{
	 inputtxt.value="";
   $(inputtxt.id).val(inputtxt.value);
          
    }
    }


	
	$(document).ready(function(){

$('#description').keypress(function(e) {
            // Get the input text value
            var text = document.getElementById("description").value;
 
            // Initialize the word counter
            var numWords = 0;
            var maxWords = 200;
 
            // Loop through the text
            // and count spaces in it
            for (var i = 0; i < text.length; i++) {
                var currentCharacter = text[i];
 
                // Check if the character is a space
                if (currentCharacter == " ") {
                    numWords += 1;
                }
            }

            numWords += 1;
		   if(parseInt(maxWords) < parseInt(numWords))
			{
				  
				document.getElementById('desc_wordcheck').innerHTML =  "<span style='color:red;font-weight:700;'>Total No of Words Limit is 200</span> : <b>"+numWords+"</b>";
				   e.preventDefault();
				   text.focus();

				
			}
			else
			{
				document.getElementById('desc_wordcheck').innerHTML =  "<span style='color:green;font-weight:700;'>Total No of Words </span>: <b>"+numWords +"</b>";
			}
			
			
});
 
$('#description').focusout(function() {
			var maxWords = 200;
            var text = document.getElementById("description").value;
		    var text = $(this).val().split(" ");
			while (text.length > maxWords) {
				event.preventDefault();
				text.pop();
			}
			$('#description').val(text.join(" "));
		
			document.getElementById('desc_wordcheck').innerHTML =  "<span style='color:green;font-weight:700;'>Total No of Words </span>: <b>"+text.length+"</b>";
});
/* 
$('#description').change(function(inputtxt) {
	
	var text = document.getElementById("description").value;
	
	if(text!=null){
	  var character = /^[a-zA-Z0-9-&.+()!,:"''@\s\t\n*$]*$/;
	
	  if(!text.test(character))
	  {
		  //  alert(text.test(character));
			swal({
			  title: "OOPS!",
			  text: "Only A-z,0-9 and special Characters (. + () ! , : ' ' @) are allowed!",
			  icon: "warning",
			  button: "OKAY",
			});
			
		  text="";
		 $('#description').val(text);
	  }
	}else
	{
		swal({
		  title: "OOPS!",
		  text: "Please Enter the value",
		  icon: "warning",
		  button: "OKAY",
		});
		$('#description').focus();
	}	
}); */

$('#description').focusout(function() {
	
            // Get the input text value
             var text = document.getElementById("description").value;
 
            // Initialize the word counter
            var numWords = 0;
          //  var maxWords = 200;
            var minWords = 50;
 
            // Loop through the text
            // and count spaces in it
            for (var i = 0; i < text.length; i++) {
                var currentCharacter = text[i];
 
                // Check if the character is a space
                if (currentCharacter == " ") {
                    numWords += 1;
                }
            }

            numWords += 1;
		   
			
			 if(parseInt(minWords) > parseInt(numWords))
			{
               $("#description").focus();
				document.getElementById('desc_wordcheck').innerHTML =  "<span style='color:red;font-weight:700;'>Total No of Words Should not be Lessthen 50</span> : <b>"+numWords+"</b>";
				
			}
			else
			{
				document.getElementById('desc_wordcheck').innerHTML =  "<span style='color:green;font-weight:700;'>Total No of Words </span>: <b>"+numWords +"</b>";
			}
		 
});
});