export function getYoutubeEmbedUrl(url: string) {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regExp);

  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
}
