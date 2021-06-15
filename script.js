// TODO: add code here
window.addEventListener('load', function () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
      response.json().then( function(astronauts) {
        const div = document.getElementById("container");
        const astronutCount = document.getElementById("astronautCount");
          astronauts.forEach(astronaut => {
            let color = "red";
            if (astronaut.active == true){
              color = "green"
            }
            div.innerHTML = div.innerHTML + `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li style="color:${color}">Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${astronaut.picture}>
                </div>
            `
          });
            astronautCount.innerHTML =  "Astronaut Count: " + astronauts.length
    });
  })  
});

function findMinValue(json){
  let min = json[0].hoursInSpace;
  for (let i = 0; i < json.length; i++) {
    if (json[i].hoursInSpace < min) {
      min = json[i].hoursInSpace
    }  
  }
  return min;
}

function descendingOrder(json){
  let descendingArray = []
  for (let i = 0; i < json.length; i++){
    descendingArray.push(findMinValue(json))
    console.log(descendingArray)
  }
}
