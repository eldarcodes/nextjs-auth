import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface DateProps {
  absFormat?: string;
  timestamp: number;
}

export const getDate = ({
  absFormat = "ddd, DD MMM YYYY HH:mm",
  timestamp,
}: DateProps) => {
  dayjs.extend(relativeTime);
  const absDate = dayjs.unix(timestamp).format(absFormat);
  const relDate = dayjs(dayjs.unix(timestamp)).fromNow();

  return `${relDate} (${absDate})`;
};
``;
