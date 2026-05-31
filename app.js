import express from "express";
const app = express();
export default app;

import { getPlaylist, getPlaylistById } from "#db/playlist";

app.get("/", (req, res) => {
  res.send("You've reached the Playlist API!");
});

app.get("/playlist", (req, res) => {
  const playlist = getPlaylist();
  res.send(playlist);
});

app.get("/playlist/:index", (req, res) => {
  const { index } = req.params;
  const song = getPlaylistById(index);

  // We have to `return` in this guard case to avoid sending multiple responses!
  if (song === undefined)
    return res.status(404).send("That song does not exist in the playlist.");

  res.send(song);
});