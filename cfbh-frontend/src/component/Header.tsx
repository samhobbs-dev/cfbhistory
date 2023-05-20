import { AppBar, Toolbar, Button, Grid, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ margin: '0 auto', width: '90%' }}>
                    <Typography variant="h6" component="div">
                        CFBHistory
                    </Typography>
                    {/* <Grid container justifyContent="center" alignItems="center" spacing={1}>
                        <Grid item md={3} lg={3} xl={2}>
                            <div>CFBHistory</div>
                        </Grid>
                        <Grid item md={3} lg={3} xl={2}>
                            <SearchBar/>
                        </Grid>
                        <Grid item md={3} lg={3} xl={2}>
                            <div>Login</div>
                        </Grid> 
                     </Grid>*/}
                </Toolbar>
            </AppBar> 
        </div>
    );
}

export default Header;