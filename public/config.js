const API_BASE_URL = fetch("https://your-backend-server.com/api/config");

///  // Default value

// fetch("/api/config")
//     .then(response => response.json())
//     .then(config => {
//         API_BASE_URL = config.BACKEND_URL;
//         console.log("Loaded API_BASE_URL:", API_BASE_URL);
//     })
//     .catch(error => console.error("Error loading config:", error));
// fetch("https://your-backend-server.com/api/config")


export { API_BASE_URL };
