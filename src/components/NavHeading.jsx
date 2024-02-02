import { Heading, VStack } from "@navikt/ds-react";

export const NavHeading = () => {
  const lorem = "Hva kan vi hjelpe deg med?";

  return (
    <VStack gap="4">
      <Heading size="medium">{lorem}</Heading>
      <Divider />
      <div>
        <Descriptor>Spacing </Descriptor>
        <Heading size="medium" spacing>
          {lorem}
        </Heading>
      </div>
    </VStack>
  );
};

function Descriptor({ children }) {
  return <p className="mb-3 text-xl font-semibold">{children}</p>;
}

function Divider() {
  return <hr className="border-border-subtle" />;
}