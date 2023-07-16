import "./NotificationsDropdown.css"
import { NotificationsOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

const NotificationsDropdown = () => {
  return (
    <div className="notifications">
      <Badge badgeContent={5} color="primary">
        <NotificationsOutlined />
      </Badge>
    </div>
  );
};

export default NotificationsDropdown;
