import {
  Button,
  Grid,
  Column,
} from '@carbon/react';
import SongCard from '../../components/SongCard';

const LandingPage = () => {
    return (
		<Grid className="landing-page" fullWidth>
			<Column lg={16} md={8} sm={4} className="landing-page__banner">
				<h1 className="landing-page__heading">
					My Library
				</h1>
			</Column>
			<Column lg={16} md={8} sm={4} className="landing-page__r2">
				<SongCard song="No Surprise" artist="Daughtry" />
				<SongCard song="Drink In My Hand" artist="Eric Church" icon="images/chief eric church.jpg" />
				<SongCard song="Highwayman" artist="The Highwaymen" icon="images/the highwaymen.jpg" />
				<SongCard song="Livin' on a Prayer" artist="Bon Jovi" icon="images/slippery when wet bon jovi.jpg" />
				<SongCard song="The Gambler" artist="Kenny Rogers" icon="images/the gambler kenny rogers.jpg" />
				<SongCard song="No Surprise" artist="Daughtry" />
				<SongCard song="Drink In My Hand" artist="Eric Church" icon="images/chief eric church.jpg" />
				<SongCard song="Highwayman" artist="The Highwaymen" icon="images/the highwaymen.jpg" />
				<SongCard song="Livin' on a Prayer" artist="Bon Jovi" icon="images/slippery when wet bon jovi.jpg" />
				<SongCard song="The Gambler" artist="Kenny Rogers" icon="images/the gambler kenny rogers.jpg" />
				<SongCard song="No Surprise" artist="Daughtry" />
				<SongCard song="Drink In My Hand" artist="Eric Church" icon="images/chief eric church.jpg" />
				<SongCard song="Highwayman" artist="The Highwaymen" icon="images/the highwaymen.jpg" />
				<SongCard song="Livin' on a Prayer" artist="Bon Jovi" icon="images/slippery when wet bon jovi.jpg" />
				<SongCard song="The Gambler" artist="Kenny Rogers" icon="images/the gambler kenny rogers.jpg" />
			</Column>
		</Grid>
	);
};

export default LandingPage;