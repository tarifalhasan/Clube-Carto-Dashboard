import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ /g, "-") // Replace spaces with dashes
    .replace(/[^\w-]+/g, ""); // Remove any non-word characters except dashes
};
