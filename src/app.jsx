import "./app.css";
import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";

//COMPONENTS
import Header from "./components/Header";
import Banner from "./components/Banner";
import HomeBanner from "./components/HomeBanner";
import Container from "./components/Container";
import Login from "./components/Login";
import Card from "./components/Card";
import List from "./components/List";
import { useState } from "react";

// FOR NAVIGATION
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MATERIAL UI
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";

export function App() {
  // FOR POPUP WHEN CLICKED ON ANY MOVIE
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // TO GET THE DATA OF MOVIE WHEN CLICKED ON IT
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
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    className: "removeOverflowY",
                  }}
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
                    title="Popular"
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
