import { AppBar, Toolbar, Button, Grid } from "@mui/material";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent="center" alignItems="center" spacing={1}>
                    <Grid item md={3} lg={3} xl={2}>
                        <div>CFBHistory</div>
                    </Grid>
                    <Grid item md={3} lg={3} xl={2}>
                        <SearchBar/>
                    </Grid>
                    <Grid item md={3} lg={3} xl={2}>
                        <div>Login</div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;