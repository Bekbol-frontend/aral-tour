"use client";

import { useContextContact } from "@/app/provider/ContactProvider";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import FooterSocial from "./FooterSocial/FooterSocial";
import FooterMenu from "./FooterMenu/FooterMenu";

function Footer() {
  const { email, phone, address } = useContextContact();

  return (
    <footer className="bg-secondary-300 text-white py-[35] md:py-[50]">
      <Container>
        <div className="flex justify-between flex-col md:flex-row gap-30 md:gap-10">
          <div className="flex flex-col gap-10">
            <a
              href={`tel:${phone}`}
              className="font-semibold text-description-medium md:text-title-small"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="font-semibold text-description-medium md:text-title-small"
            >
              {email}
            </a>
            <Title variyant="small" className="text-secondary-50">
              {address}
            </Title>
          </div>
          <div className="flex gap-30 md:gap-40 flex-col md:flex-row ">
            <FooterMenu />
            <FooterSocial />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
