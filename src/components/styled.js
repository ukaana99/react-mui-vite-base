import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import MuiDivider from '@mui/material/Divider';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/system';

// Box ----------------------------------------- //
// export const SectionBox = styled(MuiBox)({
//   borderRadius: '8px',
//   flexGrow: 1,
//   px: 4,
//   py: 2,
// });

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

// Button ----------------------------------------- //
export const CreateButton = styled(MuiButton)({
  padding: '12px 16px 12px 12px',
  height: '44px',
  width: '120px',
  alignSelf: 'center',
});
