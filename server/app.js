// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json())




app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest", (req, res) => {
  res.json(getLatestArtist())
})

app.route("/artists/:artistId")
  .get((req, res) => {
    console.log("REQID", req.params)
    const artistId = req.params.artistId
    res.json(getArtistByArtistId(artistId))
  })
  .put((req, res) => {
    const artistId = req.params.artistId
    const data = req.body
    res.json(editArtistByArtistId(artistId, data))
  })
  .delete((req, res) => {
    const artistId = req.params.artistId
    deleteArtistByArtistId(artistId)
    res.json({
      "message": "Successfully deleted"
    })
  })


app.route("/artists")
  .get((req, res) => {
    res.statusCode = 200
    const artists = getAllArtists()
    res.json(artists)
  })
  .post((req, res) => {
    const name = req.body
    addArtist(name)
    res.status(201)
    res.json(name)
  })

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
