import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Images } from '@/constants';
import PageLayout from '@/layouts/PageLayout';
import { FlexBox } from '@/utils/components/styled';

function Dashboard() {
  return (
    <PageLayout title="Dashboard">
      <FlexBox
        justifyContent="center"
        height="720px"
        bgcolor="background.paper"
        px={4}
        py={2}
        borderRadius="8px"
        flexGrow={1}
      >
        <FlexBox flexDirection="column" width={395}>
          <Box height={152} />
          <Box component="img" src={Images.dashboard} alt={'Dashboard'} />
          <Box height={16} />
          <Typography variant="h6" color="primary" fontSize={18}>
            Hello, this is a placeholder dashboard.
          </Typography>
        </FlexBox>
      </FlexBox>
    </PageLayout>
  );
}

export default Dashboard;
