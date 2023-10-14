function calculateLove(){
  const name1= document.getElementById("name1").ariaValueMax.trim();
  const name2= document.getElementById("name2").ariaValueMax.trim();
    
  if(name1=== "" || name2===""){
    alert("please enter both name names.")
  }
  else{
    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");
     
    result.innerHTML = `${name1} and ${name2}'s Love Percentage: $  {lolovePercentage}`;

    if(lovePercentage <30){
        result.innerHTML +="<br> Not a Great Match. Keeping Looling!"

    } else if(lovePercentage >=30 && lovePercentage <70){
      result.innerHTML += "<br> There is potential. Give it a tryy!"  
      }
      else {
        result.innerHTML += "<br> Great Match! Love is in the Air!"
      }
  }
  }
  

