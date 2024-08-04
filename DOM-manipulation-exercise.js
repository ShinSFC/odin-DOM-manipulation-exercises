const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p");
red.textContent = "Hey I'm red!";
red.style.color = "red";
container.appendChild(red);

const blue = document.createElement("h3");
blue.textContent = "I'm a blue h3!";
blue.style.color = "blue";
container.appendChild(blue);

const newDiv = document.createElement("div");
newDiv.classList.add("content2");
// newDiv.style.backgroundColor = pink; 
// newDiv.style.border = black;         
newDiv.setAttribute("style", "background-color: pink; border: 5px solid black;");
// container.appendChild(newDiv);

const iDiv = document.createElement("h1");
iDiv.textContent = "I'm in a div";
newDiv.appendChild(iDiv);

const meToo = document.createElement("p");
meToo.textContent = "ME TOO!";
newDiv.appendChild(meToo);

container.appendChild(newDiv);