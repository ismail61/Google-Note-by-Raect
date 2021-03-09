import React from "react";
import { Button,Tooltip,Badge } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MailIcon from '@material-ui/icons/Mail';
const MaterialUi = () => {
  return (
    <div>
      <Tooltip title="Delete">
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
            Delete
        </Button>
      </Tooltip>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
        </Badge>
    </div>
  );
};

export default MaterialUi;
