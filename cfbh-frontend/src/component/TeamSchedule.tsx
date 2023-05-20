import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import GameService from '../api/gameService';
import GameStatus from '../type/gameStatus';
import TeamGame from '../type/teamGame';
import TeamLogo from './TeamLogo';

interface MyProps {
    teamId: number;
    year: number;
}

const height = "150px";
const width = height;

const TeamSchedule: React.FC<MyProps> = ({ teamId, year }) => {
	const [games, setGames] = useState<TeamGame[]>([]);

	useEffect(() => {
		GameService.getTeamGamesForYear(teamId,year).then(response => {
			// TODO typecheck for error string
			setGames(response as TeamGame[]);
		});
	}, [teamId, year]);

	const getGameStatusColor = (gameStatus: GameStatus) => {
		switch(gameStatus) {
			case 'W':
				return 'green';
			case 'L':
				return 'red';
			default:
				return 'black';
		}
	}

	return (
    <Grid container wrap="nowrap" spacing={1}>
			{games.map(game => (
				<Grid item style={{height: height, width: width}}>
					<Paper
						square
						elevation={1}					
						style={{backgroundColor: "white", height: height, width: width}}>
						<Grid container padding={2} alignItems="center" direction="column" alignContent="center" width="100%" height="100%">
							<Grid item container xs={8} alignContent="center" alignItems="center" width="auto" height="50%">
								<TeamLogo teamId={game.opponentTeamId} year={year} xy={90} isSchedule/>
							</Grid>
							<Grid item xs={4} alignContent="center" alignItems="center">
								<b style={{color: getGameStatusColor(game.gameStatus)}}>
									{game.gameStatus}
								</b>
								{' ' + game.teamPoints + ' - ' + game.opponentTeamPoints}
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			))}
  	</Grid>
	);
}

export default TeamSchedule;