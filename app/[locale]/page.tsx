
import ResponsiveDrawer from "./DenseMenu";
import PopupLangMenu from "./PopupLangMenu";

import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
  return (
    <>
      <header>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
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
        <article style={{paddingLeft:"30px"}}>
          <header>Textarea</header>

          <TextareaAutosize
            id="textareaId"
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: 200, border: '1px solid #e2882e', borderRadius: '4px', padding: '8px' }}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
          >
   
            </TextareaAutosize>
            <div style={{ position: "relative", width: 400 }}>
  <TextareaAutosize
    minRows={4}
    style={{
      width: "100%",
      paddingRight: 48, // space for the button if desired
    }}
  />
  <Button
    variant="contained"
    size="small"
    style={{
      position: "absolute",
      right: 8,
      bottom: 8
    }}
  >
    Send
  </Button>
</div>
<div style={{ position: "relative", width: 400 }}>
      <TextareaAutosize
        minRows={4}
        style={{
          width: "100%",
          paddingBottom: "60px", // Make room for the button!
          fontSize: 16,
          boxSizing: "border-box",
          resize: "none"
        }}
      />
      <Button
        variant="contained"
        size="small"
        style={{
          position: "absolute",
          right: -8,
          bottom: 8,
          zIndex: 1,
          pointerEvents: "auto" // Clickable over textarea
        }}
      >
        Send
      </Button>
    </div>

<div style={{ display: "flex", alignItems: "flex-end", width: 400 }}>
  <TextareaAutosize
    minRows={2}
    style={{
      flex: 1,
      marginRight: 8
    }}
  />
  <Button variant="contained">Send</Button>
</div>
        </article>



<TextField
  multiline
  minRows={3}
  maxRows={7}
  variant="outlined"
  label="Message"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton>
          <SendIcon />
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
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

          <div>
            <PopupLangMenu />
          </div>

        </nav>
      </footer>
    </>
  );
}
