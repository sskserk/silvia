'use client';
import ResponsiveDrawer from "./DenseMenu";
import PopupLangMenu from "./PopupLangMenu";


import { useRef } from "react";

import EditableBoxWithPlaceholder from "./BoxPlace";



export default function Home() {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

 // const [isEmpty, setIsEmpty] = useState(true);
 // const ref = useRef(null);

  // const handleInput = () => {
  //   if (!ref.current) {
  //     return;
  //   }
  //   console.log("Input event:", ref.current.textContent);
  //   setIsEmpty(ref.current.textContent.trim().length === 0);
  // };


  function addComponent() {
    //alert("Send button clicked!");

    // if (textRef.current) {
    //   const element = textRef.current;
    //   element.style.height = "300px";

    //   const spanElement = document.createElement("span")
    //   spanElement.textContent = " - Text added!";
    //   spanElement.style.color = "blue";

    //   element.appendChild(spanElement);
    // }
    if (!parentRef.current) {
      return;
    }

    const contentArea = parentRef.current.childNodes[1] as HTMLTextAreaElement
    contentArea.contentEditable = "true";

    const spanElement = document.createElement("span")
    spanElement.textContent = " - Text added!";
    spanElement.style.color = "blue";

    contentArea.appendChild(spanElement);
  }
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
            Welcome to the Flexbox Example!
          </div>
        </div>
      </header>
      <main>


        <article>
          <header>
            <h1>How LinkedIn Impacts your visibility</h1>

          </header>
          <div>
            <article>
              <EditableBoxWithPlaceholder />
            </article>

          </div>

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
        <article style={{ paddingLeft: "30px" }}>
          <header>Textarea</header>





          <hr />

          {/* 
          <div ref={parentRef}>
            <Box
              component="div"
              ref={ref}
              onInput={handleInput}
              suppressContentEditableWarning
              contentEditable
              sx={{
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 1,
                padding: 1,
                minHeight: 40,
                outline: 'none',
                '&:focus': {
                  borderColor: 'primary.main',
                  boxShadow: `0 0 0 2px`,
                }
              }}
            >
              {isEmpty && (
                <span
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{
                  position: 'relative',
                  zIndex: -1,
                  left: 3,
                  top: 0,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  outline: 'none'
                  }}
                >
                  Type here...
                </span>
              )}
            </Box>
          </div>

          <TextField
            multiline
            defaultValue="Editable content"
            variant="outlined"
            fullWidth
          /> */}


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

          <div>
            <PopupLangMenu />
          </div>

        </nav>
      </footer>
    </>
  );
}
