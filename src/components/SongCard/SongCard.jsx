import './_songcard.scss';

const SongCard = ({ song, artist, icon }) => {
	return (
		<div className="song-card">
			<img src={icon || 'images/leave this town daughtry.jpg'} height="225" width="225" />
			<span className="song-title">{song}</span>
			<span className="song-artist">{artist}</span>
		</div>
	);
};

export default SongCard;