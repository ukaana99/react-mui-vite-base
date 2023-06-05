import Typography from '@mui/material/Typography';

import PageSection from './PageSection';

function PageHeader(props) {
  const { title } = props;
  return (
    <PageSection>
      <Typography variant="h6">{title}</Typography>
    </PageSection>
  );
}

export default PageHeader;
