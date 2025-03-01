import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CarInfoPage from './pages/CarInfoPage/CarInfoPage';

function App() {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CarInfoPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
