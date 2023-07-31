export interface ISearchNewsInterface {
  componentId: string;
}
export interface ISearchNewsTemplateInterface {
  componentId: string;
  loading: boolean;
  searchText: string;
  searchData: [];
  getSearchText(data: string): void;
  onSearchButtonPress(): void;
}
