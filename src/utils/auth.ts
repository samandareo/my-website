export async function refreshToken() {
    const refresh = localStorage.getItem("refresh_token");

    if (!refresh) return null;

    try {
        const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: "POST",
            headers : { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh }),
        });

        const data = await response.json();

        if(response.ok) {
            localStorage.setItem("access_token", data.access)
            return data.access
        } else {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            return null;
        }
    } catch (error) {
        console.error("Token refresh failed: ", error);
        return null;
    }

}