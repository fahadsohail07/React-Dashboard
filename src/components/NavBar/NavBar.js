import "./NavBar.css";
import logo from "../../assets/logo.svg";
import account from "../../mock/account";

const NavBar = () => {
  const navBarItems = [
    "Dashboard",
    "User",
    "Product",
    "Blog",
    "Login",
    "Categories",
  ];
  return (
    <div className="nav-bar">
      <div className="app-logo">
        <img src={logo} alt="logo" height="80px" width="80px" />
      </div>
      <div className="user-profile">
        <img src={account.image} alt="account-image" height="60px" width="60px" />
        <p>{account.displayName}</p>
      </div>
      {navBarItems.map((item) => (
        <p className="nav-bar-item">{item}</p>
      ))}
    </div>
  );
};

export default NavBar;
