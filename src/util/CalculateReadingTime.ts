import readingTime from "reading-time";

export default function CalculateReadingTime(content: string) {
  return Math.ceil(readingTime(content).minutes);
}
