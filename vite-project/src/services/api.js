export function request(url, options = {}) {
    return fetch(url, options).then((response) => {
        if (!response.ok) {
            throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
        }
        return response.json();
    });
}