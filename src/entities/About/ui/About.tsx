import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import { getAbout } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import Award from "./Award/Award";
import { Container } from "@/shared/ui/Container";
import AboutInfo from "./AboutInfo/AboutInfo";

async function About() {
  const res = await getAbout();

  if (!res.data.data) {
    return <EmptyData />;
  }

  const { title, description, images } = res.data.data;

  return (
    <Section>
      <MainTitle title="About" />
      <Container>
        <Award data={res.data.data.award} />
      </Container>
      <AboutInfo title={title} description={description} images={images} />
    </Section>
  );
}

export default About;
