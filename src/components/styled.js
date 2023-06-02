import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import MuiDivider from '@mui/material/Divider';
import { styled } from '@mui/system';

// FlexBox ----------------------------------------- //
export const FlexBox = styled(MuiBox)({
  display: 'flex',
});

export const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

export const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

// Divider ----------------------------------------- //
export const Divider = styled(MuiDivider)(({ theme }) => ({
  background: '#C9D5E3',
}));

// Button ----------------------------------------- //
export const CreateButton = styled(MuiButton)({
  padding: '12px 16px 12px 12px',
  height: '44px',
  width: '120px',
  alignSelf: 'center',
});
