import "./App.css";
import MuiBottomNavigation from "./components/bottomNavigation/MuiBottomNavigation";
import Buttons from "./components/buttons/Buttons";
import MuiAccordian from "./components/muiAccordian/MuiAccordian";
import MuiAutocomplete from "./components/muiAutocomplete/MuiAutocomplete";
import MuiAvatar from "./components/muiAvatar/MuiAvatar";
import MuiBadge from "./components/muiBadge/MuiBadge";
import MUIBreadcrumbs from "./components/muiBreadcrumbs/MUIBreadcrumbs";
import MuiCards from "./components/muiCards/MuiCards";
import MuiCheckbox from "./components/muiCheckbox/MuiCheckbox";
import MuiChips from "./components/muiChips/MuiChips";
import MuiDrawer from "./components/MuiDrawer/MuiDrawer";
import MuiFeedbackComponents from "./components/muiFeedbackComponents/MuiFeedbackComponents";
import MuiImgList from "./components/MuiImgList/MuiImgList";
import MuiLayout from "./components/muiLayout/MuiLayout";
import MuiLink from "./components/muiLinks/MuiLink";
import MuiList from "./components/muiList/MuiList";
import MuiNavbar from "./components/muiNavbar/MuiNavbar";
import MuiRadioButton from "./components/muiRadioButtons/MuiRadioButton";
import MuiRating from "./components/muiRating/MuiRating";
import MuiSpeedDial from "./components/muiSpeedDial/MuiSpeedDial";
import MuiSwitch from "./components/muiSwitch/MuiSwitch";
import MuiTable from "./components/muitable/MuiTable";
import MuiTooltip from "./components/muiTooltip/MuiTooltip";
import Selectcomponent from "./components/selectcomponent/Selectcomponent";
import Textbox from "./components/textboxes/Textbox";
import Togglebuttons from "./components/togglebuttons/Togglebuttons";
import { createTheme, colors, Theme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1b11",
    },
    secondary: {
      main: "#b3a29a",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiNavbar />
        <Buttons />
        <Togglebuttons />
        <Textbox />
        <Selectcomponent />
        <MuiRadioButton />
        <MuiCheckbox />
        <MuiSwitch />
        <MuiRating />
        <MuiAutocomplete />
        <MuiLayout />
        <MuiCards />
        <MuiAccordian />
        <MuiImgList />
        <MuiLink />
        <MUIBreadcrumbs />
        <MuiDrawer />
        <MuiSpeedDial />
        <MuiBottomNavigation />
        <MuiAvatar />
        <MuiBadge />
        <MuiList />
        <MuiChips />
        <MuiTooltip />
        <MuiTable />
        <MuiFeedbackComponents />
      </div>
    </ThemeProvider>
  );
}

export default App;
