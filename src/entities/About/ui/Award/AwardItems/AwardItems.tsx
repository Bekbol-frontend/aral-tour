"use client";

import { IAboutDataImages } from "@/entities/About/model/types";
import AwardImage from "../AwardImage/AwardImage";
import { useCallback, useState } from "react";
import { env } from "@/shared/config/env";
import AwardModal from "../AwardModal/AwardModal";

interface IProps {
  data: IAboutDataImages[];
}

function AwardItems({ data }: IProps) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const openModal = useCallback((url: string) => {
    setImgUrl(`${env.baseUrl}${url}`);
  }, []);

  const onCloseModal = useCallback(() => {
    setImgUrl(null);
  }, []);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-0">
        {data.map((item) => (
          <AwardImage
            key={item.id}
            imgUrl={item.image_path}
            openModal={openModal}
          />
        ))}
      </div>

      <AwardModal
        open={!!imgUrl}
        onClose={onCloseModal}
        imgUrl={imgUrl || ""}
      />
    </>
  );
}

export default AwardItems;
