import { AppBar, Toolbar } from "@mui/material";

const styles = {
  customizeAppbar: {
    minHeight: "100px"
  }
};

const Footer: React.FC = () => {
    return (
        <AppBar position="static" style={styles.customizeAppbar}>
            <Toolbar>
        <footer>
            All logos courtesy of <a href="https://www.sportslogos.net">SportsLogos.net</a>.
            All logos belong to the NCAA® and their respective schools.
            Team and conference records sourced from publicly available records.
        </footer>
        </Toolbar>
        </AppBar>
    );
}

export default Footer;