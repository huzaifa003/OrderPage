
import Layout from './Layout';
import Header from './Header'
import headerLogo from './assets/icons/logo_header.845e5c5.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="Container">
        
        <Header/>
        <img alt='Logo' style={{position: 'fixed', marginTop: '1.5%' , marginLeft: '5%',zIndex:'10'}} src = {headerLogo}></img>

        <Layout/>
        
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
