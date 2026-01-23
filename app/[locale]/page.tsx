
import ResponsiveDrawer from "./DenseMenu";


export default function Home() {
  return (
    <>
      <header>

        <div style={{ display: 'flex',
                   alignItems: 'center', 
                   flexDirection: 'row',
                   justifyContent: 'space-between' }}>
          <div>
            <ResponsiveDrawer />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            Welcome to the Flexbox Example
          </div>
        </div>
      </header>
      <main>

        <article>
          <header>
            <h1>How LinkedIn Impacts your visibility</h1>

          </header>

          <h2>Traffic & Engagement Signals</h2>
          <ul>
            <li>Clicking from LinkedIn to your site=traffic </li>
            <li>Google may use engagement metrics (debated but likely):</li>
            <li>Click-through rates</li>
            <li>Time on site</li>
            <li>Bounce rates</li>
            <li>Quality traffic signals relevance</li>
          </ul>
          <h2> Brand Mentions (Unlinked)</h2>
          <ul>
            <li>Google increasingly values brand mentions without links</li>
            <li>Citations across authoritative sites (like LinkedIn) matter</li>
            <li>Part of "entity recognition" in modern SEO</li>
          </ul>
        </article>


      </main>
      <footer>
        <nav>
          <div>
            <ul>
              <li><a href="child.html">sample</a></li>
              <li>call support team</li>
              <li>create ticket</li>
              <li>history of tickets</li>
            </ul>

          </div>
          <div>
            <ul>
              <li>about us</li>
              <li>study materials</li>
              <li>documentation</li>
            </ul>
          </div>

        </nav>
      </footer>
    </>
  );
}
