import "./TopBar.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageDropdown from "./Language/LanguageDropdown";
import NotificationsDropdown from "./Notifications/NotificationsDropdown";
import ProfileDropdown from "./Profile/ProfileDropdown";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="search">
        <SearchIcon fontSize="large" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="icons">
        <LanguageDropdown />
        <NotificationsDropdown />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default TopBar;
