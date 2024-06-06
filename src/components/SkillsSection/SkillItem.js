import { Typography } from "@mui/material";

const SkillItem = ({ skill }) => (
  <Typography variant="body2" sx={{ mb: 1 }}>
    {skill}
  </Typography>
);

export default SkillItem;
