import React, { useContext, useState } from "react";

const UploadContext = React.createContext({});

export const useUploadContext = () => {
  return useContext<any>(UploadContext);
};

export const UploadContextProvider: React.FC = ({ children }) => {
  const [modalShow, setModalShow] = useState(true);

  const value = { modalShow, setModalShow };

  return (
    <UploadContext.Provider value={value}>{children}</UploadContext.Provider>
  );
};
