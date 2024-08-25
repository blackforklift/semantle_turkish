import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faChartBar } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";
import Modal from "./Modal"; 
import infos from "../Info";

function Header() {
  const [openStatsDialog, setOpenStatsDialog] = useState(false);
  const [openInfoDialog, setOpenInfoDialog] = useState(false);

  const handleStatsClick = () => {
    setOpenStatsDialog(true);
  };

  const handleInfoClick = () => {
    setOpenInfoDialog(true);
  };

  const handleCloseStatsDialog = () => {
    setOpenStatsDialog(false);
  };

  const handleCloseInfoDialog = () => {
    setOpenInfoDialog(false);
  };

  function createEntry(info) {
    return <Entry key={info.id} title={info.title} content={info.content} />;
  }

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      mb={8}
      mt={8}
      sx={{ padding: "0 20px" }}
    >
      <Grid item>
        <img src="/anlambul_logo.svg" alt="Logo" className="h-100 sm:h-102" />
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          style={{ padding: "1rem", cursor: "pointer" }}
          icon={faChartBar}
          size="2x"
          color="#272830"
          onClick={handleStatsClick}
        />
        <FontAwesomeIcon
          style={{ padding: "1rem", cursor: "pointer" }}
          icon={faCircleInfo}
          size="2x"
          color="#272830"
          onClick={handleInfoClick}
        />

        <Modal
          open={openStatsDialog}
          handleClose={handleCloseStatsDialog}
          title={infos[0].title}
          content={infos[0].content}
        />
        <Modal
          open={openInfoDialog}
          handleClose={handleCloseInfoDialog}
          title={infos[1].title}
          content={infos[1].content}
        />
      </Grid>
    </Grid>
  );
}

export default Header;
