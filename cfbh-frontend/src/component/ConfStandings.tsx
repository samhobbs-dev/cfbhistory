import { Box, Grid, Paper, Stack, Switch } from "@mui/material";
import { Conference } from "../type/conference";
import TeamRecord from "./TeamRecord";
import useWindowSize from "../hook/useWindowSize";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface MyProps {
    conference: Conference;
    loading: boolean;
}

const ConfStandings: React.FC<MyProps> = ({ conference, loading }) => {
    const windowSize = useWindowSize();
    const [display, setDisplay] = useState(true);
    const windowWidth = windowSize.width;
    const isWideEnough = windowWidth >= 1000;

    const divHeight = isWideEnough? 50 : 30;
    const height = isWideEnough ? 110 : 70;
    const width = isWideEnough ? 260 : 220;
    const fontSize = isWideEnough ? 21 : 18;

    return (
        <Grid container direction="column">
            <Paper component={Stack} direction="row" justifyContent="center" alignItems="center" square elevation={0} style={{ fontSize: fontSize, height: divHeight, width: width, zIndex: 0 }}>
                <Stack direction="row" alignItems="center" width="100%">
                    <Box width="15%"/>
                    <b style={{width:"70%"}}>{conference.name}</b>
                    {display ?
                    <ExpandMoreIcon sx={{ cursor: "pointer" }} width="15%" onClick={() => setDisplay(!display)}/>
                    : <ExpandLessIcon sx={{ cursor: "pointer" }} width="15%" onClick={() => setDisplay(!display)}/>
                    }
                </Stack>
            </Paper>
            {display && conference.divisions.map(div => 
                <>
                    {div.name !== '' && 
                        <Paper component={Stack} justifyContent="center" square elevation={0} style={{ fontSize: fontSize, height: divHeight, width: width, background: "lightgray", zIndex: 0 }}>
                            <b>{div.name}</b>
                        </Paper>
                    } 
                    {div.teams.map(team => <TeamRecord record={team} height={height} width={width} loading={loading} fontSize={fontSize}/>)}
                </>
            )}
        </Grid>
    );
}

export default ConfStandings;