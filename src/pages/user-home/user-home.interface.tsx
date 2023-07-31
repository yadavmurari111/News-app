export interface IUserHomeInterface {
  componentId: string;
}
export interface IUserHomeTemplateInterface {
  homeFeedData: [];
  loading: boolean;
  selectedCategoryIndex: number;
  componentId: string;
  onSwitchNewsCategory(category: string, index: number): void;
}
