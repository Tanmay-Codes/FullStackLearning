import { styled } from "@mui/material/styles";
import {
  AppBar,
  Badge,
  Breadcrumbs,
  FormControlLabel,
  IconButton,
  Link,
  List,
  ListItemButton,
  Menu,
  Switch,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";
import InfoIcon from "@mui/icons-material/Info";
import * as React from "react";
import { Stack } from "@mui/system";
import NotificationList from "./NotificationList";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MessageList from "./MessageList";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    maxWidth: "100%",
    marginBottom: "18px",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    width: "1200px",
    margin: "0 auto",
  },
  display: "flex",
  justifyContent: "space-between",
}));

const StyledTextField = styled(TextField)({
  background: "white",
  borderRadius: "8px",
  paddingLeft: "3px",
});

function Navbar({ mode, setMode }) {
  const [anchorEln, setAnchorEln] = React.useState(null);
  const [anchorElm, setAnchorElm] = React.useState(null);
  const [anchorEla, setAnchorEla] = React.useState(null);
  const openN = Boolean(anchorEln);
  const openM = Boolean(anchorElm);
  const openAccount = Boolean(anchorEla);
  const handleClicknotification = (event) => {
    setAnchorEln(event.currentTarget);
  };
  const handleClickAvatar = (event) => {
    setAnchorEla(event.currentTarget);
  };
  const handleClickmessage = (event) => {
    setAnchorElm(event.currentTarget);
  };
  const handleClose = () => {
    openN
      ? setAnchorEln(null)
      : openM
      ? setAnchorElm(null)
      : setAnchorEla(null);
  };
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          JaMcleF
        </Typography>
        <AudiotrackIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <StyledTextField variant="standard" placeholder=" Search" />
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton color="inherit">
            <Tooltip title="Your Profile">
              <Person2Icon />
            </Tooltip>
          </IconButton>

          {/* ----------------------- */}
          {/* This is Email Icon */}

          <IconButton
            color="inherit"
            id="basic-button-message"
            aria-controls={openM ? "basic-menu-message" : undefined}
            aria-haspopup="true"
            aria-expanded={openM ? "true" : undefined}
            onClick={handleClickmessage}
          >
            <Badge badgeContent={4} color="error">
              <Tooltip title="messages">
                <EmailIcon />
              </Tooltip>
            </Badge>
          </IconButton>

          <Menu
            id="basic-menu-message"
            anchorEl={anchorElm}
            open={openM}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button-message",
            }}
          >
            <MessageList />
          </Menu>

          {/* --------------------------------------- */}
          {/* This is notification Icon */}

          <IconButton
            color="inherit"
            id="basic-button-notification"
            aria-controls={openN ? "basic-menu-notificaion" : undefined}
            aria-haspopup="true"
            aria-expanded={openN ? "true" : undefined}
            onClick={handleClicknotification}
          >
            <Badge badgeContent={4} color="error">
              <Tooltip title="Notifications">
                <NotificationsIcon />
              </Tooltip>
            </Badge>
          </IconButton>
          <Menu
            id="basic-menu-notification"
            anchorEl={anchorEln}
            open={openN}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button-notification",
            }}
          >
            <NotificationList />
          </Menu>
          {/* ------------------------------------------ */}
          <Tooltip title="Analytics" arrow>
            <InfoIcon color="inherit" />
          </Tooltip>
          <Breadcrumbs color="inherit" separator="|">
            <Link href="#" color="inherit" underline="hover">
              Gigs
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Jam
            </Link>
          </Breadcrumbs>
          <IconButton
            color="inherit"
            id="account-menu"
            aria-controls={openN ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openAccount ? "true" : undefined}
            onClick={handleClickAvatar}
          >
            <Avatar
              alt="person"
              src="https://randomuser.me/api/portraits/men/88.jpg"
              sx={{ width: 36, height: 36 }}
            />
          </IconButton>
          <Menu
            id="accout-menu"
            anchorEl={anchorEla}
            open={openAccount}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "account-menu",
            }}
          >
            <List>
              <ListItemButton>Account Settings</ListItemButton>
              <ListItemButton>Subscritions</ListItemButton>
              <ListItemButton>Support</ListItemButton>
              <ListItemButton>Log Out</ListItemButton>
            </List>
          </Menu>
          <FormControlLabel
            control={
              <Switch
                color="warning"
                icon={<DarkModeIcon color="white" />}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            }
          />
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;
