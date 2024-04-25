import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './pages/contacts/contacts'
import Members from './pages/members/members'
import Donations from './pages/donations/donations'
import MainPage from './pages/main-page/main-page'
import News from './pages/news/news'
import JoinAnAssociation from './pages/join-an-association/join-an-association'
import Authorisation from "./pages/authorisation/authorisation";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/donations" element={<Donations />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/join" element={<JoinAnAssociation />} />
                    <Route path="/out" element={<Authorisation />} />
                    <Route path="*" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

