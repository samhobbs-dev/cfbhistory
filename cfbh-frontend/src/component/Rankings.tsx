import { Grid, Paper, Stack, Typography } from "@mui/material";
import TeamLogo from "./TeamLogo";

interface MyProps {
    year: number;
}

const PLACEHOLDER_TEAM_ID = 2;
const rankingCount = 25;

const height = "150px";
const width = "200px";

const Rankings: React.FC<MyProps> = ({ year }) => {
    const rankingNumbers = Array.from({length: rankingCount}, (_, index) => index + 1);
    return (
        <Stack justifyContent="space-between" width="20%">
            <Grid container spacing={1} justifyContent="center">
				<Grid item>
                    <Typography>
                        Final Rankings
                    </Typography>
                </Grid>
                {rankingNumbers.map(ranking => (
				<Grid item style={{height: height, width: width}}>
					<Paper
						square
						elevation={1}					
						style={{backgroundColor: "white", height: height, width: width}}>
						<Grid container padding={2} alignItems="center" direction="row" alignContent="center">
							<Grid item>
                                <Typography>
                                    #{ranking}
                                </Typography>
                            </Grid>
                            <Grid item container xs={8} alignContent="center" alignItems="center" width="auto" height="50%">
								<TeamLogo teamId={PLACEHOLDER_TEAM_ID} year={year} xy={90} isSchedule/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default Rankings;