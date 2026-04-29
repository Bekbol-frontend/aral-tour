"use client";

import { PUBLIC_API } from "@/shared/api";
import { clsx } from "@/shared/lib/clsx";
import { IData } from "@/shared/types/data";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

interface ITour {
  id: number;
  title: string;
}

interface IProps {
  tourId: string;
  onChangeTourId: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  tourIdValidate: boolean;
}

function TourSelect(props: IProps) {
  const { tourId, onChangeTourId, tourIdValidate } = props;
  const locale = useLocale();

  const [tours, setTours] = useState<ITour[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchEnabled, setFetchEnabled] = useState(false);

  useEffect(() => {
    if (fetchEnabled) {
      const getTours = async () => {
        try {
          setLoading(true);

          const res = await PUBLIC_API.get<IData<ITour[]>>("api/tours", {
            headers: {
              "Accept-Language": locale,
            },
          });

          if (!res.data.success) {
            throw new Error("Error");
          }

          setTours(res.data.data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      getTours();
    }
  }, [fetchEnabled, locale]);

  return (
    <div>
      <select
        className={clsx(["select w-full"], {
          "select-error": tourIdValidate || error,
        })}
        value={tourId}
        onChange={onChangeTourId}
        onClick={() => {
          setFetchEnabled(true);
        }}
      >
        <option disabled value="">
          Select tour
        </option>
        {loading && <option disabled>Loading...</option>}
        {tours.map((el) => (
          <option key={el.id} value={`${el.id}`}>
            {el.title}
          </option>
        ))}
      </select>
      {tourIdValidate && (
        <div className="label">
          <span className="label-text-alt text-error">
            Invalid email address
          </span>
        </div>
      )}
    </div>
  );
}

export default TourSelect;
