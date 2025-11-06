import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImagePath(imagePath: string): string {
  // If it's already a full path starting with /, prepend /liteflix
  if (imagePath.startsWith('/')) {
    return `/liteflix${imagePath}`;
  }
  // If it's just a filename, construct the full path
  return `/liteflix/images/${imagePath}`;
}
