
function changeColumn1() {
   
    const newHeading1 = document.getElementById("text1").value;
    const column1 = document.getElementById("column1");

  
    if (newHeading1) {
        document.getElementById("heading1").textContent = newHeading1;
    }

 
    column1.style.backgroundColor = "blue";
}


function changeColumn2() {
   
    const newHeading2 = document.getElementById("text2").value;
    const column2 = document.getElementById("column2");

    
    if (newHeading2) {
        document.getElementById("heading2").textContent = newHeading2;
    }

   
    column2.style.backgroundColor = "white";
}