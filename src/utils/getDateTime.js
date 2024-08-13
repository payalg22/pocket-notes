export default function getDate(date = new Date()) {
  const day = date.getDate().toString();
  const allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = allMonths[date.getMonth()];
  const year = date.getFullYear().toString();
  const time = date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    })
    .toString()
    .padStart(8, "0");
  const fDate = `${day} ${month} ${year}`;

  return { fDate, time };
}
