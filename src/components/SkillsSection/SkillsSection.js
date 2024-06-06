import { Container, Grid, Box, Typography } from "@mui/material";
import SkillCategory from "./SkillsCategory";
import { skills } from "./skills";

const SkillsSection = () => (
  <Box id="skills" sx={{ py: 4, px: 2, bgcolor: "#f5f5f5" }}>
    <Container>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", color: "rgb(23, 163, 163)" }}
      >
        SKILLS
      </Typography>
      <Grid container spacing={4}>
        {skills.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <SkillCategory
              category={category.category}
              items={category.items}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default SkillsSection;
