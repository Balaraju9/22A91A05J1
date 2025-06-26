function logAction() {
  const logMessage = "Button clicked at " + new Date().toLocaleTimeString();
  logToServer("frontend", "info", logMessage); 
  document.getElementById("logOutput").innerText = logMessage;
}
