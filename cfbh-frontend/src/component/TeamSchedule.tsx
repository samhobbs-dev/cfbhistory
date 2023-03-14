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
    <Grid container spacing={1}>
			{games.map(game => (
				<Grid item style={{height: "150px", width: "150px"}}>
					<Paper style={{backgroundColor: "white", height: "150px", width: "150px"}}>
						<Grid container padding={1} alignItems="center" direction="column">
							<Grid item xs="auto">
								<TeamLogo teamId={game.opponentTeamId} year={year} isSchedule/>
							</Grid>
							<Grid item>
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