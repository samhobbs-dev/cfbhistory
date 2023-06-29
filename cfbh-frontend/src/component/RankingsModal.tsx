import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import TeamLogo from "./TeamLogo";
import RankingService from "../api/rankingService";
import Ranking from "../type/ranking";

interface MyProps {
    year: number;
}

const height = 70;
const width = 110;
const logoHeight = 50;

const RankingsModal: React.FC<MyProps> = ({ year }) => {
    const [rankings, setRankings] = useState<Ranking[]>([]);

    useEffect(() => {
        RankingService.getFinalAPRankingsByYear(year).then(response => {
            setRankings(response as Ranking[])
        })
    }, [year]);
    
    const [open, setOpen] = useState(false);
    function openModal() {
        setOpen(true);
    }
    function closeModal() {
        setOpen(false);
    }

    return(
        <div>
            <Button onClick={openModal} sx={{color: "black", textTransform: "none", fontSize: 16}}>View AP Rankings</Button>
            <Modal
                open={open}
                onClose={closeModal}
            >                
                <Box alignItems="center" sx={{ top: 0, left: 0, width: '100%', height: '100%', background: "white"}}>
                    <CloseIcon
                        onClick={() => closeModal()}
                    />
                    <Stack alignItems="center">
                        <Box style={{ backgroundColor: "white", height: "25px", width: width + 30}}>
                            <Typography>Final AP Rankings</Typography>
                        </Box>
                        <Grid container justifyContent="center" direction="row">
                            {rankings.map(r => (
                            <Grid>
                                <Stack
                                    justifyContent="center"
                                    direction="row"
                                    sx={{ backgroundColor: "white", height: height, width: width}}>
                                    <Grid container direction="row" alignItems="center" padding={1} width={width}>
                                        <Grid xs={3}>
                                            <Typography>#{r.ranking}</Typography>
                                        </Grid>
                                        <Grid xs={9}>
                                            <Stack alignItems="center" alignContent="center" justifyContent="center">
                                                <TeamLogo teamId={r.teamId} year={year} xy maxHeight={logoHeight} isSchedule fontSize="18px"/>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export default RankingsModal;