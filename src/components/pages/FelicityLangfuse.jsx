import { Layout } from '../layout/Layout';

export function FelicityLangfuse() {
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
          Felicity: Langfuse Monitoring
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          LLM Experimentation, Deployment, Regression Tracking, Dataset Development
        </p>

        <div style={{
          width: '100%',
          maxWidth: '50%',
          margin: '2rem auto',
        }}>
          <object
            data={`${import.meta.env.BASE_URL}prompt_workflow_animated2.svg`}
            type="image/svg+xml"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}prompt_workflow_animated2.svg`}
              alt="Langfuse Prompt Workflow Animation"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </object>
        </div>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Felicity AI builds browser automations. We do this by recording a user's actions during a flow, transforming the state of the webpage, and then using AI to convert those actions into a proprietary DSL. The model receives both the action and a transformed representation of the DOM, and outputs a precise DSL instruction that can be replayed deterministically.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            In a previous blog, I wrote about the challenges of structured output from LLMs. A related issue is the nondeterministic nature of large language models: the same input does not always yield identical, reliable output. For automation, where a single incorrect instruction breaks a workflow, we need repeatability, regression tracking, and controlled iteration.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            To achieve this, we rely heavily on Langfuse.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '300px',
            margin: '2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}langfuse_logo.svg`}
              alt="Langfuse Logo"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Langfuse is an LLM observability and evaluation platform that helps teams version prompts, run experiments, monitor production model behavior, and build datasets from real user interactions. It acts like a "Git for prompts" combined with A/B testing and telemetry for LLM applications.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            We primarily use Langfuse's prompt versioning, experimentation dashboard, monitoring, and dataset generation tools.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            We begin by writing an interpolatable prompt — the template that defines how the model should turn webpage state and actions into DSL steps. Then we generate a synthetic dataset: a large collection of realistic, toy browser interactions. Multiple LLMs and configurations are evaluated against the prompt to understand performance, failure modes, and edge cases. Because prompts are versioned, we can safely iterate, compare changes, and revert just like code.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Once a prompt and model configuration perform well in offline tests, we release it into production (often with a gradual rollout). Monitoring then takes over: Langfuse captures inputs, outputs, scores, and traces for each model call over the last several days. If a user encounters unexpected behavior, we can trace it back to the exact input and output. That example is then added to our dataset, allowing us to retrain or prompt-tune using real production failures instead of relying only on synthetic data.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            As the dataset evolves, the prompt evolves with it. We iterate, experiment in Langfuse, and once we're satisfied with the improvement, we deploy a new prompt version—again with rollback safety.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            This gives us a feedback loop:
            <br />
            real usage → monitoring → new test data → prompt refinement → redeployment → safer automations.
          </p>
        </div>
      </div>
    </Layout>
  );
}
