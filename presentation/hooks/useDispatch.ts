import { AppDispatch } from "infrastructure/Redux/store";
import { useDispatch as useDispatchRedux } from "react-redux";

type DispatchFunc = () => AppDispatch;
export const useDispatch: DispatchFunc = useDispatchRedux;
