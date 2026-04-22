import { Section } from "@/shared/ui/Section";
import { IAboutDataImages } from "../../model/types";
import { env } from "@/shared/config/env";
import { Heading } from "@/shared/ui/Heading";
import { Description } from "@/shared/ui/Description";
import { Title } from "@/shared/ui/Title";

interface IProps {
  title: string;
  description: string;
  images: IAboutDataImages[];
}

function AboutInfo(props: IProps) {
  const { title, description, images } = props;

  return (
    <Section
      className="my-40 md:my-60 min-h-[70vh] md:min-h-screen relative p-0!"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) 95%), url('${env.baseUrl}${images[0].image_path}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-15 left-[50%] translate-x-[-50%] text-center text-white max-w-[1200] w-full p-20">
        <Heading className="mb-15 md:mb-30">{title}</Heading>
        <Title variyant="medium">{description}</Title>
      </div>
    </Section>
  );
}

export default AboutInfo;
