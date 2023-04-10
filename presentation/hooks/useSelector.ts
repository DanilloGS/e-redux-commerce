import { RootState } from "infrastructure/Redux/store";
import {
  TypedUseSelectorHook,
  useSelector as useSelectorRedux,
} from "react-redux";

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
