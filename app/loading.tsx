import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className=" mt-24 rounded-md grid gap-10 grid-cols-4">
      {Array.from({ length: 12 }, (_, i) => i + 1).map(id => (
        <div
          className=" p-9 space-y-5 bg-white col-span-4 md:col-span-2"
          key={id}
        >
          <Skeleton className=" h-6 w-1/2 bg-gray-200"></Skeleton>
          <Skeleton className=" h-6 w-1/3 bg-gray-200"></Skeleton>
          <Skeleton className=" h-80 lg:h-96 w-full bg-gray-400"></Skeleton>
        </div>
      ))}
    </div>
  );
}
