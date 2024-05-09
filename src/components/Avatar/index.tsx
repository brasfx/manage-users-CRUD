import { Avatar, Tooltip, Typography } from '@mui/material';

import { BoxAvatar, BoxName } from './styles';

import { getCorrectTypeUserLabel } from '@utils/userLabel';

export const CustomAvatar = () => {
  const user = localStorage.getItem('login') as string;
  const fullName = `${JSON.parse(user)[0].name} ${
    JSON.parse(user)[0].lastName
  }`;

  const userType = getCorrectTypeUserLabel(JSON.parse(user)[0].userType);
  const userEmail = JSON.parse(user)[0].email;

  return (
    <Tooltip
      title={
        <BoxName>
          <Typography>{fullName}</Typography>
          <Typography>{userType}</Typography>
          <Typography>{userEmail}</Typography>
        </BoxName>
      }
    >
      <BoxAvatar>
        <BoxName>
          <Typography fontSize="12px" fontWeight="bold">
            {fullName}
          </Typography>
          <Typography fontSize="12px">{userType}</Typography>
        </BoxName>
        <Avatar alt="user-avatar" />
      </BoxAvatar>
    </Tooltip>
  );
};
