import CalenderIcon from "@/icons/CalendarIcon";
import ClockIcon from "@/icons/ClockIcon";
import { getData } from "@/service/sanity";

export default async function MainPage() {
  const data = await getData();

  return (
    <div className="divide-y devide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Today I Learned
        </h1>
      </div>
      <ul>
        {data.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <div className="flex items-center space-x-1 text-xs leading-6 text-teal-500 font-msedium">
                  <ClockIcon width={14} height={14} />
                  <span>{post.readingTime}분</span>
                </div>
                <div className="flex items-center space-x-1 text-xs leading-6 text-teal-500 font-msedium">
                  <CalenderIcon width={14} height={14} />
                  <span>{post._createdAt}</span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
