export const dataFetcher = async () => {
    const res = await fetch("https://animechan.vercel.app/api/random");
    const data = await res.json().then(value => { return value });
    return data;
}
export const fetchAnime = async () => {
    const res = await fetch("http://localhost:3000/api/displayAnime", { method: 'GET', headers: { 'Content-Types': 'application/json' } });
    const data = await res.json();

    return data;
}