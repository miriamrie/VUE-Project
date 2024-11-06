app.component('form', {
  template:
  /*html*/
  ` 
  <h1>Booking Form</h1>

	<!-- creating a form. onsubmit=return validateForm - is listening for the submit type input.
	Tha when the submit button is clicked is will activate the validateForm function-->
	<form onsubmit="return validateForm()">
	
		<!--creating a label FOR name input field -->
		<!--this is the input field for name, the type of input is text, with an ID of name -->
		<label for="name">Name:</label>
		<input type="text" id="name" name="name"><br>
		
		<!--creating a label FOR email input field -->
		<!--this is the input field for email, the type of input is email, with an ID of email  -->
		<label for="email">Email:</label>
		<input type="email" id="email" name="email"><br>

		<!--creating a label FOR date input field -->
		<!--this is the input field for date, the type of input is date, with an ID of date  -->
		<label for="date">Date:</label>
		<input type="date" id="date" name="date"><br>

		<!--creating a label FOR time input field -->
		<!--this is the input field for time, the type of input is time, with an ID of time  -->
		<label for="time">Time:</label>
		<input type="time" id="time" name="time"><br>
		
		
		<!--When the user clicks this button, the form will be submitted and the "validateForm()" function will be called. -->
		<input type="submit" value="Book Now">
	</form>
  
   
    
  
})