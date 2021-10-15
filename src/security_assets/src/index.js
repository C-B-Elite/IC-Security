import { security } from "../../declarations/security";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with security actor, calling the greet method
  const greeting = await security.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
