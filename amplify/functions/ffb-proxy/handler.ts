
const url = "https://jsonplaceholder.typicode.com/users";

export const handler = async () => {
    try {
        // fetch is available in Node.js 18 and later runtimes
        const res = await fetch(url);
        return res.json();
    }
    catch (e) {
        console.error(e);
        return 500;
    }
};
