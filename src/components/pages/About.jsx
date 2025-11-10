import { Layout } from '../layout/Layout';

export function About() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: 'clamp(1rem, 3vw, 2rem)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '2rem',
          color: '#1a1a1a'
        }}>
          About
        </h1>

        <div style={{
          width: '100%',
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Hello, my name is Ian!
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            I grew up in hot Houston, TX. Though it's not known for its weather, my love of the outdoors began there during summers spent biking between friends' houses and playing pickup soccer. This passion for nature was cemented in the Boy Scouts, where I eventually reached Eagle Scout.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            My love of computer science started in high school, taking AP Comp Sci and using it to run Monte Carlo simulations to avoid math in my AP Stats class. On long car trips to and from camping, I'd write card game simulations to find strategies for beating my fellow scouts at our troop's favorite game, Peasant (a variation of Presidents).
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            I got as far away from Houston as I could for college, attending Brandeis University in Boston, MA. After my freshman year, I biked across the country with Bike and Build, an experience that solidified my drive to tackle big challenges in the outdoors.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            I double-majored in Computer Science and Neuroscience and worked in Dr. Stephen Van Hooser's laboratory for three years. My work focused on computational modeling—using computing to model real-world biological behavior. AI is the opposite: using biological models to improve computational behavior. I wouldn't get into AI until later in life.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            After graduating summa cum laude, I went to work at Google as a software engineer, first on the Chrome team and then on the YouTube team. I later jumped ship to Square, joining the Appointments team. I was a founding engineer on both the Android Appointments App and the Square Go App.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            I try to go above and beyond my role as a software engineer. At Square I planned 3 team offsites, won multiple hackathons, onboarded junior engineers and interns, frequently presented internally, and conducted over 150+ interviews. I strongly believe that engineering and research are collaborative disciplines.
          </p>


          <p style={{ marginBottom: '1.5rem' }}>
            The 2020 California wildfire season was a real turning point. The "Orange Day" in San Francisco was an almost spiritual experience that convinced me I needed to make a values oriented change. I bought a van, converted it into a camper, and started splitting my time between San Francisco and the Sierra Nevada, all while continuing my full-time job.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Eventually, I decided to go back to school to learn more about the intersection of Earth Science and AI. I am now pursuing a research-based master's degree in Computer Science at the University of Colorado Boulder. My primary research, with Dr. Esther Rolf, investigates temporal trends in Artisanal Small-Scale Mining (ASM) operations. I've also collaborated with power engineering researchers and wildfire researchers at the Earth Lab. I do startup consulting as well having worked with Felicity AI and GreenPortfolio.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            During this time, I've gotten really into rock climbing, culminating in ascents of Half Dome and El Capitan. Now, the stoke is high for alpine running, and I'm excited to see where it takes me.
          </p>
        </div>

        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3rem'
        }}>
          <img
            src={`${import.meta.env.BASE_URL}running_draw.png`}
            alt="Running illustration"
            style={{
              maxWidth: '400px',
              width: '100%',
              height: 'auto',
              borderRadius: '8px'
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
