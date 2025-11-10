import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function BrowserAutomations() {
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
          Browser Automations
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          LLM Structured Outputs into an Abstract Syntax Tree DSL
        </p>

        <ProjectNavigation currentLink="/projects/browser-automations" />

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            For the Summer of 2025, I worked with my good friends Paul Chang and Saahil Madge on their startup, Felicity AI, as their Chief Artificial Intelligence Officer Intern. The company builds reliable browser automations and focuses primarily on users in the healthcare space.
          </p>

                  <div style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto 3rem auto',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <video
            src="https://npybnxj8c9qa6ynk.public.blob.vercel-storage.com/%5B2025-10-15%5D%20Design%20intelligent%20workflow.mp4"
            loop
            preload="auto"
            poster="https://framerusercontent.com/images/C8xqQKkvJV2GiZ3pdwMy9MlzGt0.png?width=1920&height=1080"
            playsInline
            autoPlay
            muted
            style={{
              cursor: 'auto',
              width: '100%',
              height: '100%',
              borderRadius: '0px',
              display: 'block',
              objectFit: 'cover',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              objectPosition: '50% 50%'
            }}
          />
        </div>

          <p style={{ marginBottom: '1.5rem' }}>
            They have a Chrome extension that records your screen while you walk through a workflow you'd like to automate. The app takes the user's actions and website context and uses AI to convert each event into a proprietary DSL step. This DSL can then be replayed in multiple automation environments—either locally or in the cloud. Most automations can run without any AI intervention. However, websites change, selectors break, and brittle scripts fail. To solve that, we inject AI only when needed to self-heal broken steps. We also support AI-driven automation actions when the workflow calls for it.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            I was in charge of building out the AI features and infrastructure for the startup. I'm not going to give away the secret sauce, but I wanted to share a bit about the power (and pain) of LLM Structured Outputs.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            LLM Structured Outputs — hard, but powerful
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Turning free-form model responses into rigid, typed structures sounds simple in theory: you give the model a schema, it fills it in, and everything works. In practice, structured outputs are one of the hardest parts of building reliable LLM-powered automations. The major providers (OpenAI, Google, Anthropic) claim to support unified structured-output APIs. In reality… it's a mess. For example, take a look at this GitHub issue: <a href="https://github.com/googleapis/python-genai/issues/460" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>https://github.com/googleapis/python-genai/issues/460</a>.
          </p>

          <div style={{
            width: '100%',
            marginBottom: '2rem',
            marginTop: '2rem'
          }}>
            <img
              src={`${import.meta.env.BASE_URL}so-ticket.png`}
              alt="Structured Output GitHub Issue"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Google expects a differently formatted response schema than OpenAI and Anthropic. Anthropic and OpenAI each implement features the other does not. Even individual models from the same provider sometimes fail to follow the spec consistently. None of this is documented clearly—which means engineers have to test every feature across every provider and model on their own. Because of that, you need guardrails: validators, retries, auto-correction, and fallback logic.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            But when it does work, it's magic. Structured outputs let you take messy, unstructured user actions and turn them into predictable, executable code. Instead of treating the model like a glorified text generator, you treat it like a flexible compiler that turns real-world interaction into something deterministic. It's powerful enough that our automations can adapt dynamically to changing UIs and still produce the same reliable DSL every time. The reliability of that structured pipeline is a huge part of what makes Felicity's approach viable.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Heartfelt note
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            I can't say enough about how much I enjoyed the team culture. Paul, Saahil, and Lucas are some of the smartest, most efficient, driven, and positive people I've ever worked with. If these guys aren't made for success, then I truly don't know who is.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '1.5rem',
          width: '100%',
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: '1 1 300px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <img
              src={`${import.meta.env.BASE_URL}felicity1.jpg`}
              alt="Felicity team 1"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
          <div style={{
            flex: '1 1 300px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <img
              src={`${import.meta.env.BASE_URL}felicity2.jpg`}
              alt="Felicity team 2"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>

        <ProjectNavigation currentLink="/projects/browser-automations" />
      </div>
    </Layout>
  );
}
