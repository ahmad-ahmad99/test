import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import TodosPage from './pages/TodosPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    height: '100%',
  },
});
function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const myTheme = createMuiTheme({
    // Theme settings
    palette: {
      type: toggleDark ? 'dark' : 'light',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />

        <Header />
        <TodosPage toggleDark={toggleDark} settoggleDark={settoggleDark} />
      </ThemeProvider>
    </div>
  );
}

export default App;
