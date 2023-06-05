import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function MainBreadcrumbs() {
  const location = useLocation();

  const fontSize = 13;
  const fontWeight = 600;

  let currentPath = '';
  const paths = location.pathname.split('/').filter((path) => path !== '');
  const lastPath = paths.pop();

  const _renderPathCrumbs = () => {
    return paths.map((path) => {
      currentPath += `/${path}`;

      return (
        <MuiLink key={path} to={currentPath} color="inherit" underline="none">
          {path}
        </MuiLink>
      );
    });
  };

  const _renderLastCrumb = () => {
    return (
      <MuiLink color="inherit" underline="none">
        {lastPath}
      </MuiLink>
    );
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" fontSize={fontSize} fontWeight={fontWeight}>
      <Button to="/" color="primary" component={Link}>
        <HomeIcon color="inherit" sx={{ mr: 1 }} />
        <Typography fontSize={fontSize} fontWeight={fontWeight}>
          Home
        </Typography>
      </Button>
      {_renderPathCrumbs()}
      {lastPath && _renderLastCrumb()}
    </Breadcrumbs>
  );
}

export default MainBreadcrumbs;
