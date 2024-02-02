import { Box, Page } from "@navikt/ds-react";

export const NavFooter = () => {
    return (
        <Box background="surface-neutral-moderate" padding="8" as="footer">
        <Page.Block gutters width="lg">
          Footer
        </Page.Block>
      </Box>
    )
}