import { useState } from "react";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import EnglandFlag from "../../../assets/ic_flag_en.svg";
import GermanyFlag from "../../../assets/ic_flag_de.svg";
import FranceFlag from "../../../assets/ic_flag_fr.svg";

const languages = [
  {
    value: "en",
    label: "English",
    icon: EnglandFlag,
  },
  {
    value: "de",
    label: "German",
    icon: GermanyFlag,
  },
  {
    value: "fr",
    label: "French",
    icon: FranceFlag,
  },
];

const LanguageDropdown = () => {
  const [open, setOpen] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    handleClose();
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 65,
          height: 50,
        }}
      >
        <img src={selectedLanguage.icon} alt={selectedLanguage.label} />
        <ArrowDropDown />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Stack spacing={1}>
          {languages.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === selectedLanguage.value}
              onClick={() => handleLanguageSelect(option)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </div>
  );
};

export default LanguageDropdown;
