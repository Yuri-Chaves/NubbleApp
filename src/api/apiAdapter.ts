import { MetaDataPage, Page } from '@types';

import { MetaDataPageAPI, PageApi } from './apiTypes';

function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
    lastPage: meta.last_page,
  };
}

function toPageModel<ApiType, ModelType>(
  page: PageApi<ApiType>,
  adapterToModel: (api: ApiType) => ModelType
): Page<ModelType> {
  return {
    meta: toMetaDataPage(page.meta),
    data: page.data.map(adapterToModel),
  };
}

export const apiAdapter = {
  toMetaDataPage,
  toPageModel,
};
