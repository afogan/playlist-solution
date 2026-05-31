const playlist = [
  "Exhilarating Lights",
  "Space for Disco",
  "Warm Heart, Cold Dinner",
  "Sound of Voices",
  "Tearful Paradise",
];
export default playlist;

export function getPlaylist() {
  return playlist;
}

export function getPlaylistById(id) {
  return playlist[id];
}