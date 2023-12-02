import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const CommonHeaderWrapper = styled(Stack)`
  margin-bottom: 45px;
`;

interface commonheaderProps {
  title: string;
}

export const CommonHeader = ({ title }: commonheaderProps) => {
  return (
    <CommonHeaderWrapper direction="row" justifyContent="center">
      <Typography variant="h2">{title}</Typography>
    </CommonHeaderWrapper>
  );
};
