const form = document.getElementById("dateForm");
const result = document.getElementById("result");

// if frontend runs in its own container and backend in another container,
// localhost from the browser will only work if backend port is published on host.
// for local testing, we assume backend is on localhost:8080
const API_URL = "http://localhost:8080";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  try {
    const response = await fetch(`${API_URL}?start=${startDate}&end=${endDate}`);
    const data = await response.json();

    if (data.error) {
      result.textContent = data.error;
      return;
    }

    result.textContent = `Difference: ${data.days} day(s)`;
  } catch (error) {
    result.textContent = "Could not connect to backend.";
    console.error(error);
  }
});