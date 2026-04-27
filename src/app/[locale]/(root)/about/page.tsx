import { About } from "@/entities/About";
import { Banner } from "@/entities/Banner";
import { Contact } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { getServerClient } from "@/shared/api";
import { IBanner } from "@/shared/types/banner";
import { IData } from "@/shared/types/data";

const getBannerAbout = async () => {
  const API = await getServerClient();

  return await API.get<IData<IBanner>>("api/about/banner");
};

async function AboutPage() {
  const bannerRes = await getBannerAbout();

  return (
    <>
      <Banner data={bannerRes.data.data} />
      <About page />
      <FAQ />
      <Contact />
    </>
  );
}

export default AboutPage;
