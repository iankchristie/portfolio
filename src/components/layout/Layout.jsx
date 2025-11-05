import { Header } from './Header';
import { Footer } from './Footer';
import { Rappeller } from '../animations/Rappeller';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="page-container">
        <div className="wall-section">
          <Rappeller />
        </div>
        <div className="content-wrapper">
          <main className="main-content">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
