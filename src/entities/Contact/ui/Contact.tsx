import { Container } from "@/shared/ui/Container";
import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import ContactData from "./ContactData/ContactData";

async function Contact() {
  return (
    <Section>
      <MainTitle title="Contact" />
      <Container>
        <ContactData />
      </Container>
    </Section>
  );
}

export default Contact;
