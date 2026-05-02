export const formatDate = (value: string) => {
  const date: Date = new Date(value);

  return new Intl.DateTimeFormat("uz", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
};
