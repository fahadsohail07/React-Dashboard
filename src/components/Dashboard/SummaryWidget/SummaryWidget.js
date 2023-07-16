import "./SummaryWidget.css";
import { Box } from "@mui/material";

const SummaryWidget = (props) => {
  return (
    <Box
      sx={{
        height: props.height,
        backgroundColor: props.color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
      }}
    >
      <p className="summary-amount">{props.amount}</p>
      <p className="summary-name">{props.summaryName}</p>
    </Box>
  );
};

export default SummaryWidget;
