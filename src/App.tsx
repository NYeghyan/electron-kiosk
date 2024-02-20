import { useSelector } from "react-redux";
import useGetFolders from "./App/Hooks/useGetFolders";
import { RootState } from "./Redax/store";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import "./App.css";

import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect, useRef, useState } from "react";
import BasicModal from "./App/Modal/Modal";
import { Charts } from "./App/Pages/Charts/Charts";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function App() {
  const folderData = useSelector((state: RootState) => state.folderSlice.value);

  const [path, setPath] = useState<string>();
  const [openmodal, setOpenModal] = useState<boolean>(false);
  const [filePath, setFilePath] = useState<string>();
  const [openStates, setOpenStates] = useState(folderData.map(() => false));

  const handleItemClick = (index: number) => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = !updatedOpenStates[index];
    setOpenStates(updatedOpenStates);
  };

  useGetFolders();

  // const handleFolderClick = (path: string) => {
  //   fetch(`http://localhost:3000/admin/files?path=${path}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // You can include additional headers if needed
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(setFileData(data));
  //     });
  // };

  useEffect(() => {
    if (folderData && folderData[0]) {

      const length = folderData[0].files.length;
      const pathConst = folderData[0].files[length - 1].filePath;
      setFilePath(pathConst);
      handlefileClick(pathConst);
    }
  }, [folderData]);

  const handlefileClick = (pathProp: string) => {

    if (pathProp === filePath) return;
    fetch(`http://localhost:3000/download?path=${pathProp}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // You can include additional headers if needed
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
      
        setPath(imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // )}

  const handleFilename = (name: string) => {
    if(name.substring(0,6) === "RedTop") {
      return name
    } else {
      return "Q A Mart " + name.substring(6, name.length)
    }
    
 

  }



  return (
 
      <div className="main-div">
        <div className="main-div-content">
          <div className="relative100 main-div-content-item-list" >
            {folderData
              .slice(0)
              .reverse()
              .map((x, index) => {
                return (
                  <List key={index}>
                    <ListItem  onClick={() => handleItemClick(index)}>
                      <ListItemText primary={x.name} />
                      <IconButton aria-label="file" className="mr8">
                        <StyledBadge
                          // badgeContent={x.files.length - 1 || 0}
                          color="secondary"
                        >
                          <InsertDriveFileIcon />
                        </StyledBadge>
                      </IconButton>
                      {openStates[index] ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </ListItem>
                    <Collapse
                      in={openStates[index]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {x.files
                          .filter((x) => x.name !== ".DS_Store")
                          .map((item, index) => (
                            <div className="list-item" key={index}>
                              <div>
                                <ListItem>
                                  <ListItemText
                                    primary={handleFilename(item.name)}
                                    onClick={() =>
                                      handlefileClick(item.filePath)
                                    }
                                  />
                                </ListItem>
                              </div>
                              {/* <div>
                                <Button
                                  variant="outlined"
                                  onClick={() => handleItemProcesing()}
                                >
                                  Proceesd
                                </Button>
                              </div>  */}
                            </div>
                          ))}
                      </List>
                    </Collapse>
                  </List>
                );
              })}
          </div>
          <div className="relative100 main-div-content-pdf">
            <iframe
              src={path || ""}
              title="File Viewer"
              className="pdf-iframe"
              frameBorder="0"
            >
              This browser does not support PDFs. Please download the PDF to
              view it.
            </iframe>
          </div>
          <div className="main-div-content-pos relative100">
              <Charts />
          </div>
        </div>
      </div>

  );
}

export default App;
