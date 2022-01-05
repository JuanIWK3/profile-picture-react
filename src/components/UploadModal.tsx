import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Alert, Button, Container, Modal, Spinner } from "react-bootstrap";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import ImageURLValidator from "../validators/ImageURLValidator";
import { ProfilePicture } from "./ProfilePicture.style";

export const UploadModal = () => {
  //* =========== useState ===========

  const [validImage, setValidImage] = useState(false);
  const [show, setShow] = useState(false);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadFormError, setUploadFormError] = useState<string>("");
  const [avatar, setAvatar] = useState(
    "https://i.pinimg.com/474x/ee/60/0b/ee600b5178e4f1648fd1e8623f049611.jpg"
  );

  //* =========== useRef ===========

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  //* =========== Functions ===========

  const handleUpdatePic = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setAvatar(previewURL);
      handleClose();
    }, 1000);
  };

  const handleFileUpload = (element: HTMLInputElement) => {
    const url = element.value;
    const validator = new ImageURLValidator(url);
    const valid = validator.vali();
    if (valid) {
      setPreviewURL(url);
      setValidImage(true);
    } else {
      setPreviewURL("");
      setValidImage(false);
    }
  };

  const handleClose = () => {
    setShow(false);
    setPreviewURL("");
    setUploadFormError("");
  };
  const handleShow = () => (setShow(true), setError(""));

  //* =========== Style ===========

  const style = {
    button: {
      width: "100%",
      marginBottom: "16px",
    },
    input: {
      width: "100%",
    },
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "200px",
        maxWidth: "500px",
      }}
    >
      <ProfilePicture onClick={handleShow} backgroundImage={avatar} />
      <div className="w-100 text-center mt-2">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change your profile picture</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="input-group" style={{ width: "100%" }} />
            {!loading ? (
              <>
                <p>Preview</p>
                <ProfilePicture backgroundImage={previewURL} />
              </>
            ) : (
              <>
                <p>Loading</p>
                <Spinner
                  style={{
                    backgroundImage: `url(https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1)`,
                    backgroundPosition: "center",
                    height: "200px",
                    width: "200px",
                  }}
                  animation="border"
                />
              </>
            )}
            <div>{uploadFormError && <p>{uploadFormError}</p>}</div>
            {error && (
              <Alert className="h-25" variant="danger">
                {error}
              </Alert>
            )}
            <div>
              <input
                type="text"
                onChange={(e: SyntheticEvent) =>
                  handleFileUpload(e.currentTarget as HTMLInputElement)
                }
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={handleUpdatePic}
              disabled={!validImage}
              type="submit"
              variant="primary"
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};
