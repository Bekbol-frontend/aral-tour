import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import { PhoneBtn } from "@/shared/ui/PhoneBtn";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { HeaderDraweMenu } from "@/widgets/HeaderDraweMenu";
import { HeaderMenu } from "@/widgets/HeaderMenu";

function Header() {
  return (
    <header className="h-[90] md:h-[120px] bg-white border-b-[1] border-base-border flex items-center sticky top-0 left-0 right-0 z-header">
      <Container className="flex-1">
        <div className="flex items-center gap-20 justify-between">
          <Logo />

          <div className="flex items-center gap-40">
            <div className="hidden md:block">
              <HeaderMenu />
            </div>

            <div className="flex items-center gap-10 md:gap-15">
              <div className="hidden md:block">
                <SwitchLang />
              </div>

              <PhoneBtn />

              <div className="block md:hidden">
                <HeaderDraweMenu />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
