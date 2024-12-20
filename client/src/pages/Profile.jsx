import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_PLAYLISTS } from '../utils/queries';
import '../App';

const Profile = () => {
  const { loading: loadingMe, data: userData, error: errorMe } = useQuery(QUERY_ME);
  const { loading: loadingPlaylists, data: playlistsData, error: errorPlaylists } = useQuery(QUERY_PLAYLISTS, {
    variables: { userId: userData?.me._id } // Pass the userId to fetch playlists
  });

  if (loadingMe) return <p>Loading...</p>;
  if (errorMe) return <p>Error: {errorMe.message}</p>;

  const user = userData?.me;

  return (
    <div className="profile-container">
      <div className="jumbo-bg-dark">
        <h1 className='jumbo-bg-dark-text'>{user.username}'s Profile</h1>
      </div>

      {loadingPlaylists ? (
        <p>Loading playlists...</p>
      ) : errorPlaylists ? (
        <p>Error loading playlists: {errorPlaylists.message}</p>
      ) : (
        <div className="playlists-container">
          <h2>Your Playlists</h2>
          {playlistsData?.getPlaylists?.length ? (
            <div className="playlist-grid">
              {playlistsData.getPlaylists.map((playlist, index) => (
                <div key={index} className="playlist-card">
                  <h3 className="playlist-title">{playlist.name}</h3>
                  <ul className="song-list">
                    {playlist.songs.map((song) => (
                      <li key={song.videoId} className="song-item">
                        {song.title} 
                        <span className="video-id"> (ID: {song.videoId})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p>No playlists found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;