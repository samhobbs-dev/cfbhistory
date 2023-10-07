import { AppBar, Toolbar } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <div>
            <AppBar position="static" style={{ top: 'auto', bottom: 0, backgroundColor: 'green' }}>
                <Toolbar>
                    <div>
                  All logos courtesy of <a href="https://www.sportslogos.net">SportsLogos.net</a>.
                  All logos belong to the NCAA® and their respective schools.
                  Team and conference records sourced from publicly available records.
                  Records and games may not be fully accurate.
                  Logo sourced from Icons8.
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Footer;