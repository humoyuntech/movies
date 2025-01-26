import { Stack, Typography } from "@mui/material"


function Footer() {
  return (
    <Stack
       component="footer"
       sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;Humoflix&laquo; 18+ <br />
        
        Данный сайт создан исключительно в рамках пет-проектях. <br />
        Все права принадлежат Рустамова Хумоюна.
      </Typography>
      <Typography variant="h5" color="primary.main">Humoflix</Typography>
    </Stack>
  )
}

export default Footer