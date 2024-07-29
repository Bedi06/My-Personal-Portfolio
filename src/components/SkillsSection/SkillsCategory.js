import { Box, Typography } from "@mui/material";
import SkillItem from "./SkillItem";

const SkillCategory = ({ category, items }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      {category}
    </Typography>
    {items.map((skill, index) => (
      <SkillItem key={index} skill={skill} />
    ))}
  </Box>
);

export default SkillCategory;
