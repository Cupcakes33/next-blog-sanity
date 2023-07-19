import dayjs from "dayjs";

export default function formattingDayJs(createdAt: string) {
  return dayjs(createdAt).format("YY.MM.DD");
}
