import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { CollapsibleCode } from '../common/CollapsibleCode';

export function MapProjections() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/map-projections" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Map Projections
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          My Favorite is Van Der Grinten. The Earth's not a Square, it's a Circle! I like Cricles! Today is Gonna be a Good Day!
        </p>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 1rem auto',
          textAlign: 'right'
        }}>
          <a
            href="https://github.com/iankchristie/projections"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              color: '#666',
              textDecoration: 'none',
              borderBottom: '1px solid #666'
            }}
          >
            Github
          </a>
        </div>

        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto 2rem auto',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          <iframe
            src="https://projections.iankchristie.com/"
            title="Map Projections Interactive"
            style={{
              width: '100%',
              height: '80vh',
              border: 'none',
              display: 'block'
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
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#1a1a1a'
          }}>
            Problem
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The psychology of map projections can have profound sociological implications, shaping our perception of the world. Traditional map projections, like the Mercator, have long been criticized for their distortion of land masses, exaggerating the size of regions closer to the poles. This can reinforce a Eurocentric or Northern Hemisphere bias, influencing how we perceive the importance and size of countries and continents.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <a
              href="https://www.youtube.com/watch?v=eLqC3FNNOaI&t=61s"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#1a1a1a',
                textDecoration: 'underline'
              }}
            >
              West Wing
            </a>
            {' '}really said it much better than me.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#1a1a1a'
          }}>
            Project
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            I created a tool that allows one to create a map from a list of projections and rotate the projection so that it can display the map however the user wants. For instance, here is the map centered around New Zealand.
          </p>
        </div>

        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '2rem auto',
        }}>
          <img
            src={`${import.meta.env.BASE_URL}newzeland.png`}
            alt="Map centered around New Zealand"
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
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#1a1a1a'
          }}>
            Code
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The code is very straight forward, it basically uses D3 to do all of the heaving lifting.
          </p>

          <CollapsibleCode code={`d3.json(
  "https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json"
).then(function (json) {
  geojson = json;
  initMenu();
  update();
  attachListeners();
});`} />

          <p style={{ marginBottom: '1.5rem' }}>
            First we download a GeoJSON object. It is essentially just a structured JSON object with a list of path variables. Once we have that, we can attach the interaction listeners and update the screen.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The interactions update the state object
          </p>

          <CollapsibleCode code={`let state = {
  type: projectionTypes[0],
  scale: 120,
  translateX: window.innerWidth / 4,
  translateY: 250,
  centerLon: 0,
  centerLat: 0,
  rotateLambda: 0.1,
  rotatePhi: 0,
  rotateGamma: 0,
};`} />

          <p style={{ marginBottom: '1.5rem' }}>
            Which has all of the data we need to paint the projections.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The left SVG is an orthographic projection, meaning it is just an orthogonal view of the sphere, whereas the right projection can be chosen from d3s selection. For both we run the following code
          </p>

          <CollapsibleCode code={`let geoGenerator = d3.geoPath().projection(projection);

  projection
    .scale(state.scale)
    .translate([state.translateX, state.translateY])
    .center([state.centerLon, state.centerLat])
    .rotate([state.rotateLambda, state.rotatePhi, state.rotateGamma]);

  // Update world map
  let u = svg.select("g.map").selectAll("path").data(geojson.features);

  u.enter().append("path").merge(u).attr("d", geoGenerator);

  // Update projection center
  let projectedCenter = projection([state.centerLon, state.centerLat]);
  svg
    .select(".projection-center")
    .attr("cx", projectedCenter[0])
    .attr("cy", projectedCenter[1]);

  // Update graticule
  svg.select(".graticule path").datum(graticule()).attr("d", geoGenerator);

  // Update circles
  u = svg
    .select(".circles")
    .selectAll("path")
    .data(
      circles.map(function (d) {
        geoCircle.center(d);
        return geoCircle();
      })
    );

  u.enter().append("path").merge(u).attr("d", geoGenerator);`} />

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '1rem',
            marginTop: '2rem',
            color: '#1a1a1a'
          }}>
            Learning
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            I'm continuing this kick of D3 and have learned a decent amount of D3 and got to play with some projections. It doesn't have the Peters Projection and is missing a bunch of different projections. Fun little project that was a lot easier than expected.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            References:
          </p>

          <ul style={{
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.d3indepth.com/geographic/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline'
                }}
              >
                https://www.d3indepth.com/geographic/
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.geographyrealm.com/types-map-projections/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline'
                }}
              >
                https://www.geographyrealm.com/types-map-projections/
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://observablehq.com/@michael-keith/draggable-globe-in-d3"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline'
                }}
              >
                https://observablehq.com/@michael-keith/draggable-globe-in-d3
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://observablehq.com/@d3/tissots-indicatrix"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline'
                }}
              >
                https://observablehq.com/@d3/tissots-indicatrix
              </a>
            </li>
          </ul>
        </div>

        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '2rem auto',
        }}>
          <img
            src={`${import.meta.env.BASE_URL}projections.png`}
            alt="Map Projections Comparison"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>

        <ProjectNavigation currentLink="/map-projections" />
      </div>
    </Layout>
  );
}
