import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import AppBar from './layout/AppBar'
import SideBar from './layout/SideBar'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function GrapesStudio() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack sx={{ height: '100vh', background: '#212121' }}>
        <AppBar />
        <Stack direction="row" sx={{ flexGrow: 1 }}>
          <SideBar />
          <Box sx={{ flex: 1, marginRight: '40px' }}>
            <textarea
              style={{
                width: '100%',
                height: '100%',
                color: 'white',
                outline: 'none',
                border: 'none',
                padding: 12,
                backgroundColor: '#424242',
              }}
            >
              this is code editor
            </textarea>
          </Box>
          <Box sx={{ flex: 1, color: 'white' }}>Preview Area</Box>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}
