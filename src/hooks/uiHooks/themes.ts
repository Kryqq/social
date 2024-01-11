import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
   palette: {
      primary: {
         main: blue[500],
      },
      secondary: {
         main: '#003c6c',
      },
   },
});
export default theme;
