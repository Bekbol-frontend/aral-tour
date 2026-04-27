import { Banner } from "@/entities/Banner";
import { Contact } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { getServerClient } from "@/shared/api";
import { IBanner } from "@/shared/types/banner";
import { IData } from "@/shared/types/data";

const getContactBanner = async () => {
  const API = await getServerClient();

  return await API.get<IData<IBanner>>("api/contact/banner");
};

async function ContactPage() {
  const bannerRes = await getContactBanner();

  return (
    <>
      <Banner data={bannerRes.data.data} />
      <Contact />
      <FAQ />
    </>
  );
}

export default ContactPage;
