import { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";
import account from "../../../mock/account";

const options = [
  {
    label: "Home",
  },
  {
    label: "Profile",
  },
  {
    label: "Settings",
  },
];

const ProfileDropdown = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <IconButton onClick={handleOpen} sx={{ marginLeft: "20px" }}>
        <Avatar src={account.image} alt="user Image" />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {account.email}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: "dashed" }} />
        <Stack sx={{ p: 1 }}>
          {options.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>
        <Divider sx={{ borderStyle: "dashed" }} />
        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </div>
  );
};

export default ProfileDropdown;
