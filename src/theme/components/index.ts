import { Components, Theme } from "@mui/material";
import MuiButton from "./MuiButton";
import MuiIconButton from "./MuiIconButton";
import MuiFormLabel from "./MuiFormLabel";
import MuiSwitch from "./MuiSwitch";
import MuiTab from "./MuiTab";
import MuiTabs from "./MuiTabs";

const components: Components<Omit<Theme, "components">> = {
  MuiButton,
  MuiIconButton,
  MuiFormLabel,
  MuiSwitch,
  MuiTab,
  MuiTabs,
};

export default components;
