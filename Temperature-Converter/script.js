const c_input = document.getElementById("celsius");
const f_input = document.getElementById("fahrenheit");
const k_input = document.getElementById("kelvin");
c_input.addEventListener("input", function () {
  if (!c_input.value) {
    f_input.value = "";
    k_input.value = "";
    return;
  }
  f_input.value = (c_input.value * 9) / 5 + 32;
  k_input.value = parseFloat(c_input.value) + 273.15;
});
f_input.addEventListener("input", function () {
  if (!f_input.value) {
    c_input.value = "";
    k_input.value = "";
    return;
  }
  c_input.value = ((f_input.value - 32) * 5) / 9;
  k_input.value = parseFloat(c_input.value) + 273.15;
});
k_input.addEventListener("input", function () {
  if (!k_input.value) {
    c_input.value = "";
    f_input.value = "";
    return;
  }
  console.log(k_input.value);
  c_input.value = k_input.value - 273.15;
  f_input.value = ((k_input.value - 273.15) * 9) / 5 + 32;
});
