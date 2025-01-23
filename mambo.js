4

/*const messages = [
    "Welcome to animations!",
    "Create stunning effects.",
    "Animations are fun!"
  ];
  const textElement = document.querySelector('.text');
  
  let index = 0;
  function typeMessage() {
    let message = messages[index];
    textElement.textContent = "";
    let charIndex = 0;
  
    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        textElement.textContent += message[charIndex];
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(eraseMessage, 2000); // Pause before erasing
      }
    }, 100);
  }
  
  function eraseMessage() {
    let message = textElement.textContent;
    let charIndex = message.length;
  
    const eraseInterval = setInterval(() => {
      if (charIndex > 0) {
        textElement.textContent = message.slice(0, --charIndex);
      } else {
        clearInterval(eraseInterval);
        index = (index + 1) % messages.length; // Move to the next message
        setTimeout(typeMessage, 500); // Pause before typing next message
      }
    }, 50);
  }
  
  // Start the typing effect
  typeMessage();
  */


  console.log(Math(4+2/5*2+6-3*4));