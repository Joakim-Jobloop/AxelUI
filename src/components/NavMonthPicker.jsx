import {Page, MonthPicker } from "@navikt/ds-react";

export const NavMonthPicker = () => {
    return (
        <Page.Block gutters width="lg">
        <MonthPicker.Standalone
          onMonthSelect={console.log}
          dropdownCaption
          fromDate={new Date("1 Jan 1900")}
          toDate={new Date("1 Oct 2024")}
        />
      </Page.Block>
    )
}