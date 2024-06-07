import * as React from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";

const onDownloadClick = () => {
  const pdfUrl = "Gonzalve_Resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "/Gonzalve_Resume.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ModalResume = ({ open, onClose, images }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
          maxWidth: "80%",
          width: "50%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "right",
            margin: "0",
            padding: "0",
          }}
        >
          <IconButton
            // color="error"
            onClick={onClose}
            sx={{ mb: 2, padding: "0" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
        ></Typography>
        <Box sx={{ flex: 1, overflow: "auto" }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Page ${index + 1}`}
              style={{ width: "100%", height: "auto", marginBottom: "20px" }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
          }}
        >
          {/* <Button
            variant="contained"
            color="error"
            onClick={onClose}
            sx={{ mt: 2 }}
          >
            Close
          </Button> */}

          <Button
            variant="contained"
            color="primary"
            onClick={onDownloadClick}
            sx={{ mt: 2, ml: 6 }}
          >
            Download
            <IconButton size="small" sx={{ color: "white" }}>
              <DownloadIcon fontSize="inherit" />
            </IconButton>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalResume;
