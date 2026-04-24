import { getContact } from "@/shared/lib/api/get-contact";
import { Container } from "@/shared/ui/Container";
import { EmptyData } from "@/shared/ui/EmptyData";
import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import ContactData from "./ContactData/ContactData";

async function Contact() {
  const res = await getContact();

  if (!res.data.data) {
    return <EmptyData />;
  }

  return (
    <Section>
      <MainTitle title="Contact" />
      <Container>
        <ContactData data={res.data.data} />
      </Container>
    </Section>
  );
}

export default Contact;
