import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Layout from './app/components/layout/Layout';
import { 
  Admin, Checkout, Club, Competition, Home, Login, Material, News, NotFound, 
  Posts, Realtime, RecentMaterials, Register, Search 
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
  UpdateClubForm, UpdateCompetitionForm, UpdateContentSection, UpdateMaterialForm, 
  UpdatePlayerForm, UpdateScheduleForm, UpdateUserForm 
} from './app/components/adminPanel/forms/updationForms';
import { Content } from './app/components/adminPanel/sections/';
import { Post, PostList } from './app/components/materials/';
import { CompetitionHome, CompetitionScores, CompetitionStandings, CompetitionTeams } from './app/components/competitions/';
import ClubHome from './app/components/clubs/ClubHome';
import { ClubRoster, ClubSchedule } from './app/components/clubs';


const App: React.FC = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/materials' element={<RecentMaterials />} />
              <Route path='/materials/:id' element={<Material />} />
              <Route path='/posts' element={<Posts />}>
                <Route path=':id' element={<Post />} />
                <Route path='search' element={<PostList />} />
              </Route>
              <Route path='/competitions/:id' element={<Competition />}>
                <Route index element={<CompetitionHome />} />
                <Route path='home' element={<CompetitionHome />} />
                <Route path='scores-and-schedules' element={<CompetitionScores />} />
                <Route path='standings' element={<CompetitionStandings />} />
                <Route path='teams' element={<CompetitionTeams />} />
              </Route>
              <Route path='/clubs/:id' element={<Club />}>
                <Route index element={<ClubHome />} />
                <Route path='home' element={<ClubHome />} />
                <Route path='scores-and-schedules' element={<ClubSchedule />} />
                <Route path='roster' element={<ClubRoster />} />
              </Route>
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
                <Route path='content/edit/:id' element={<UpdateContentSection />} />
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
