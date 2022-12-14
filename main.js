$('.slider-container').slick({
	autoplay: false, // Do we want it to autoplay? true or false
	autoplaySpeed: 2000, // How long between each slide when auto-playing
	speed: 500, // How fast is the transition in milliseconds
	arrows: true, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: true, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: true, // When true, means that it will scroll in a circle
	pauseOnHover: false, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
});



    // Step #1. Start with our constants to define all our buttons
    const buttons = document.querySelectorAll('.expandButton');
	const expandingSections = document.querySelectorAll('.expandable');

    // Step #2. Create a function that finds the element that was clicked
    // then finds the element next to it and removes the class of hidden
    function dropDownAnswer() {

		this.classList.toggle('active');

		let targetExpandableDiv = this.dataset.targetButton;
		  expandingSections.forEach(section => {
			if (targetExpandableDiv == section.dataset.targetMore) {
				section.classList.toggle('collapse');
			}
		  })

        // Step #5. Now we get to something new. We are going to target an element
        // based off of it's position relative to the triggering element. 
        
        // console.log(this.previousElementSibling);
        // console.log(this.nextElementSibling);

        // Step #6. Using the this keyword we can target the section we want to appear
        // and toggle the hidden class 
        // this.nextElementSibling.classList.toggle('hidden');
    }

    // Step #3. We want to loop over all our buttons using forEach method
    buttons.forEach(button => {
        // Step #4. Add an event listener to each of them that triggers our function
        button.addEventListener('click', dropDownAnswer)
    })

    // Before After Slider

$("#ba-slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.ba-foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});