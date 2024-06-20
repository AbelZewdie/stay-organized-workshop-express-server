// function that can "fetch" the sunrise/sunset times
// Asynchronous function allow us to handle data fetching from external sources without blocking the main thread.

function option(name){
  const e = document.createElement("option");
  e.innerText = name;
  return e;
}

async function getUsers() { //2 arguements latitude and longitude.
  let response = await fetch( // makes the fetch request and pause the excusion 
    `http://localhost:8083/api/users`); //date=today to specify fetching data for the current day
    let data = await response.json(); // pause the excusion again until the JSON parsing is complete.
    for (item of data) {// after this code dataArray is represented with "data"
      const name = item.name; // After this code data.name is represented with "name"
      const o = option(name) // after this code, option(name) is represented with "o"
      dataList.appendChild(o); //Displaying the option in a dropdown
    }
  return data; //return data containing Sunrise and Sunset information.
}


//waits for the page to be loaded before running the script.
document.addEventListener("DOMContentLoaded", () => {
getUsers()

  dataList.addEventListener("change", async e => { //event listner listens when there is a change.
    const data = datasArray[dataList.selectedIndex - 1]; //getting info from dataArray


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    dataResults.innerHTML = `
    <br><h3>${data.id}</h3><br>
<br><h3>${data.name}</h3><br>
<br><h3>${data.username}</h3><br>
`;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  });
}); //end loaded