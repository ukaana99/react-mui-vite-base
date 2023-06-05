import Box from '@mui/material/Box';

function PageSection({ children }) {
  return (
    <Box bgcolor="background.paper" px={4} py={2} borderRadius="8px" flexGrow={1}>
      {children}
    </Box>
  );
}

export default PageSection;
