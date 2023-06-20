import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import GameService from '../api/gameService';
import GameStatus from '../type/gameStatus';
import TeamGame from '../type/teamGame';
import TeamLogo from './TeamLogo';
import ScheduleHeader from './ScheduleHeader';

interface MyProps {
    teamId: number;
    year: number;
}

const height = "65px";
const width = "200px";

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
	<Stack justifyContent="space-between">
    	<Stack justifyContent="center" position="sticky" top="0">
			<Box
                style={{ height: "50px", width: width, backgroundColor: "white" }}
            >
				<ScheduleHeader teamId={teamId} year={year}/>
			</Box>
			{games.map(game => (
					<Stack				
						style={{backgroundColor: "white", height: height, width: width}}>
						<Grid container padding={2} alignItems="center" direction="row" alignContent="center" width="100%" height="100%">
							<Grid item container xs={5} justifyContent="center">
								<TeamLogo teamId={game.opponentTeamId} year={year} maxHeight={65} xy isSchedule fontSize="16px"/>
							</Grid>
							<Grid item xs={7} fontSize="18px">
								<b style={{color: getGameStatusColor(game.gameStatus)}}>
									{game.gameStatus}
								</b>
								{' ' + game.teamPoints + ' - ' + game.opponentTeamPoints}
							</Grid>
						</Grid>
					</Stack>
			))}
  		</Stack>
	</Stack>
	);
}

export default TeamSchedule;