import todoApi from '~/config/api/todo';
import authApi from '~/config/api/auth';

export default {
    ...todoApi,
    ...authApi,
};
