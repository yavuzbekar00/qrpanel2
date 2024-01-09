import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function page() {
    return (
        <Box sx={{
            minHeight: "100vh",
            height: "100%",
            backgroundColor: "#ed6c02"
        }}>
            <Box sx={{
                width: 1,
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography sx={{
                    width: "75%",
                    overflow: "hidden",
                    textAlign: "center",
                    fontSize: "35px",
                    fontWeight: "600",
                    fontFamily: "cursive",
                    color: "#ffffff"
                }}>Şirket adı</Typography>
            </Box>
            <Box p={2}>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>deneme 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>içerik</Typography>
                    </AccordionDetails>
                </Accordion>

            </Box>
        </Box>
    )
}

export default page