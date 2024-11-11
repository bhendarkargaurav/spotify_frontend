document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // You could redirect to a dashboard or home page here
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to log in");
    }
  });
  