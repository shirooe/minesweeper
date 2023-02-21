import compose from 'compose-function';
import { withAntd } from './withConfig';

export const withProviders = compose(withAntd);
