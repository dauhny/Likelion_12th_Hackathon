import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: 1.5rem;
  color: lightgray;

  ${({ isHalf }) =>
    isHalf &&
    css`
      position: absolute;
      width: 12px;
      overflow: hidden;

      &:nth-of-type(10) {
        transform: translate(-132px);
      }
      &:nth-of-type(8) {
        transform: translate(-102px);
      }
      &:nth-of-type(6) {
        transform: translate(-72px);
      }
      &:nth-of-type(4) {
        transform: translate(-42px);
      }
      &:nth-of-type(2) {
        transform: translate(-12px);
      }
    `}
`;

const StarInput = ({ onClickRating, value, isHalf }) => {
  const handleClickRatingInput = () => {
    onClickRating(value);
  };

  return (
    <>
      <Input type="radio" name="rating" id={`star${value}`} value={value} />
      <Label
        onClick={handleClickRatingInput}
        isHalf={isHalf}
        htmlFor={`star${value}`}
      >
        {isHalf ? <FaStarHalf /> : <FaStar />}
      </Label>
    </>
  );
};

export default StarInput;
