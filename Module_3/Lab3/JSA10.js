import fetch from 'node-fetch';
globalThis.fetch = fetch;


async function fetchURLData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${url}: ${error.message}`);
        return null; 
    }
}


async function fetchMultipleURLs(urls) {
    try {
        const fetchPromises = urls.map(url => fetchURLData(url)); 
        const results = await Promise.all(fetchPromises);
        return results; 
    } catch (error) {
        console.error('Error fetching multiple URLs:', error);
        return [];
    }
}


(async () => {
    console.log("Fetching a single valid URL:");
    console.log(await fetchURLData('https://jsonplaceholder.typicode.com/todos/1')); // ✅ Valid URL

    console.log("\nFetching a single invalid URL:");
    console.log(await fetchURLData('https://invalid-url.com')); // ❌ Invalid URL

    console.log("\nFetching multiple URLs:");
    const urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/todos/2',
        'https://invalid-url.com' // One invalid URL to test error handling
    ];
    console.log(await fetchMultipleURLs(urls));
})();
