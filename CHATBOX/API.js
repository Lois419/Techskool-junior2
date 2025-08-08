// Ensure this import is the first line in your script.js
// This imports the named export 'GoogleGenerativeAI' from the esm.run CDN,
// which is designed for direct browser usage as an ES module.
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// Your API key - REMEMBER THE SECURITY WARNING!
// For a production application, this should be handled securely on a backend server.
const API_KEY = "AIzaSyBnsvIwr1PBfs6pCVosvUNryXHgRDYEFHQ";

// Initialize the Generative AI client with your API key
const genAI = new GoogleGenerativeAI(API_KEY);

// Get the generative model.
// Changed from "gemini-pro" to "gemini-1.5-flash" to resolve the 404 API error.
// "gemini-1.5-flash" is recommended for general, fast chat applications.
// You could also use "gemini-1.5-pro" for more complex reasoning.
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Get references to DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Add a message to the chat box using the new bubble structure
function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * Sends the user's message to the Gemini API and displays the bot's response.
 * @param {string} message - The user's input message.
 */
async function sendMessageToGemini(message) {
  // Add the user's message to the chat display
  addMessage(message, "user");
  userInput.value = ""; // Clear the input field immediately

  try {
    // Send the message to the Gemini model
    const result = await model.generateContent(message);
    const response = await result.response; // Get the raw response object
    const text = response.text(); // Extract the text content from the response

    // Add the bot's response to the chat display
    addMessage(text, "bot");
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    // Display an error message to the user
    addMessage(
      "Oops! Something went wrong. Please try again or check the console for details.",
      "bot"
    );
  }
}

// Event listener for the send button click
sendButton.addEventListener("click", () => {
  const message = userInput.value.trim(); // Get trimmed message from input
  if (message) {
    // Only send if the message is not empty
    sendMessageToGemini(message);
  }
});

// Event listener for the Enter key press in the input field
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // Check if the pressed key is 'Enter'
    const message = userInput.value.trim(); // Get trimmed message from input
    if (message) {
      // Only send if the message is not empty
      sendMessageToGemini(message);
    }
  }
});

// Initial bot message when the page loads (already present in HTML, but demonstrates dynamic adding)
// addMessage("Hello! How can I help you today?", 'bot');
