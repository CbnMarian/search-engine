import { state } from "../state";
import { query } from '../variables/queryVariables';

export const updateStateUserInput = (q) => {
  state[query.q] = q;
}