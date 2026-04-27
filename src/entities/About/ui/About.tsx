import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import { getAbout } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import Award from "./Award/Award";
import { Container } from "@/shared/ui/Container";
import AboutInfo from "./AboutInfo/AboutInfo";
import AboutSwiper from "./AboutSwiper/AboutSwiper";

interface IProps {
  page?: boolean;
}

async function About({ page = false }: IProps) {
  const res = await getAbout();

  if (!res.data.data) {
    return <EmptyData />;
  }

  const { title, description, images } = res.data.data;

  return (
    <Section>
      {page ? null : <MainTitle title="About" />}
      <Container>
        <Award data={res.data.data.award} />
      </Container>
      <AboutInfo title={title} description={description} images={images} />
      <Container>
        <AboutSwiper data={images} />
      </Container>
    </Section>
  );
}

export default About;
