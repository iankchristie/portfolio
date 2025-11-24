import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { CollapsibleCode } from '../common/CollapsibleCode';

export function LifeOS() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/projects/lifeos" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          LifeOS
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          A Personal Operating System for Life Management
        </p>

        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '2rem auto',
        }}>
          <img
            src={`${import.meta.env.BASE_URL}lifeOS/lifeOS_movie.gif`}
            alt="LifeOS Demo Animation"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Summary
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Every person has their own way of organizing their time. The problem with being a software engineer is that you have the ability to sink hours into building your own perfect time management tool, rather than use someone else's "good enough" solution. That's what LifeOS is, my personal time management tool built the way I think.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The way I think is in dependencies.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Every project you undertake requires tasks, and those tasks have dependencies on each other. You create a Directed Acyclic Graph (DAG) of all of the things you have to do. The system automatically schedules your tasks based on their dependencies, your available time blocks, and recurring commitments. It combines the power of graph theory with advanced scheduling algorithms to turn your goals into daily tasks.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Tech Choices: Why Python Powers the Backend
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            I selected Python for the backend, paired with a React/TypeScript frontend.
          </p>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            The Python Advantage
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Python wasn't chosen for its web framework capabilities alone—Flask handles the REST API adequately, but that's table stakes. The real power lies in Python's ecosystem for AI and optimization:
          </p>

          <ol style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>LLM Integration</strong>: Future features will include AI-assisted project planning. When a user says "I want to move to a new city," an LLM can decompose this into subtasks: research neighborhoods, set budget, find job opportunities, search for apartments, schedule viewings, submit applications, hire movers, and update address. Python's libraries like LangChain, OpenAI SDK, and Transformers make this integration seamless.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Constraint Programming</strong>: Scheduling is fundamentally a constraint satisfaction problem. Python's OR-Tools and python-constraint libraries provide industrial-strength constraint solvers that can handle complex scheduling scenarios—like fitting tasks around recurring commitments, respecting dependencies, and optimizing for various objectives (minimize deadline violations, maximize focus time utilization).
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Convex Optimization</strong>: Future versions will optimize schedules for multiple objectives simultaneously. Libraries like CVXPY allow us to express scheduling as a convex optimization problem, balancing factors like deadline urgency, energy levels throughout the day, and task switching costs.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Graph Algorithms</strong>: NetworkX provides implementations of graph algorithms. When you're dealing with hundreds of interdependent tasks, having efficient topological sorting, cycle detection, and path finding becomes critical.
            </li>
          </ol>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            DAG Creation: Modeling Life as a Graph
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The core insight of LifeOS is that life goals form a directed acyclic graph. Every meaningful project has dependencies.
          </p>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            The Data Model
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Each node in the DAG represents a task:
          </p>

          <CollapsibleCode
            language="typescript"
            code={`interface DAGNode {
  id: string;
  label: string;
  duration?: number;        // hours needed
  status: 'pending' | 'completed';
  dueBy?: Date;            // hard deadline
  doOn?: Date;             // scheduled time
  fixedTime?: boolean;     // immutable schedule
  rrule?: string;          // recurrence pattern
  dependencies: string[];   // child nodes
}`}
          />

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            The Root Node Philosophy
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Every DAG has a single root node labeled "life" that can never be deleted or completed. This philosophical design reflects that life is the ultimate container for all our goals. All top-level goals connect to this root, creating a unified tree of objectives rather than scattered, disconnected tasks.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            DAG Visualization: Making Graphs Intuitive
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The Dagre algorithm arranges nodes hierarchically, with dependencies flowing top-to-bottom:
          </p>

          <CollapsibleCode
            language="javascript"
            code={`const getLayoutedElements = (nodes, edges) => {
  const g = new dagre.graphlib.Graph();
  g.setGraph({
    rankdir: 'TB',      // top to bottom
    nodesep: 100,       // horizontal spacing
    ranksep: 150        // vertical spacing
  });

  // Position nodes hierarchically
  nodes.forEach(node => g.setNode(node.id, { width, height }));
  edges.forEach(edge => g.setEdge(edge.source, edge.target));

  dagre.layout(g);
  // Apply computed positions...
};`}
          />

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Interactive Editing
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Users can:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Drag</strong> nodes to reposition them</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Click</strong> to select and edit properties</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Connect</strong> nodes by dragging from handle to handle</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Delete</strong> with keyboard shortcuts</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Undo/Redo</strong> with 50-state history</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            The system maintains graph validity throughout—you can't create cycles, and deleting a node removes all connected edges.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Recurring Habits: The RRULE Implementation
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Life isn't just about one-time goals; it's also about consistent habits. LifeOS implements full RFC 5545 RRULE support for recurring tasks.
          </p>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            The Timezone Challenge
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            I'm giving this a lot of attention because I just dealt with it, and it was a pain. LLMs did not help here and required some real thought and engineering. The most complex challenge was handling timezone-aware recurring events with exclusions (EXDATE). When you skip a specific instance of a recurring event, the system must generate an EXDATE that:
          </p>

          <ol style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Uses the date from the instance being excluded</li>
            <li style={{ marginBottom: '0.5rem' }}>Uses the time from the parent recurring event</li>
            <li style={{ marginBottom: '0.5rem' }}>Respects timezone boundaries and DST transitions</li>
          </ol>

          <p style={{ marginBottom: '1.5rem' }}>
            The solution required careful backend processing:
          </p>

          <CollapsibleCode
            language="python"
            code={`def generate_exdate(parent_datetime_utc, instance_date_utc, timezone_str):
    tz = pytz.timezone(timezone_str)

    # Convert to local timezone
    parent_local = parent_datetime_utc.astimezone(tz)
    instance_local = instance_date_utc.astimezone(tz)

    # Combine instance date with parent time
    exdate = tz.localize(datetime.combine(
        instance_local.date(),
        parent_local.time()
    ))

    # Format for RRULE (naive local time)
    return exdate.strftime('%Y%m%dT%H%M%S')`}
          />

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Recurring Instance Management
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            The system distinguishes between:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Parent recurring tasks</strong>: The template (e.g., "Morning workout")</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Instance overrides</strong>: Specific occurrences that were edited</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Excluded dates</strong>: Instances that were skipped (stored as EXDATE)</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            This allows users to:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Skip next Monday's workout without affecting the series</li>
            <li style={{ marginBottom: '0.5rem' }}>Reschedule a specific occurrence without breaking the pattern</li>
            <li style={{ marginBottom: '0.5rem' }}>Delete an edited instance to restore the original recurrence</li>
          </ul>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Integration with Scheduling
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Recurring tasks are treated specially by the scheduler:
          </p>

          <ol style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>They're never auto-scheduled (they have fixed times by definition)</li>
            <li style={{ marginBottom: '0.5rem' }}>Their occurrences block time in the availability calendar</li>
            <li style={{ marginBottom: '0.5rem' }}>They're expanded only within the scheduling window (12 weeks)</li>
            <li style={{ marginBottom: '0.5rem' }}>EXDATE exclusions are respected when blocking time</li>
          </ol>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Time Blocks and Availability
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Users define their weekly schedule with time blocks:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Sleep</strong>: When you're unavailable</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Work</strong>: Day job commitments</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Free</strong>: Available for scheduled tasks</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Meals</strong>: Breakfast, lunch, dinner</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Athletics</strong>: Gym time, sports</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Custom</strong>: User-defined blocks</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            Only "free" blocks are used for scheduling. This ensures the system respects your life's existing structure.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Scheduling: From Graph to Calendar
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The scheduling system is where graph theory meets practical time management. The <code>TaskScheduler</code> class orchestrates this complex dance.
          </p>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            The Algorithm
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            The scheduling algorithm follows these steps:
          </p>

          <ol style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Topological Sort</strong>: Order tasks respecting dependencies
              <div style={{ marginTop: '0.5rem' }}>
                <CollapsibleCode
                  language="python"
                  code={`sorted_nodes = list(nx.topological_sort(G))
sorted_nodes.reverse()  # Process leaves first`}
                />
              </div>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Build Availability Calendar</strong>: Convert time blocks to hourly slots
              <div style={{ marginTop: '0.5rem' }}>
                <CollapsibleCode
                  language="python"
                  code={`def create_availability_slots(time_blocks, start_date):
    slots = []
    for week in range(12):  # 12-week horizon
        for block in time_blocks:
            if block.type == 'free':
                slots.append((start_time, end_time, True))
    return slots`}
                />
              </div>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Block Committed Time</strong>:
              <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Recurring event occurrences</li>
                <li>Fixed-time tasks</li>
                <li>Already completed tasks</li>
              </ul>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Schedule Flexible Tasks</strong>: For each task in dependency order:
              <div style={{ marginTop: '0.5rem' }}>
                <CollapsibleCode
                  language="python"
                  code={`def schedule_task(task, calendar, dependencies):
    min_start = max(dep.end_time for dep in dependencies)

    for slot_start, slot_end in calendar.available_slots:
        if slot_start >= min_start:
            if slot_end - slot_start >= task.duration:
                task.doOn = slot_start
                calendar.block(slot_start, task.duration)
                return`}
                />
              </div>
            </li>
          </ol>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Dependency Resolution
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            The scheduler ensures children complete before parents. If Task A depends on Tasks B and C, A won't be scheduled until after both B and C are complete:
          </p>

          <CollapsibleCode
            language="python"
            code={`def get_min_start_time(node, scheduled_nodes):
    children_end_times = []
    for child_id in get_children(node):
        if child := scheduled_nodes.get(child_id):
            if child.doOn:
                end_time = child.doOn + timedelta(hours=child.duration)
                children_end_times.append(end_time)

    return max(children_end_times) if children_end_times else datetime.now()`}
          />

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Auto-Rescheduling
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            When the DAG changes, the system automatically reschedules affected tasks:
          </p>

          <CollapsibleCode
            language="python"
            code={`@app.route('/api/lifedag', methods=['PUT'])
def update_dag():
    # Save DAG changes
    dag_manager.save(nodes, edges)

    # Auto-reschedule if time blocks exist
    if time_blocks := get_user_time_blocks():
        scheduled = TaskScheduler.schedule_tasks_with_blocks(
            nodes, edges, time_blocks, start_date
        )
        return scheduled

    return nodes  # Return unscheduled if no time blocks`}
          />

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Looking Forward
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The architecture is designed for ambitious future features:
          </p>

          <ol style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>AI Project Planning</strong>: "I want to learn machine learning" → Automatically generate a learning path with prerequisites, resources, and time estimates
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Task Tracking and Reflections</strong>: Track actual time spent versus estimates, capture daily/weekly reflections on progress, and build a personal knowledge base of what worked and what didn't. This data feeds back into the system, improving future time estimates and identifying patterns in productivity, energy levels, and task completion rates
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Multi-Objective Optimization</strong>: Balance deadline urgency, energy levels, context switching costs, and skill development
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Collaborative Planning</strong>: Share sub-graphs with team members, merge schedules, coordinate dependencies
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Integration Ecosystem</strong>: Connect with external calendars, task managers, and time tracking tools
            </li>
          </ol>

          <p style={{ marginBottom: '1.5rem' }}>
            Building LifeOS has been fun—a meta-goal that required its own planning, dependencies, and scheduling. I've already found it helpful for planning things in my life. It's been a lot of fun to want a feature and build it immediately, having everything just the way I like it.
          </p>
        </div>

        <ProjectNavigation currentLink="/projects/lifeos" />
      </div>
    </Layout>
  );
}