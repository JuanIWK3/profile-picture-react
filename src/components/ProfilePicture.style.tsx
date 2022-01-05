import React from "react";
import styled from "styled-components";

interface ProfilePictureProps {
  backgroundImage: string;
}

export const ProfilePicture = styled.div<ProfilePictureProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-color: gray;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid gray;
  height: 200px;
  width: 200px;
  cursor: pointer;
`;
