const SongCard = ({ song, artist, icon }) => {
	return (
		<div>
			<h2>{song}</h2>
			<h3>{artist}</h3>
			<img src={icon || 'images/noSong.png'} />
		</div>
	);
};

export default SongCard;
