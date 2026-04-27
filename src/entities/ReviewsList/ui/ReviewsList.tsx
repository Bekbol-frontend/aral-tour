"use client";

import { IReview } from "@/entities/Review/model/types";
import ReviewCard from "./ReviewCard/ReviewCard";
import { Modal } from "@/shared/ui/Modal";
import { useCallback, useState } from "react";
import { YoutubePlayer } from "@/shared/ui/YoutubePlayer";
import { Section } from "@/shared/ui/Section";
import { Container } from "@/shared/ui/Container";

interface IProps {
  data: IReview[];
}

function ReviewsList({ data }: IProps) {
  const [modal, setModal] = useState(false);
  const [urlYoutube, setUrlYoutube] = useState("");

  const onClose = useCallback(() => {
    setModal(false);
    setUrlYoutube("");
  }, []);

  const onShowModal = useCallback((url: string) => {
    setModal(true);
    setUrlYoutube(url);
  }, []);

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {data.map((el) => (
            <ReviewCard
              key={el.id}
              onShowModal={onShowModal}
              videoUrl={el.video_url}
              userName={el.user_name}
              rating={el.rating}
              city={el.city}
              title={el.tour.title}
              comment={el.comment}
            />
          ))}
        </div>
      </Container>

      <Modal open={modal} onClose={onClose}>
        <YoutubePlayer url={urlYoutube} className="h-[450]" />
      </Modal>
    </Section>
  );
}

export default ReviewsList;
