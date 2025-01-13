import logo from './logo.svg';
import logoWhite from './logoWhite.png';
import yearsCal from './yearsCal.png';
import trackCal from './trackCal.png';
import texture from './texture.png';
import face from './face.png';
import insta from './insta.png';
import './App.css';
import './index.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Link } from '@mui/material';
import { Facebook, Instagram } from "@mui/icons-material";


function App() {
  const NavBar = () => {
    return (<>
        <Link href="/">
            <Box
                component="img"
                src={yearsCal}
                alt="Logo clube automovel lousada"
                sx={{ mr: 1, width: { xs: 60, lg: 100 }, height: { xs: 60, lg: 100 } }}
            />
        </Link>
        <Link href="/">
            <Box
                component="img"
                src={logoWhite}
                alt="Logo clube automovel lousada"
                sx={{ mr: 1, width: { xs: 60, lg: 100 }, height: { xs: 60, lg: 100 } }}
            />
        </Link>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', lg: 'flex' },
                flexGrow: 1,
                fontWeight: 800,
                fontSize: '2.2rem',
                color: 'inherit',
                textDecoration: 'none',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            CLUBE AUTOMÓVEL DE LOUSADA
        </Typography>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'flex', lg: 'none' },
                flexGrow: 1,
                fontWeight: 800,
                fontSize: '2.2rem',
                color: 'inherit',
                textDecoration: 'none',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            CAL
        </Typography>
        <Link href="https://www.facebook.com/calclube.delousada/" target="_blank">
          <Box
            component="img"
            src={face}
            alt="Facebook link to clube automovel lousada"
            sx={{ width: { xs: 50, lg: 100 }, height: { xs: 50, lg: 100 } }}
          />
        </Link>
        <Link href="https://www.instagram.com/callousada18/" target="_blank">
          <Box
            component="img"
            src={insta}
            alt="Instagram link to clube automovel lousada"
            sx={{ width: { xs: 50, lg: 100 }, height: { xs: 50, lg: 100 } }}
          />
        </Link>
        </>);
  }

  return (
    <div className="App">
      <section className="mb-8 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
          <AppBar position="static" sx={{ backgroundColor: '#da1b0c', color: 'white', height: { xs: '150px', md: '200px' }, }}>
              <Container maxWidth="xl">
                  <Toolbar sx={{ display: "flex", justifyContent: "space-between", marginTop: '50px', }}>
                      <NavBar />
                  </Toolbar>
              </Container>
          </AppBar>
      </section>
      <section>
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "70vh",
            backgroundImage: `url(${texture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{
              position: "absolute",
              width: "100vw",
              paddingTop: "4rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
          }}>
            <img src={trackCal} className="comingSoon-loading" alt="A loading is spinning" />
            <p className="fontsColor">Novidades em breve</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
