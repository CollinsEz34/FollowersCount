let count = 0; // Initialize count to 0
function IncreaseCount() {
    count++; // Increment the count by 1
    //call the function displayCount()
        displayCount(); // Display the count
        checkCountValue(); // Check count value and display messages
      }
  function displayCount() {
    document.getElementById('CountDisplay').innerHTML=count; // Display the count in the HTML  
    }
    function checkCountValue() {
        if (count === 10) {
          alert("Your Instagram post gained 10 followers! Congratulations!");
        } else if (count === 20) {
          alert("Your Instagram post gained 20 followers! Keep it up!");
        }else if(count===30){
            alert("Maximum number of followers reached!")
        }
      }
      function ResetCount(){
        count=0;
        displayCount();
        if(count===0) {
            alert("Followers count has been reset successful!")
        }
      }