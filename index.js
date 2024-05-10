const DATA = await fetch("./data.json")
    .then((response) => {
        console.log("response");
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log("data");
        console.log(data);
        return data;
    });
console.log("DATA");
console.log(DATA);

const DATA_STRING = JSON.stringify(DATA, null, 4);
console.log("DATA_STRING");
console.log(DATA_STRING);

document.getElementById("data").innerHTML += DATA_STRING;
