import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './app/components/layout/Layout';
import { Admin, Checkout, Home, Login, News, NotFound, Realtime, Register, Search } from './app/pages';
import { Authors, Clubs, Competitions, Materials, Players, Schedules } from './app/components/adminPanel/sections';
import { NewAuthorForm, NewClubForm, NewCompetitionForm, NewMaterialForm, NewPlayerForm, NewScheduleForm } from './app/components/adminPanel/forms/creationForms';
import { UpdateAuthorForm, UpdateClubForm, UpdateCompetitionForm, UpdateMaterialForm, UpdatePlayerForm, UpdateScheduleForm } from './app/components/adminPanel/forms/updationForms';


const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/search' element={<Search />} />
            <Route path='/news' element={<News />} />
            <Route path='/realtime' element={<Realtime />} />
            <Route path='/admin' element={<Admin />}>
              <Route index element={<Materials />} />
              <Route path='materials' element={<Materials />} />
              <Route path='competitions' element={<Competitions />} />
              <Route path='clubs' element={<Clubs />} />
              <Route path='authors' element={<Authors />} />
              <Route path='players' element={<Players />} />
              <Route path='schedules' element={<Schedules />} />
              <Route path='new-material' element={<NewMaterialForm />} />
              <Route path='new-competition' element={<NewCompetitionForm />} />
              <Route path='new-club' element={<NewClubForm />} />
              <Route path='new-author' element={<NewAuthorForm />} />
              <Route path='new-player' element={<NewPlayerForm />} />
              <Route path='new-schedule' element={<NewScheduleForm />} />
              <Route path='update-material' element={<UpdateMaterialForm />} />
              <Route path='update-competition' element={<UpdateCompetitionForm />} />
              <Route path='update-club' element={<UpdateClubForm />} />
              <Route path='update-author' element={<UpdateAuthorForm />} />
              <Route path='update-player' element={<UpdatePlayerForm />} />
              <Route path='update-schedule' element={<UpdateScheduleForm />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
