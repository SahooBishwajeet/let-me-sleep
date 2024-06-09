"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

export function QueryPagination({
  totalPages,
  className,
}: QueryPaginationProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    return `${pathName}?${params.toString()}`;
  };

  const showLeftDots = currentPage > 2;
  const showRightDots = currentPage < totalPages - 1;

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(prevPage)} />
          </PaginationItem>
        ) : null}

        {totalPages > 1 && (
          <PaginationItem className="hidden sm:inline-block">
            <PaginationLink
              isActive={currentPage === 1}
              href={createPageURL(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
        )}

        {showLeftDots && (
          <PaginationItem className="hidden sm:inline-block">
            <span>...</span>
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .filter((pageNumber) => pageNumber > 1 && pageNumber < totalPages)
          .filter((pageNumber) => {
            if (showLeftDots && !showRightDots) {
              return pageNumber >= currentPage - 1;
            }
            if (!showLeftDots && showRightDots) {
              return pageNumber <= currentPage + 1;
            }
            if (showLeftDots && showRightDots) {
              return (
                pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1
              );
            }
            return true;
          })
          .map((pageNumber) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`page-button-${pageNumber}`}
            >
              <PaginationLink
                isActive={currentPage === pageNumber}
                href={createPageURL(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

        {showRightDots && (
          <PaginationItem className="hidden sm:inline-block">
            <span>...</span>
          </PaginationItem>
        )}

        {totalPages > 1 && (
          <PaginationItem className="hidden sm:inline-block">
            <PaginationLink
              isActive={currentPage === totalPages}
              href={createPageURL(totalPages)}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageURL(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
