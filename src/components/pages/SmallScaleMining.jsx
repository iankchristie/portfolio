import { Layout } from '../layout/Layout';

export function SmallScaleMining() {
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
          Small Scale Mining Detection
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Semantic Segmentation Model of Remote Sensing Data
        </p>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            My main research focuses on remote sensing and temporal analysis, specifically investigating trends in Artisanal Small-Scale Mining (ASM) activity across Africa. This work is conducted in collaboration with Dr. Esther Rolf and a group of researchers at Stanford, UC Berkeley, and UCLA.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Previous Work
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            This project builds on the group's earlier work: <a href="https://www.nber.org/system/files/working_papers/w33646/w33646.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>https://www.nber.org/system/files/working_papers/w33646/w33646.pdf</a>
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            In that study, the team developed a model that uses high-resolution satellite imagery to detect the presence of ASM activity. The dataset was hand-annotated by research assistants at UCLA, and the model leverages Dr. Rolf's groundbreaking MOSAIKS framework—an efficient, generalized machine-learning method for rapid prediction from satellite imagery.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Using that approach, the group found that ASM activity is nearly 40× more prevalent than is reported by surveyors and official records. This demonstrated both the scalability of satellite inference and the massive underestimation of informal mining across the continent.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/original.png`}
              alt="Previous Work - ASM Detection"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Current Drawbacks
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            While successful, the original approach has several limitations, primarily due to the reliance on high-resolution imagery:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>High-resolution data is expensive and often paywalled.</li>
            <li style={{ marginBottom: '0.5rem' }}>Many publicly available "high-res" images are mosaics composed of tiles collected months apart, making temporal analysis inaccurate.</li>
            <li style={{ marginBottom: '0.5rem' }}>Historical high-resolution imagery does not exist at the necessary frequency to study long-term trends.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            There are also drawbacks related to the MOSAIKS framework:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>MOSAIKS operates at a fixed tile level rather than a pixel level, making it difficult to estimate the exact spatial footprint or ground area of mines.</li>
            <li style={{ marginBottom: '0.5rem' }}>The learned embeddings are powerful but lack interpretability, meaning there are limited tools for understanding which features drive predictions.</li>
          </ul>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Future Investigations
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            My research aims to address these open questions:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Can we improve interpretability and explainability of ASM detection models?</li>
            <li style={{ marginBottom: '0.5rem' }}>What are the long-term temporal trends in mining across Africa?</li>
            <li style={{ marginBottom: '0.5rem' }}>Can we predict future areas of ASM expansion?</li>
            <li style={{ marginBottom: '0.5rem' }}>Can we estimate how much land is directly affected by mining activity?</li>
            <li style={{ marginBottom: '0.5rem' }}>After mining appears in a region, what are the impacts on environmental variables, economic indicators, or public health?</li>
          </ul>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            My Work
          </h2>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            New Datasets
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            The polygon labels generated in the prior study provide precise ground-truth regions of mining activity. I apply these labels to satellite datasets that are:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>publicly available</li>
            <li style={{ marginBottom: '0.5rem' }}>temporally consistent</li>
            <li style={{ marginBottom: '0.5rem' }}>extend back multiple years</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            The two primary imagery sources I use are Sentinel-2 and AlphaEarth.
          </p>

          <h4 style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Sentinel-2
          </h4>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/sentinel_2_channels.png`}
              alt="Sentinel-2 Satellite Imagery"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Sentinel-2 is a multispectral satellite mission operated by the European Space Agency. It provides global imagery at 10-meter spatial resolution, updated roughly every 5 days. It includes bands sensitive to vegetation, soil disturbance, and water content—making it well-suited for detecting land-use changes such as mining.
          </p>

          <h4 style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            AlphaEarth
          </h4>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/alphaearth.jpg`}
              alt="AlphaEarth Dataset"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            AlphaEarth is a foundation-model-based remote sensing dataset that provides learned embeddings from large-scale satellite imagery. Instead of raw pixels, it includes compressed semantic representations that are highly effective for machine-learning tasks even with limited labeled data. Unlike high-resolution imagery, AlphaEarth is free, global, and historically consistent.
          </p>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            New Models
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            I train two types of models on these datasets to overcome spatial limitations of the original MOSAIKS approach. Both aim to produce pixel-wise predictions rather than tile-level results.
          </p>

          <h4 style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Pixel-Wise XGBoost
          </h4>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/xgboost.webp`}
              alt="Pixel-Wise XGBoost Model"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            I build a pixel-classification pipeline where each pixel is represented by either raw Sentinel-2 bands or AlphaEarth embeddings. XGBoost then predicts the likelihood that each pixel belongs to a mining region. While lightweight and explainable, this model struggles with spatial coherence—mines are large, heterogeneous areas, and single-pixel classification loses essential shape and structure.
          </p>

          <h4 style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            U-Net Semantic Segmentation
          </h4>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/unet.png`}
              alt="U-Net Semantic Segmentation Model"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            To better model spatial context, I train a U-Net semantic segmentation network that outputs full binary masks of mining footprints. U-Net is designed for dense pixel-level prediction and learns spatial texture, color changes, soil disturbance, and geometric patterns characteristic of ASM sites.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Results
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The results show a significant performance gap between the two approaches:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>The XGBoost pixel-wise model detects some mining signals but produces noisy, fragmented predictions due to the spatial complexity of mine morphology.</li>
            <li style={{ marginBottom: '0.5rem' }}>The U-Net model produces coherent mine footprints and accurately captures the geometry and extent of activity.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            Overall, U-Net substantially outperforms the pixel-wise model for both detection and land-area estimation.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/comparisons.png`}
              alt="Model Comparison Results"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Google Earth Engine Tooling
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            To make the model interactive and globally accessible, I built a Google Earth Engine application that:
          </p>

          <ol style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Allows a user to select any coordinate on Earth</li>
            <li style={{ marginBottom: '0.5rem' }}>Tiles the selected region</li>
            <li style={{ marginBottom: '0.5rem' }}>Downloads the corresponding Sentinel-2 or AlphaEarth imagery</li>
            <li style={{ marginBottom: '0.5rem' }}>Runs inference locally using the trained model</li>
            <li style={{ marginBottom: '0.5rem' }}>Reconstructs the full spatial prediction</li>
            <li style={{ marginBottom: '0.5rem' }}>Overlays the detected mining mask directly on the map</li>
          </ol>

          <p style={{ marginBottom: '1.5rem' }}>
            This makes the model usable not just on sampled data—but anywhere in the world. It has been especially helpful for rapid, qualitative exploration of new regions and validation of temporal change.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/gee.png`}
              alt="Google Earth Engine Application Interface"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Temporal Trends
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Now that the spatial model works, I use historic imagery (dating back to 2017) to analyze when mining begins in a region and how it grows over time. The temporal pipeline lets us:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>detect the earliest appearance of a mine</li>
            <li style={{ marginBottom: '0.5rem' }}>track expansion year-by-year</li>
            <li style={{ marginBottom: '0.5rem' }}>estimate total land degradation</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            Below are examples of mines appearing over time:
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/many.png`}
              alt="Temporal Trends of Mining Activity"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Earliest point where the mine becomes detectable:
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/probability.png`}
              alt="Earliest Detection of Mining Activity"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Expansion and land-area footprint estimation:
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/landarea.png`}
              alt="Mining Expansion and Land Area Footprint"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
