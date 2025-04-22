// Step 1: Save the like button element in a variable 
const likeButton = document.querySelector("#like-btn");

// Step 2: Create function to add likes. This function makes it so that the "0" goes up when you press the button. We'll talk more about functions in a later class! 
const addLike = () => {
    const likeCount = document.getElementById('like-count');
    let currentCount = parseInt(likeCount.textContent);
    likeCount.textContent = currentCount + 1;
  }
  
// Step 3: Create an event listener that increases the likes when the user presses the like button 
likeButton.addEventListener('click', addLike);


// Step 4 (If time): Can you make it so that the number of likes increases when the user double taps the image? Hint: you will have to use a different kind of event! 
//1: Save the image in a variable 
const image = document.querySelector('#post');

//2: Add an event listener (addEventListener)
image.addEventListener('dblclick', addLike)
  