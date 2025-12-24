import React, { Component } from 'react';
import {
  Button,
  Grid,
  Column,
} from '@carbon/react';
import SongCard from '../../components/SongCard.jsx';

class LandingPage extends Component {
  render() {

    return (
				<Grid className="landing-page" fullWidth>
					<Column lg={16} md={8} sm={4} className="landing-page__banner">
						<h1 className="landing-page__heading">
							Recently played
						</h1>
					</Column>
					<Column lg={16} md={8} sm={4} className="landing-page__r2">
						<SongCard song="No Surprise" artist="Daughtry" />
					</Column>
				</Grid>
			);
  }
};

export default LandingPage;
