//Animation

const sentences = [
    "I am a full stack website developer.",
    "I am a full stack web app developer.",
    "I am youtuber.",
    "Feel free to contact with me"
    
  ];

  const textContainer = document.getElementById('text-container');

  function typeSentence(index) {
    if (index < sentences.length) {
      const currentSentence = sentences[index];
      let charIndex = 0;

      function type() {
        if (charIndex < currentSentence.length) {
          textContainer.innerHTML += currentSentence.charAt(charIndex); // x+=y = x=x+y
          charIndex++;
          setTimeout(type, 50);
        } else {
          setTimeout(() => {
            textContainer.innerHTML = ''; // Clear the current sentence
            typeSentence(index + 1); // Move on to the next sentence
          }, 1000);
        }
      }

      type();
    } else {
      // If all sentences are typed, restart the animation
      setTimeout(() => {
        textContainer.innerHTML = ''; // Clear the current sentence
        typeSentence(0); // Restart from the first sentence
      }, 1000);
    }
  }

  typeSentence(0);



  let ico = document.getElementsByClassName("bx bxl-html5");
   ico[0].style.color = "red";
   
   let ico1 = document.getElementsByClassName("bx bxl-css3");
   ico1[0].style.color = "blue";

   let ico2 = document.getElementsByClassName("bx bxl-javascript");
   ico2[0].style.color = "yellow";

   let ico3 = document.getElementsByClassName("bx bxl-react");
   ico3[0].style.color = "blue";

   let ico4 = document.getElementsByClassName("bx bxl-bootstrap");
   ico4[0].style.color = "purple";

   let ico5 = document.getElementsByClassName("bx bxl-nodejs");
   ico5[0].style.color = "green";

   let ico6 = document.getElementsByClassName("bx bxl-mongodb");
   ico6[0].style.color = "green";

   let ico7 = document.getElementsByClassName("bx bxl-docker");
   ico7[0].style.color = "blue";



  //  contact

  let btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    alert("Thank you for contacting me. I will get back to you soon.");
    
  });

  