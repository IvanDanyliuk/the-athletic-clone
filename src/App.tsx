import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Layout from './app/components/layout/Layout';
import { 
  Admin, Checkout, Home, Login, News, 
  NotFound, Realtime, Register, Search 
} from './app/pages';
import {
   Clubs, Competitions, Materials, 
   Players, Schedules, Users 
} from './app/components/adminPanel/sections';
import { 
  ArticleForm, AuthorForm, ClubForm, CompetitionForm, ContentForm,
  NoteForm, PlayerForm, ScheduleForm, RealtimePostForm 
} from './app/components/adminPanel/forms/creationForms';
import { 
  UpdateClubForm, UpdateCompetitionForm, UpdateMaterialForm, 
  UpdatePlayerForm, UpdateScheduleForm, UpdateUserForm 
} from './app/components/adminPanel/forms/updationForms';
import Content from './app/components/adminPanel/sections/Content';
import ContentSection from './app/components/adminPanel/forms/creationForms/ContentForm';


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
                <Route path='materials/new-article' element={<ArticleForm />} />
                <Route path='materials/new-note' element={<NoteForm />} />
                <Route path='materials/new-realtime-post' element={<RealtimePostForm />} />
                <Route path='materials/edit/:id' element={<UpdateMaterialForm />} />
                <Route path='competitions' element={<Competitions />} />
                <Route path='competitions/new-competition' element={<CompetitionForm />} />
                <Route path='competitions/edit/:id' element={<UpdateCompetitionForm />} />
                <Route path='clubs' element={<Clubs />} />
                <Route path='clubs/new-club' element={<ClubForm />} />
                <Route path='clubs/edit/:id' element={<UpdateClubForm />} />
                <Route path='users' element={<Users />} />
                <Route path='users/new-author' element={<AuthorForm />} />
                <Route path='users/edit/:id' element={<UpdateUserForm />} />
                <Route path='players' element={<Players />} />
                <Route path='players/new-player' element={<PlayerForm />} />
                <Route path='players/edit/:id' element={<UpdatePlayerForm />} />
                <Route path='schedules' element={<Schedules />} />
                <Route path='schedules/new-schedule' element={<ScheduleForm />} />
                <Route path='schedules/edit/:id' element={<UpdateScheduleForm />} />
                <Route path='content' element={<Content />} />
                <Route path='content/new-content-section' element={<ContentForm />} />
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
