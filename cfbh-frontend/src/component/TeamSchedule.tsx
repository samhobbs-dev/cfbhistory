/* eslint-disable react/prop-types */
import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from 'react';
import GameService from '../api/gameService';
import GameStatus from '../type/gameStatus';
import TeamGame from '../type/teamGame';
import TeamLogo from './TeamLogo';
import ScheduleHeader from './ScheduleHeader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setTeamSchedules } from '../store/scheduleListSlice';
import Schedule from '../type/schedule';
import useWindowSize from '../hook/useWindowSize';

interface MyProps {
    teamId: number;
    year: number;
}

// const height = 65;
const width = 200;

const TeamSchedule: React.FC<MyProps> = ({ teamId, year }) => {    
    const windowSize = useWindowSize();
    const windowHeight = windowSize.height;

    const [games, setGames] = useState<TeamGame[]>([]);
    const dispatch = useAppDispatch();
    const schedules = useAppSelector(state => state.scheduleList.yearSchedules);
    let logoHeight = 65;    // Default value
    if (games.length > 0)
        logoHeight = (windowHeight - 48) / games.length;
    if (logoHeight > 65)
        logoHeight = 65;
    let fontSize = logoHeight / 5 + 4;
    if (fontSize > 16)
        fontSize = 16;    

    // Update schedule list whenever year changes
    // TODO find way to have only one call on page load
    useEffect(() => {
        GameService.getAllTeamSchedules(year).then(response => {
            dispatch(setTeamSchedules(response as Schedule[]));
        });
    }, [dispatch, year]);

    useEffect(() => {
        const schedule = schedules.find(s => s.teamId === teamId);
        // TODO test this undefined check
        if (schedule !== undefined)
            setGames(schedule.games);
    }, [schedules, teamId]);

    const getGameStatusColor = (gameStatus: GameStatus) => {
        switch(gameStatus) {
        case 'W':
            return 'green';
        case 'L':
            return 'red';
        default:
            return 'black';
        }
    };

    return (
        <Stack justifyContent="space-between">
            <Stack justifyContent="center" textAlign="center" position="sticky" top="0">
                <Box
                    style={{ backgroundColor: 'white' }}
                    height={50}
                    width={width}
                >
                    <ScheduleHeader teamId={teamId} year={year}/>
                </Box>
                {games.map(game => (
                    <Stack
                        key={0}		
                        style={{backgroundColor: 'white', height: logoHeight, width: width}}>
                        <Grid container padding={2} alignItems="center" direction="row" alignContent="center" width="100%" height="100%">
                            <Grid container xs={5} justifyContent="center">
                                <TeamLogo teamId={game.opponentTeamId} maxHeight={logoHeight-3} xy isSchedule fontSize={fontSize}/>
                            </Grid>
                            <Grid xs={7} fontSize="18px">
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
};

export default TeamSchedule;