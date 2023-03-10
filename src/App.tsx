import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Layout from './app/components/layout/Layout';
import { Admin, Checkout, Home, Login, News, NotFound, Realtime, Register, Search } from './app/pages';
import { Authors, Clubs, Competitions, Materials, Players, Schedules } from './app/components/adminPanel/sections';
import { ArticleForm, AuthorForm, ClubForm, CompetitionForm, NoteForm, PlayerForm, ScheduleForm, RealtimePostForm } from './app/components/adminPanel/forms/creationForms';
import { UpdateAuthorForm, UpdateClubForm, UpdateCompetitionForm, UpdateMaterialForm, UpdatePlayerForm, UpdateScheduleForm } from './app/components/adminPanel/forms/updationForms';


const App: React.FC = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                <Route path='new-article' element={<ArticleForm />} />
                <Route path='new-note' element={<NoteForm />} />
                <Route path='new-realtime-post' element={<RealtimePostForm />} />
                <Route path='new-competition' element={<CompetitionForm />} />
                <Route path='new-club' element={<ClubForm />} />
                <Route path='new-author' element={<AuthorForm />} />
                <Route path='new-player' element={<PlayerForm />} />
                <Route path='new-schedule' element={<ScheduleForm />} />
                <Route path='update-material/:id' element={<UpdateMaterialForm />} />
                <Route path='update-competition/:id' element={<UpdateCompetitionForm />} />
                <Route path='update-club/:id' element={<UpdateClubForm />} />
                <Route path='update-author/:id' element={<UpdateAuthorForm />} />
                <Route path='update-player/:id' element={<UpdatePlayerForm />} />
                <Route path='update-schedule/:id' element={<UpdateScheduleForm />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </LocalizationProvider>
    </div>
  );
};

export default App;
