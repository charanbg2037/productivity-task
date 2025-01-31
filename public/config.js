let API_BASE_URL = "http://localhost:3000"; // Default value

fetch("/api/config")
    .then(response => response.json())
    .then(config => {
        API_BASE_URL = config.BACKEND_URL;
        console.log("Loaded API_BASE_URL:", API_BASE_URL);
    })
    .catch(error => console.error("Error loading config:", error));

export { API_BASE_URL };
