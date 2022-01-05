import React, { useState } from "react";
import { UpdateProfile } from "./UpdateProfile";
import { UploadContextProvider } from "../Contexts/UploadContext";

function App() {
  return (
    <UploadContextProvider>
      <UpdateProfile />
    </UploadContextProvider>
  );
}

export default App;
