import React from "react";
import { styled } from "@mui/system";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const StyledCard = styled(Card)`
  height: 14em;
  display: flex;
  flex-direction: column;
`;

export default function Projects() {
  const cardData = [
    {
      name: "Project #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Project #2",
      description: "If you get this far, you've gotten pretty good at this.",
    },
    {
      name: "Project #3",
      description: "Another random thing!",
    },
  ];
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={4} key={index} sx={{ textAlign: "center" }}>
          <StyledCard>
            <CardContent>
              <Typography variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {card.subtitle}
              </Typography>
              <Typography variant="body2" component="p">
                {card.description}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
