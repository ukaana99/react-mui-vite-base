import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Icons } from '@/constants';

import { DocumentButton } from '../styled';

function CreateDialog(props) {
  const { open, onClose } = props;

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const dialog = {
    title: 'Category',
    subtitle: 'Please select document type that you would like to create',
  };

  const document = [
    {
      path: '/ptw',
      icon: Icons.SafetyHelmet,
      title: 'PTW',
      description: 'Permit To Work',
      disabled: false,
    },
    {
      path: '/jha',
      icon: Icons.Toolbox,
      title: 'JHA',
      description: 'Job Hazard Analysis',
      disabled: false,
    },
    {
      path: '/cse',
      icon: Icons.SafetyHelmet,
      title: 'CSE',
      description: 'Confined Space Entry',
      disabled: false,
    },
    {
      path: '/rp',
      icon: Icons.FirstAid,
      title: 'RP',
      description: 'Rescue Plan',
      disabled: false,
    },
    {
      path: '/vp',
      icon: Icons.SafetyHelmet,
      title: 'VP',
      description: 'Ventilation Plan',
      disabled: false,
    },
    {
      path: '/eic',
      icon: Icons.SolarPanel,
      title: 'EIC',
      description: 'Electrical Isolation Certificate',
      disabled: false,
    },
    {
      path: '/pic',
      icon: Icons.SafetyHelmet,
      title: 'PIC',
      description: 'Physical Isolation Certificate',
      disabled: false,
    },
    {
      path: '/dc',
      icon: Icons.SafetyHelmet,
      title: 'DC',
      description: 'Diving Certificate',
      disabled: true,
    },
    {
      path: '/vec',
      icon: Icons.SafetyHelmet,
      title: 'VEC',
      description: 'Vehical Entry Certificate',
      disabled: true,
    },
    {
      path: '/roc',
      icon: Icons.SafetyHelmet,
      title: 'ROC',
      description: 'Road Obstruction Certificate',
      disabled: true,
    },
    {
      path: '/ec',
      icon: Icons.SafetyHelmet,
      title: 'EC',
      description: 'Excavation Certificate',
      disabled: true,
    },
    {
      path: '/scpd',
      icon: Icons.SafetyHelmet,
      title: 'SCPD',
      description: 'Safety Critical Protection Device',
      disabled: true,
    },
    {
      path: '/pil',
      icon: Icons.SafetyHelmet,
      title: 'PIL',
      description: 'Physical Isolation Library',
      disabled: true,
    },
    {
      path: '/lc',
      icon: Icons.SafetyHelmet,
      title: 'LC',
      description: 'Lifting Certificate',
      disabled: true,
    },
    {
      path: '/loeac',
      icon: Icons.SafetyHelmet,
      title: 'LOEAC',
      description: 'Limit of Electrical Access Certificate',
      disabled: true,
    },
    {
      path: '/peti',
      icon: Icons.SafetyHelmet,
      title: 'PETI',
      description: 'Portable Equipment Temporary Installation Certificate',
      disabled: true,
    },
    {
      path: '/rc',
      icon: Icons.SafetyHelmet,
      title: 'RC',
      description: 'Radiation Certificate',
      disabled: true,
    },
  ];

  const renderButtons = () => {
    return document.map((doc, index) => (
      <DocumentButton
        key={index}
        to={doc.path}
        onClick={onClose}
        component={Link}
        variant="outlined"
        disabled={doc.disabled}
        sx={{
          ml: index % 2 === 0 ? 0 : 1,
          mr: index % 2 === 0 ? 1 : 0,
          mb: 2,
        }}
      >
        <Box display="flex" sx={{ alignItems: 'center' }}>
          <Box
            color="primary.main"
            component="img"
            src={doc.icon}
            sx={{
              width: 60,
              height: 60,
              objectFit: 'none',
            }}
          />
          <Box>
            <Typography fontSize={16} fontWeight={700}>
              {doc.title}
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={500}
              color={doc.disabled ? null : 'neutral2.dark'}
            >
              {doc.description}
            </Typography>
          </Box>
        </Box>
      </DocumentButton>
    ));
  };

  return (
    <div>
      <Dialog
        open={open}
        fullWidth={true}
        onClose={onClose}
        scroll="paper"
        aria-labelledby="create-dialog-title"
        aria-describedby="create-dialog-description"
      >
        <DialogTitle sx={{ px: 2.5 }} id="create-dialog-title">
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Box>{dialog.title}</Box>
              <DialogContentText>{dialog.subtitle}</DialogContentText>
            </Box>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ px: 2.5 }}>{renderButtons()}</DialogContent>
      </Dialog>
    </div>
  );
}

export { CreateDialog };
