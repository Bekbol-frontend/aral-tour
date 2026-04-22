import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import { getAbout } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import Award from "./Award/Award";
import { Container } from "@/shared/ui/Container";

async function About() {
  const res = await getAbout();

  if (!res.data.data) {
    return <EmptyData />;
  }

  return (
    <Section>
      <MainTitle title="About" />
      <Container>
        <Award data={res.data.data.award} />
      </Container>
    </Section>
  );
}

export default About;
