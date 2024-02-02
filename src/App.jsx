import "@navikt/ds-css";
import { Button, Box, Page, MonthPicker } from "@navikt/ds-react";
import { useState } from "react";

import "./App.css";
import { NavAccordion } from "./components/NavAcordion";
import { NavHeader } from "./components/NavHeader";
import { NavFooter } from "./components/NavFooter";
import { NavHeading } from "./components/NavHeading";

function App() {
  return (
    <>
<Page
      footer={
        <Box background="surface-neutral-moderate" padding="8" as="footer">
          <Page.Block gutters width="lg">
            Footer
          </Page.Block>
        </Box>
      }
    >
      <Box background="surface-neutral-moderate" padding="8" as="header">
        <Page.Block gutters width="lg">
          Header
        </Page.Block>
      </Box>
      <Box
        background="surface-alt-1-moderate"
        padding="8"
        paddingBlock="16"
        as="main"
      >
        <Page.Block gutters width="lg">
     content
        </Page.Block>
      </Box>
    </Page>
    </>
  );
}

export default App;
