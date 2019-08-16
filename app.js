document.getElementById("asInput").addEventListener("input", loadOutput);
document.getElementById("output").style.display = "none";

function loadOutput(e) {
  const input = e.target.value;

  if (input) {
    document.getElementById("output").style.display = "";
    document.getElementById("korOutput").innerHTML = (input * 808.69).toFixed(
      2
    );
    document.getElementById("usOutput").innerHTML = (input * 0.7).toFixed(2);
    document.getElementById("ukOutput").innerHTML = (input * 0.55).toFixed(2);
  } else {
    document.getElementById("output").style.display = "none";
  }
}
