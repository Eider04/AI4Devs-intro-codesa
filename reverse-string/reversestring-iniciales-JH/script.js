document.getElementById("reverseForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const inputText = document.getElementById("inputText").value;
    const reversedText = reverseString(inputText);
  
    document.getElementById("result").textContent = `Reversed: ${reversedText}`;
  });
  
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  