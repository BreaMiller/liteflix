import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImagePath(imagePath: string): string {
  // Simply prepend liteflix to paths that start with /
  if (imagePath.startsWith('/')) {
    return `/liteflix${imagePath}`;
  }
  return imagePath;
}
