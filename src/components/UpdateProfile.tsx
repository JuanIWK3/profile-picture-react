import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { ProfilePicture } from "./ProfilePicture.style";
import { useUploadContext } from "./../Contexts/UploadContext";
import { UploadModal } from "./UploadModal";

export const UpdateProfile = () => {
  return (
    <Card>
      <Card.Body>
        <UploadModal />
      </Card.Body>
    </Card>
  );
};
