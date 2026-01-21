import { CompoundInfo } from "./compound-info";
import { Pagination } from "./pagination";

export interface PaginatedCompounds {
    compounds : CompoundInfo[],
    pagination : Pagination
}
