import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  display: flex;
  padding: 11px 30px;
  min-width: auto;
  justify-content: center;
  align-items: center;
  &.signUpButton {
    width: 100%;
    padding: 23px 0;
    text-transform: capitalize;
    margin-top: 10px;
  }
  &.vendorBtn {
    padding: 23px 0;
    margin-top: 10px;
    border-radius: 5px;
    @media (max-width: 599px) {
      margin-top: 5px;
      padding: 18px 0;
    }
    span {
      font-weight: 800;
      text-transform: uppercase;
    }
  }
  &.Mui-disabled {
    background-color: ${primaryColors?.disabledBg};
    border: 1px solid ${primaryColors?.disabledBg};

    span {
      color: ${primaryColors?.white};
    }
    img {
      filter: contrast(0);
    }
  }
  &.smallButton {
    padding: 4px 16px;
    width: auto;
  }

  &.MuiButton-outlinedInfo {
    span {
      color: ${primaryColors?.black};
    }
  }
  span {
    font-size: 0.875em;
    font-weight: 700;
    color: ${primaryColors?.black};
  }

  /* img {
    width: 24px;
  } */
`;

interface CustomButtonprops extends ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  buttonType?: "small" | "large";
  type?: "submit" | "reset" | "button";
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  type,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      type={type}
      className={`${buttonType === "small" && "smallButton"} ${
        className || ""
      }`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
