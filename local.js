document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.onchange = saveData;
  });

  loadData();

  function saveData() {
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      localStorage.setItem(key, value);
    });
  }

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function () {
    inputs.forEach((input) => {
      localStorage.removeItem(input.name);
    });
    loadData();
  });

  function loadData() {
    inputs.forEach((input) => {
      const storageKey = input.name;
      input.value = localStorage.getItem(storageKey);
    });
  }
});
