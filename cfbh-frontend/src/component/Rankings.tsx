import { Box, Grid, Stack, Typography } from "@mui/material";
import TeamLogo from "./TeamLogo";
import RankingService from "../api/rankingService";
import Ranking from "../type/ranking";
import { useEffect, useState } from "react";

interface MyProps {
    year: number;
}

const height = "95px";
const width = "150px";

const Rankings: React.FC<MyProps> = ({ year }) => {
    const [rankings, setRankings] = useState<Ranking[]>([]);

    useEffect(() => {
        RankingService.getFinalAPRankingsByYear(year).then(response => {
            setRankings(response as Ranking[])
        })
    }, [year]);

    // const rankingNumbers = Array.from({length: rankingCount}, (_, index) => index + 1);
    // Assumes rankings are already sorted from 1-25 on backend call
    return (
        <Stack justifyContent="space-between">
            {rankings.length > 0 ?
                <Grid container justifyContent="center" direction="column">
                    <Grid item style={{ width: width}}>
                        <Box style={{ backgroundColor: "white", height: "25px", width: width}}>
                            <Typography>
                                Final AP Rankings
                            </Typography>
                        </Box>
                    </Grid>
                    {rankings.map(r => (
                    <Grid item>
                        <Stack
                            justifyContent="center"
                            direction="row"
                            sx={{ backgroundColor: "white", height: height, width: width}}>
                            <Grid container direction="row" alignItems="center" padding={1}>
                                <Grid item xs={3}>
                                    <Typography>
                                        #{r.ranking}
                                    </Typography>
                                </Grid>
                                <Grid item xs={9}>
                                    <Stack alignItems="center" alignContent="center" justifyContent="center">
                                        <TeamLogo teamId={r.teamId} year={year} xy maxHeight={80} isSchedule fontSize="18px"/>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                    ))}
                </Grid>
            : ''}
        </Stack>
    );
}

export default Rankings;