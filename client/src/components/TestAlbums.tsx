import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Album } from '../interfaces/Album';

export default function TestAlbums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get<Album[]>('http://localhost:5000/api/albums');
        setAlbums(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching vinyls. Please check the connection to the database');
        setLoading(false);
        console.error('Error fetching albums:', err);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="albums-container">
      <h2>Available Albums</h2>
      {albums.length === 0 ? (
        <p>The database seems to be empty. Consider adding vinyls!</p>
      ) : (
        <div className="albums-grid">
          {albums.map((album) => (
            <div key={album.id} className="album-card">
              {album.cover_image ? (
                <img
                  src={album.cover_image}
                  alt={`${album.title} Cover`}
                  className="album-cover"
                />
              ) : (
                <div className="album-cover-placeholder">No Cover</div>
              )}
              <div className="album-info">
                <h3>{album.title}</h3>
                <p className="artist">{album.artist}</p>
                {album.release_year && <p className="year">{album.release_year}</p>}
                {album.genre && <p className="genre">{album.genre}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};