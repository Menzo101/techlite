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
                  What is TechElite ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faqTextTwo">
                  TechElite is your edutech project focused on teaching people
                  across the globe tech skills at an affordable rate, with the
                  goal of enhancing lives.
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
                  What types of skills do TechEliteskill offer ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faqTextTwo">
                  TechElite intends to offer practical, in-demand tech skills
                  such as web and mobile development, UI/UX design, data
                  analytics, and cloud technologies. The focus is on hands-on
                  learning that equips learners to secure jobs, start
                  businesses, and improve their livelihoods at an affordable
                  cost..
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
                <Typography className="faqTextTwo">
                  access to a device with internet, and a willingness to learn.
                  Any needed foundational knowledge, like basic coding or
                  digital skills, would be taught at the start of the program.
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
                <Typography className="faqTextTwo">
                  Yes — TechElite offers completion certificates for each course
                  or skill track, and possibly industry-recognized
                  certifications if partnered with platforms like AWS, Google.
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
                  I'm still working/a student, can I still join a Techliteskills
                  Hub programme?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faqTextTwo">
                  Yes — TechEliteSkills programs can be designed to fit flexible
                  schedules, so working professionals and students can join. You
                  can learn at your own pace through evening, weekend, or fully
                  online classes without disrupting your job or studies.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
