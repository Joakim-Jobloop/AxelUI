import { Box, Page, Search } from "@navikt/ds-react";

export const NavHeader = () => {
    return (
        <Box background="surface-neutral-moderate" padding="8" as="header">
        <Page.Block gutters width="lg">
          Header
          <form>
      <Search
        label="Hva er artikkelnummeret til denne varen?"
        description="Art.nr. finner du på varens produktside eller i katalogen."
        hideLabel={false}
        htmlSize="12"
      />
    </form>
        </Page.Block>
      </Box>

    )
}