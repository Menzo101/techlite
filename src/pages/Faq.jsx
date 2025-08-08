import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

export const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="faq-container">
        <div>
          <h1 className="faq-heading">
            Frequently Asked <br /> Question{" "}
          </h1>
        </div>
        <div className="accordion-box">
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{
                background: "#3c3c3c",
                color: "white",

                marginTop: "3rem",
                padding: "10px 5px",
                borderRadius: "12px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  component="span"
                  className="faqText"
                  sx={{ width: "100%", flexShrink: 0 }}
                >
                  What is Techlite skill hub ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{
                background: "#3c3c3c",
                color: "white",
                marginTop: "10px",
                padding: "10px 5px",
                borderRadius: "12px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "white" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  component="span"
                  className="faqText"
                  sx={{ width: "100%", flexShrink: 0 }}
                >
                  What types of skills do Techliteskill offer ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{
                background: "#3c3c3c",
                color: "white",
                marginTop: "10px",

                padding: "10px 5px",
                borderRadius: "12px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "white" }} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  component="span"
                  className="faqText"
                  sx={{ width: "100%", flexShrink: 0 }}
                >
                  Are there any prerequisites for enrolling in the courses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{
                background: "#3c3c3c",
                color: "white",
                marginTop: "10px",
                padding: "10px 5px",
                borderRadius: "12px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "white" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  component="span"
                  className="faqText"
                  sx={{ width: "100%", flexShrink: 0 }}
                >
                  Are there any assessments or certifications offered?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "pane15"}
              onChange={handleChange("pane15")}
              sx={{
                background: "#3c3c3c",
                color: "white",
                marginTop: "10px",
                padding: "10px 5px",
                borderRadius: "12px",
              }}
              className="bander"
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "white" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  component="span"
                  className="faqText"
                  sx={{ width: "100%", flexShrink: 0 }}
                >
                  Are there any assessments or certifications offered?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
