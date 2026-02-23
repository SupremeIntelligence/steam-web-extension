document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  const button = document.getElementById("submitBtn");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    const value = input.value.trim();

    if (!value) {
      output.textContent = "Пожалуйста, введите название";
      return;
    }
    //output.textContent = `You entered: ${value}`;
  });
});