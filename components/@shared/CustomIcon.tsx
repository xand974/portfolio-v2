import React from "react";
import * as Icon from "@mui/icons-material";

type IconType = {
  iconName: string;
  className: string;
};
export default function CustomIcon({ iconName, className }: IconType) {
  //@ts-ignore
  const DynamicIcon = Icon[iconName];
  return <DynamicIcon className={className} />;
}
