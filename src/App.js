// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resources from "./pages/EducationalResourcesPage";
import Quizzes from "./pages/InteractiveQuizzesPage";
import Banner from "./components/Banner";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Box pb="150px">
                    <Header />
                    <Banner />
                    <Container maxW="container.xl" mb={40}>
                        <Routes>
                            <Route exact path="/" element={<LandingPage />} />
                            <Route path="/resources" element={<Resources />} />
                            <Route path="/quizzes" element={<Quizzes />} />
                        </Routes>
                    </Container>
                    <Footer />
                </Box>
            </Router>
        </ChakraProvider>
    );
}

export default App;
