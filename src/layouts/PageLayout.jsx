import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PageLayout({ children, ...props }) {
  const { title } = props;
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Box sx={{ height: '32px' }} />
      {children}
    </Box>
  );
}

export default PageLayout;
