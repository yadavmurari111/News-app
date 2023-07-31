export interface ISearchNewsInterface {
  componentId: string;
}
export interface ISearchNewsTemplateInterface {
  componentId: string;
  searchText: string;
  searchData: [];
  getSearchText(data: string): void;
  onSearchButtonPress(): void;
}
