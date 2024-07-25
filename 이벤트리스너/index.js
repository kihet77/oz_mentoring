const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const result = document.getElementById("result");

const handleClick1 = () => {
  console.log("hi");
  result.innerText += "1";
};
const handleClick2 = () => {
  result.innerText += "2";
};

const handleClick3 = () => {
  result.innerText += "3";
  console.log(result.innerText);
  console.log(result.innerText.search("1"));
};
const handleRemove = () => {
  if (result.innerText.search("1") == false) {
    button1.removeEventListener("click", handleClick1);
  } else {
    console.log("nope");
  }
};

button1.addEventListener("click", handleClick1);
button2.addEventListener("click", handleClick2);
button3.addEventListener("click", handleClick3);



button3.addEventListener("click", handleRemove);


