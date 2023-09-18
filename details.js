/*
Author: Logan Street
Date: August 22, 2023
Description: This JavaScript file contains the EvaluateSysInfo function, which collects user inputs from dropdown boxes for RAM and CPU, retrieves the system's RAM amount and CPU threads, and evaluates whether the system resources are sufficient or not.
*/

function EvaluateSysInfo(event) {
  // Prevent the default form submission behavior
  

  // Get selected values from dropdowns
  var selectedRAM = document.getElementById("ram").value;
  var selectedCPU = document.getElementById("cpu").value;

  // Retrieve system RAM information
  const systemRAM = navigator.deviceMemory;

  const systemCPUThreads = navigator.hardwareConcurrency;

  // Evaluate system resources
  var isSufficient = selectedRAM <= systemRAM && selectedCPU <= systemCPUThreads;

  // Get the submit button element
  var submitButton = document.getElementById("submit-button");

  // Update button text and color based on the evaluation result
  if (isSufficient) {
      submitButton.textContent = "Sufficient Resources";
      submitButton.style.backgroundColor = "green";
  } else {
      submitButton.textContent = "Insufficient Resources";
      submitButton.style.backgroundColor = "red";
  }
}

// Attach the EvaluateSysInfo function to the form's submit event
var form = document.querySelector("form");
form.addEventListener("submit", EvaluateSysInfo);

/* One error was that the page would auto refresh because of the form submission. As a result event.preventDefault(); can be used to stop the refresh once the form has been submitted (submit button pressed). This error was causing the color of the submit button not to change and just remain default.*/
