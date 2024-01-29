export const debounce = <T extends (...args: any[]) => void>(
   func: T,
   delay: number = 500
): ((...args: Parameters<T>) => void) => {
   let timeoutId: NodeJS.Timeout;
   return function (...args) {
      if (timeoutId) {
         clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
         func(...args);
      }, delay);
   };
};
