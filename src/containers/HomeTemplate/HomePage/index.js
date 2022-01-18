import React from "react";
import Button from '@mui/material/Button';
import useStyle from "../../../style";
export default function HomePage() {
    const classes = useStyle();
  return (
    <div className={classes.content}>
        <span>HAHHHH</span>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

    </div>
  );
}
