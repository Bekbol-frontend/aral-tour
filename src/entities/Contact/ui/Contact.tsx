import { Container } from "@/shared/ui/Container";
import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import ContactData from "./ContactData/ContactData";
import ContactMapDynamic from "./ContactMap/ContactMap.dynamic";

async function Contact() {
  return (
    <Section>
      <MainTitle title="Contact" />
      <Container>
        <ContactData />
        <ContactMapDynamic />
      </Container>
    </Section>
  );
}

export default Contact;
