import "./app.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import HomeBanner from "./components/HomeBanner";

import Container from "./components/Container";
import Login from "./components/Login";
import { useState } from "react";

// import List from "./components/List";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import List from "./components/List";
// ........................................
import * as React from "react";

import Dialog from "@mui/material/Dialog";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function App() {
  // ............................
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // ....................................
  const [cardData, setCardData] = useState([]);
  const getDataForCard = (movieData) => {
    setCardData(movieData);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Container>
                  <Header />
                  <Banner />
                </Container>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <Container>
                <Login />
              </Container>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <HomeBanner />
                {/*.....................................  */}

                <Dialog
                  // fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    className: "removeOverflowY",
                  }}

                  // aria-labelledby="responsive-dialog-title"
                >
                  <Card
                    setCardData={setCardData}
                    data={cardData}
                    handleClose={handleClose}
                  ></Card>
                </Dialog>

                {/* ................................................ */}

                <>
                  <List
                    handleClickOpen={handleClickOpen}
                    getDataForCard={getDataForCard}
                    title="Originals"
                    param="originals"
                  />
                  {/* <List title="Trending" param=" trending" /> */}
                  <List
                    handleClickOpen={handleClickOpen}
                    getDataForCard={getDataForCard}
                    title="Populer"
                    param="popular"
                  />
                  <List
                    handleClickOpen={handleClickOpen}
                    getDataForCard={getDataForCard}
                    title="Playing Now"
                    param="playingNow"
                  />
                  {/* <List title="Top Rated" param="topRated" /> */}
                  <List
                    handleClickOpen={handleClickOpen}
                    getDataForCard={getDataForCard}
                    title="Up Comming"
                    param="upComming"
                  />
                </>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
