import { Grid, Typography } from "@mui/material"

const Contact = () => {
  return (
    <>
      <Grid container width={'80%'} margin={'auto'} marginY={5}>
        <Grid size={{xs: 12, md: 6}} bgcolor={'success.light'}>
            <Typography variant="h4">Address</Typography>
            <Typography variant="h4">Kathmandu, Nepal</Typography>
            <Typography variant="h5">Phone: 01-2312313</Typography>
            <Typography variant="h6">Email: info@kathford.com</Typography>
            <Typography variant="h6">Web: www.Kathford.com</Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}} bgcolor={'warning.light'}>
            <Typography variant="h4">Contact Form</Typography>
        </Grid>
        <Grid size={12} bgcolor={'info.light'}>
            Map
        </Grid>
      </Grid>
    </>
  )
}

export default Contact