
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmE5MWEwNWoxQGFlYy5lZHUuaW4iLCJleHAiOjE3NTA5MTc4MzgsImlhdCI6MTc1MDkxNjkzOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjlkNTUwOTNkLWRjMTEtNGJmZi05MTkxLTczZjA2MWIyOGZkZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hcmlzZXR0aSBiYWxhcmFqdSIsInN1YiI6ImY3YjFlZGNkLTcyMDktNDBmOC1iOWJjLTU4Yzc2MmJhZWQzOSJ9LCJlbWFpbCI6IjIyYTkxYTA1ajFAYWVjLmVkdS5pbiIsIm5hbWUiOiJtYXJpc2V0dGkgYmFsYXJhanUiLCJyb2xsTm8iOiIyMmE5MWEwNWoxIiwiYWNjZXNzQ29kZSI6Ik5Gd2dSVCIsImNsaWVudElEIjoiZjdiMWVkY2QtNzIwOS00MGY4LWI5YmMtNThjNzYyYmFlZDM5IiwiY2xpZW50U2VjcmV0IjoiQ3Z5ZVRGek5tRXh4eWZBWiJ9.HXl8fiMyWhLRuhGezwHVHwolnCzDSpnsRtIoTldInBM";

async function logToServer(stack, level, message) {
  const apiUrl = "http://20.244.56.144/evaluation-service/logs";

  const requestBody = {
    stack: stack,    
    level: level,  
    message: message
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify(requestBody)
    });

    const text = await response.text(); 
    try {
      const data = JSON.parse(text);
      console.log("Log response:", data);
    } catch {
      console.log("Non-JSON response from server:", text);
    }
  } catch (error) {
    console.error("Error sending log:", error);
  }
}
