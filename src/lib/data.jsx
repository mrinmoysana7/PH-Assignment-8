export const getAllTiles = async () => {
    const res = await fetch("https://json-server-marbleva.onrender.com/tiles");
    const tiles = await res.json();
    return tiles;
}

export const getSingleTileDetails = async (id) => {
    const res = await fetch(`https://json-server-marbleva.onrender.com/tiles/${id}`);
    const tile = await res.json();
    return tile;
}