import { useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function MainBreadcrumbs() {
  const location = useLocation();

  const fontSize = 13;
  const fontWeight = 600;

  let currentPath = '';
  const paths = location.pathname.split('/').filter((path) => path !== '');
  const lastPath = paths.pop();

  const _renderPrevCrumbs = () => {
    return paths.map((path) => {
      currentPath += `/${path}`;

      return (
        <Link key={path} href={currentPath} color="inherit" underline="none">
          {path}
        </Link>
      );
    });
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" fontSize={fontSize} fontWeight={fontWeight}>
      <Button href="/" color="primary" component={Link}>
        <HomeIcon color="inherit" sx={{ mr: 1 }} />
        <Typography fontSize={fontSize} fontWeight={fontWeight}>
          Home
        </Typography>
      </Button>
      {_renderPrevCrumbs()}
      <Link color="inherit" underline="none">
        {lastPath}
      </Link>
    </Breadcrumbs>
  );
}

export default MainBreadcrumbs;
