fetch('universes.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  // Виклик рекурсивного обходу json
  traverseJson(data, 0);
  document.getElementById("jsonLabel").textContent = jsonString;
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

let jsonString = "";

function traverseJson(object, depth) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      const line = "- ".repeat(depth * 2);

      if (typeof object[key] === "object" && object[key] !== null) {

        jsonString += line + key + ": \n";
        console.log(line + key + ":")
        // Виклик рекурсивного обходу json
        traverseJson(object[key], depth + 1);
      } else {
        jsonString += line + key + ": " + object[key] + "\n";
        console.log(line + key + ": " + object[key]);
      }
    }
  }
}




