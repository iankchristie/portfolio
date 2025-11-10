import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function Ohmward() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Ohmward
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          color: '#666',
          marginBottom: '2rem',
          fontWeight: '600'
        }}>
          By <a href="https://www.linkedin.com/in/iankchristie/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>Ian Christie</a> & <a href="https://www.linkedin.com/in/jasmine-garland-883527199/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>Jasmine Garland</a>
        </p>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          color: '#1a1a1a',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          This paper was accepted and presented at the IEEE PES ISGT EUROPE 2025 conference in Malta.
        </p>

        <ProjectNavigation currentLink="/projects/ohmward" />

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Every year, extreme weather costs the U.S. billions and leaves millions in the dark — literally. With climate events growing more unpredictable, forecasting power outages isn't just about convenience — it's about public safety, resilience, and rapid response.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Enter <strong>Ohmward</strong>, a novel machine learning framework that predicts power outages using nothing more than environmental data. Developed by researchers Ian Christie and Jasmine Garland, Ohmward blends state-of-the-art deep learning techniques with real-time meteorological feeds to forecast electrical failures hours in advance. Our approach is shown in Figure 1 and described throughout this post.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '2rem auto',
          }}>
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*fPQX5qGz0NjPKy0B9iFtAQ.png"
              alt="The Ohmward Framework"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
            <p style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              color: '#666',
              fontStyle: 'italic',
              marginTop: '0.75rem',
              textAlign: 'center'
            }}>
              Figure 1. The Ohmward Framework: Training models on historical date for a more resilient future.
            </p>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Why Power Outage Prediction Matters
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Roughly 80% of major U.S. power outages stem from extreme events like wildfires and windstorms. Traditional prediction models often rely on simulations of grid infrastructure — a luxury many regions don't have. Ohmward flips this script by treating the electrical grid as a black box, relying solely on historical outage records and weather conditions.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            This approach makes Ohmward highly scalable: as long as you have outage timestamps and weather data, the model can be trained — no knowledge of the grid itself required.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            The Models: Transformers vs. Trees
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Ohmward tested three different models:
          </p>

          <ul style={{
            marginBottom: '1.5rem',
            paddingLeft: '2rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>XGBoost</strong>: A powerful gradient-boosted tree model known for its accuracy on tabular data.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>MLP</strong>: A deep multilayer perceptron, trained to recognize patterns in meteorological variables.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Transformer</strong>: A cutting-edge sequence model that captures complex time-based relationships across weather signals.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            Surprisingly, the simplest model, <strong>XGBoost</strong>, outperformed the others — reaching <strong>82% accuracy</strong> and an <strong>F1 score of 0.87</strong>. The Transformer achieved decent performance (69% accuracy, F1 = 0.81), but didn't justify its complexity given the current data constraints.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            How Much History Do You Need?
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            One of the most striking findings was that <strong>just 1 to 3 hours of prior weather data</strong> were enough to predict outages with near-peak performance. In fact, adding more hours degraded performance for the Transformer, which likely started overfitting irrelevant noise.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            This is good news for real-time applications: short lead-times mean less data to process and faster, more actionable insights.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Can a Model Trained in Colorado Work in LA?
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Short answer: not really.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            When models trained in Colorado were tested on Los Angeles County data, <strong>performance collapsed to near-random levels</strong>. This suggests a strong <strong>covariate shift</strong> — that is, different regions have different weather patterns driving outages. A model trained on mountain weather doesn't understand coastal climate.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Going forward, regional retraining or domain adaptation will be essential for national-scale deployment.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            What Drives Outages? Surface Pressure
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Using SHAP values (for XGBoost) and integrated gradients (for the Transformer), Ohmward identified one consistent top predictor: <strong>surface pressure</strong>. Higher recent surface pressure often signals a brewing weather event that could disrupt power lines. Other variables like wind speed and direction, surprisingly, had little influence.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Integrating IEEE Reliability Metrics: A Utility Perspective
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            To make these predictions actionable, utilities can combine Ohmward's forecasts with <strong>IEEE reliability metrics</strong> — standard indicators used by utilities to monitor and benchmark grid performance:
          </p>

          <ul style={{
            marginBottom: '1.5rem',
            paddingLeft: '2rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>SAIDI</strong> <em>(System Average Interruption Duration Index)</em>: Average outage duration per customer per year.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>SAIFI</strong> <em>(System Average Interruption Frequency Index)</em>: Average number of interruptions per customer.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>CAIDI</strong> <em>(Customer Average Interruption Duration Index)</em>: Average time to restore service per interruption.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            By correlating predicted outage risks from Ohmward with these metrics, utilities can <strong>prioritize grid hardening</strong>, <strong>allocate repair crews more efficiently</strong>, and <strong>benchmark improvements over time</strong>. High-risk regions with historically poor reliability (high SAIDI/SAIFI) can be flagged for preemptive maintenance or targeted upgrades, especially ahead of forecasted weather events.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            This fusion of AI forecasting with standardized reliability tracking opens the door to a <strong>data-driven, proactive utility strategy</strong> — shifting from reactive recovery to intelligent prevention.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Try It Live: Ohmward Web App
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The research team deployed a working version of their model as a public-facing tool. The <a href="https://ohmward.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline', fontWeight: '600' }}>Ohmward Web App</a> provides <strong>real-time outage risk predictions</strong> across Colorado using upcoming weather forecasts. It's updated hourly and offers an interactive map for planners, utilities, or curious citizens.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '2rem auto',
          }}>
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*oOi1-1Fa444pkZ-h0jTQnw.jpeg"
              alt="Ohmward Web App Example"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
            <p style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              color: '#666',
              fontStyle: 'italic',
              marginTop: '0.75rem',
              textAlign: 'center'
            }}>
              Figure 2. Example of the Ohmward Web App
            </p>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Limitations and the Road Ahead
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Despite its promise, Ohmward has caveats. It struggles with "borderline" cases — scenarios where outages almost happened. And its performance depends heavily on the quality of weather data and regional context.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Future improvements include:
          </p>

          <ul style={{
            marginBottom: '1.5rem',
            paddingLeft: '2rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Adding more environmental variables (e.g., humidity, satellite data)</li>
            <li style={{ marginBottom: '0.5rem' }}>Smarter sampling of near-outage conditions</li>
            <li style={{ marginBottom: '0.5rem' }}>Making models spatially aware with geolocation features</li>
            <li style={{ marginBottom: '0.5rem' }}>Ensuring equity across socio-economic regions</li>
          </ul>

          <blockquote style={{
            borderLeft: '4px solid #1a1a1a',
            paddingLeft: '1.5rem',
            marginLeft: '0',
            marginRight: '0',
            marginTop: '2rem',
            marginBottom: '2rem',
            fontStyle: 'italic',
            color: '#333'
          }}>
            <p style={{ marginBottom: '0' }}>
              Ohmward isn't just a model — it's a vision for safer, smarter communities. As extreme weather becomes the norm, tools like this will be vital in keeping the lights on.
            </p>
          </blockquote>
        </div>

        <ProjectNavigation currentLink="/projects/ohmward" />
      </div>
    </Layout>
  );
}
