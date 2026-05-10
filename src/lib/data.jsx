export const getAllTiles = async () => {
    const res = await fetch("https://json-server-marbleva.onrender.com/tiles");
    const tiles = await res.json();
    return tiles;
}