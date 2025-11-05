import { Header } from './Header';
import { Footer } from './Footer';
import { Rappeller } from '../animations/Rappeller';

export function Layout({ children, showRappeller = true, rappellerImage = '/rappeller.png' }) {
  return (
    <>
      <Header />
      <div className="page-container">
        <div className="wall-section">
          {showRappeller && <Rappeller imageSrc={rappellerImage} />}
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
