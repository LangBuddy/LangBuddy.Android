import { API } from '../../config';
import { ApiList, ApiMethods } from './api.constants';
import { ApiDataType } from './api.types';

export const ApiData: ApiDataType = {
  [ApiList.Login]: {
    endpoint: `${API}auth/login`,
    method: ApiMethods.POST,
  },
};
