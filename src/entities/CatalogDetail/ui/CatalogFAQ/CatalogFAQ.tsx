import { MainTitle } from "@/shared/ui/MainTitle";
import { ICatalogFaqDetail } from "../../model/types";
import { Section } from "@/shared/ui/Section";
import { Container } from "@/shared/ui/Container";
import { Description } from "@/shared/ui/Description";

interface IProps {
  data: ICatalogFaqDetail[];
}

function CatalogFAQ({ data }: IProps) {
  if (!data.length) {
    return null;
  }

  return (
    <Section className="bg-white">
      <MainTitle title="FAQ" noTranslate />
      <Container>
        <div className="flex flex-col gap-10">
          {data.map((el, i) => (
            <details
              key={el.title}
              className="collapse collapse-plus border-2 border-base-border bg-white"
            >
              <summary className="collapse-title">
                <Description>{el.title || `FAQ - ${i + 1}`}</Description>
              </summary>

              <div className="collapse-content">
                <div className="flex flex-col gap-10">
                  {el.questions.map((el) => (
                    <details
                      key={el.question}
                      className="collapse collapse-plus border-2 border-base-border bg-white"
                    >
                      <summary className="collapse-title">
                        <Description>{el.question}</Description>
                      </summary>

                      <div className="collapse-content">
                        <Description>{el.answer}</Description>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CatalogFAQ;
