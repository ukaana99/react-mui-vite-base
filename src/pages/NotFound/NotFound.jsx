import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import { Images } from '@/constants';
import PageLayout from '@/layouts/PageLayout';

function NotFound() {
  return (
    <PageLayout title="Page Not Found">
      <FlexBox
        justifyContent="center"
        height="720px"
        bgcolor="background.paper"
        px={4}
        py={2}
        borderRadius="8px"
        flexGrow={1}
      >
        <FlexBox flexDirection="column" alignItems="center" width={395}>
          <Box height={152} />
          <Box component="img" src={Images.Maintenance} alt={'Not found'} />
          <Box height={16} />
          <Typography variant="h6" color="primary" fontSize={18}>
            Error! Page not found.
          </Typography>
        </FlexBox>
      </FlexBox>
    </PageLayout>
  );
}

export default NotFound;
