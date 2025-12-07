import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function SmallScaleMining() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/projects/small-scale-mining" position="top" />

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
          Time-Series Semantic Segmentation Model of Remote Sensing Data
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          My main research focuses on remote sensing and temporal analysis, specifically investigating trends in Artisanal Small-Scale Mining (ASM) activity across Africa. This work is advised by Dr. Esther Rolf and in collaboration with a group of researchers at UC Berkeley and UCLA. This is ongoing research, so I can't share detailed results.
        </p>

        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '2rem auto',
        }}>
          <img
            src={`${import.meta.env.BASE_URL}asm/mine_movie.gif`}
            alt="Small Scale Mining Detection Animation"
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
            Foundational Work
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            This project builds on the group's earlier work: <a href="https://www.nber.org/system/files/working_papers/w33646/w33646.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'underline', wordBreak: 'break-all' }}>https://www.nber.org/system/files/working_papers/w33646/w33646.pdf</a>
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            In that study, the team developed a model that uses high-resolution satellite imagery to detect the presence of ASM activity. The dataset was hand-annotated by research assistants at UCLA, and the model leverages Dr. Rolf's MOSAIKS framework—an efficient, generalized machine-learning method for rapid prediction from satellite imagery.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Using that approach, the group found that ASM activity is nearly 40× more prevalent than is reported by surveyors and official records. This demonstrated both the scalability of satellite inference and the massive underestimation of informal mining across the continent.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '600px',
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
            <li style={{ marginBottom: '0.5rem' }}>Can we improve interpretability and explainability of ASM detection?</li>
            <li style={{ marginBottom: '0.5rem' }}>Can we lower the prediction resolution from Tile to pixel?</li>
            <li style={{ marginBottom: '0.5rem' }}>What is the trade-off between spatial and spectral resolution?</li>
            <li style={{ marginBottom: '0.5rem' }}>When did known mines appear?</li>
            <li style={{ marginBottom: '0.5rem' }}>Can we find unknown mines?</li>
            <li style={{ marginBottom: '0.5rem' }}>After mining appears in a region, what are the impacts on humanitarian metrics in the surrounding areas?</li>
            <li style={{ marginBottom: '0.5rem' }}>What are the temporal trends in mining across Africa?</li>
            <li style={{ marginBottom: '0.5rem' }}>Can we predict future areas of ASM expansion?</li>
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
            maxWidth: '600px',
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
            maxWidth: '600px',
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
            Pixel Segmentation with XGBoost
          </h4>

          {/* <pca image> */}
          {/* <xgboost image> */}
          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/xgboost.webp`}
              alt="Pixel Segmentation with XGBoost Model"
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
            Semantic Segmentation with U-Net
          </h4>

          {/* <UNET Image> */}
          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/unet.png`}
              alt="Semantic Segmentation with U-Net Model"
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

          <h4 style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Binary Classification
          </h4>

          <p style={{ marginBottom: '1.5rem' }}>
            In order to compare pixel-level predictions with tile-level predictions, we trained a small binary classifier that takes an input probability map and outputs the probability that a mine is within the area.
          </p>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Computing
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Compute was performed utilizing the CU Research Computer (CURC). We performed a hyper parameter search and trained 24 u-net models. Each training took between 2-6 hours on Nvidia a100s. Binary classification for each model took around 30 minutes on a100s.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Model Results
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            I can't share the exact details of these results. However, we found that that the semantic segmentation models outperform MOSAIKS, High Res semantic segmentation, and pixel segmentation. We believe this indicates that spectral information is critical in improving identification accuracy. We also understand that spatial context is important in identification accuracy as well.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Temporal Analysis
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            With a satisfactory performing model, we can start to take advantage of the historic data in the sentintinel archive. Assuming temporal generalizability, we run the model on images for each year we have data.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/time_series_visualization.png`}
              alt="Timeseries Probability Map"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Mining Growth
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            We see that start of mining is able to be detected in this region.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            We can then count the number of pixels above the 50% threshold to get ground area estimations. For instance, in this square kilometer, we estimate 200,000m² are being used for mining operations.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/growth_num.png`}
              alt="Ground Area Estimations"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            We can also use the timeseries to get areas of new growth by substracting consecutive yearly predictions. In the following image we see areas of orange and red as new mine growth.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/growth.png`}
              alt="Historic Mining Growth Comparison"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>


          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Mining Probability
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Ultimately, we want to be able to collapse the complex 2d spatial timeseries into a single index on the existence of mining in a location. We can do this by utilizing the binary classifier built to compare with MOSAIKs performance.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            We run the classifier over the semantic segmentation inferences for each year and obtain timeseries probability maps like this.
          </p>


          <p style={{ marginBottom: '1.5rem' }}>
            We can do this for all of the locations in our dataset. And receive probability timeseries for every location. We see a good amount of noise in the data. We believe that this is largely because of clouds and other remote sensing aliases. The immediate next bit of future research is to reducing noise in these plots.
          </p>

          {/* <Time Series plots> */}

          <p style={{ marginBottom: '1.5rem' }}>
            We can create a simple feature detector to determine when a tile goes from mining to no mining. Then we can run this feature detector over all areas in our sample.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/sampling.png`}
              alt="Mine Detection Results"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            We believe that there are around 800 mines that started since gathering sentinel data, which is 2017. We also believe that 13% of areas that we annotated as not having mining in 2021 have started mining in the region. This is a pretty striking result that we can sample cross validate with Google Earth Engine.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '1rem auto 2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}asm/ccdc.png`}
              alt="Continuous Change Detection Classification"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Lastly, when we detect a mine, but can't detect a change since 2017, we can utilize other remote sensing techniques like Continuous Change Detection Classification on LandSat. Here each pixel is corresponds to the same area on earths surface overtime. We can calculate the NDVI, a metric of vegetation health, for this pixel over time. Then we fit a harmonic regression over the points until the error becomes to high. Then we create a "break" and fit another harmonic regression. This is a good indicator of deforestation events. We believe that these deforestation events likely coincide with mine development. Then we can cross validate results with Google Earth.
          </p>

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
            maxWidth: '600px',
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
            Future Ideas
          </h2>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Create lightweight binary classifier with sentinel data for tile image predictions. We can take advantag of sentinel pretrained models like MoCo or Dino. We believe the extra spectra will help to improve prediction accuracy over MOSAIKs. If that is the case, then we can deploy a two teir system for mine analysis. First, run cheaper predictions over large swaths of land to get tile level predictions. Then run semantic segmentation analysis to get ground area estimations and location information.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Smooth out noise in timeseries probability curves. This most likely comes from clouds and other satellite aliases. Dropping the temporal resolution from seasonal to yearly should allow us to get cleaner imagery and a cleaner time series.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Explore areas where the model fails. Before running this on country wide levels, we want to get a better sense of how the model fails. What classes it might be getting confused with.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Run over large swaths of land. I'm particularly interested in DRC statistics. Cobalt mining is exploding in that country.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Correlate ground area estimations with mineral pricing and mappings.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Correlate humanitarian metrics with ground area estimations.
            </li>
          </ul>

        </div>

        <ProjectNavigation currentLink="/projects/small-scale-mining" />
      </div>
    </Layout>
  );
}
