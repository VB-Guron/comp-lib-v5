// // Hook for Next.js applications
// function useTablePagination() {
//   const url = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();

//   const currentPage = useMemo(() => {
//     const num = parseInt(url.get("page") || "1");
//     return isNaN(num) || num <= 0 ? 1 : num;
//   }, [url]);

//   const searchQuery = useMemo(() => {
//     return url.get("search") || "";
//   }, [url]);

//   const handlePageChange = useCallback((page: number, search: string) => {
//     router.push(`${pathname}?page=${page}&search=${search}`);
//   }, [router, pathname]);

//   return { currentPage, searchQuery, handlePageChange };
// }
