import { PaginatedDataT } from "src/constants";

export const getFilterPayload = (search: string, searchableFields: string[], pagination: { page: number, limit?: number }) => {
    const filters = {};
    const paginationData = {
        limit: (pagination?.limit || null), skip: (((pagination?.page || 1) - 1) * (pagination?.limit || 0))
    }
    if (search) {
        filters['$or'] = searchableFields.map((field: string) => ({ [field]: { $regex: `^${search}.*` } }));
    }

    return { filters, pagination: paginationData };
}

export const getPaginatedData = (data: any[], pagination: { limit: number, skip: number }): PaginatedDataT => {
    const result = {
        data: [],
        total_records: data.length,
        total_pages: Math.ceil(data.length / pagination.limit)
    }
    result.data = data.slice(pagination.skip, pagination.skip + pagination.limit)
    return result;
}