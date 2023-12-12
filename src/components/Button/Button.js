import { StyledButton } from "./Button.Styled";

const Button = ({ onButtonClick }) => {
  return (
    <StyledButton type="button" onClick={onButtonClick}>
      Load more
    </StyledButton>
  );
};

export default Button;
