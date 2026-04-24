import { getYoutubeEmbedUrl } from "@/shared/lib/getYoutubeEmbedUrl";

interface IProps {
  url: string;
  className?: string;
}

function YoutubePlayer({ url, className = "" }: IProps) {
  const embedUrl = getYoutubeEmbedUrl(url);

  return (
    <iframe
      width="100%"
      src={embedUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className={`border-none rounded-6 ${className}`}
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

export default YoutubePlayer;
