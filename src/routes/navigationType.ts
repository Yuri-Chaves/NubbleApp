import { StackParamList } from './Router';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
