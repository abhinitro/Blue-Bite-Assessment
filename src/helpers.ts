// Helper method for GET request using fetch
export async function getRequest(url: string): Promise<any> {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return Promise.reject(`Fetch failed: ${error}`);
    }
}
