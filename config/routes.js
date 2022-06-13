import { todoRoutes } from '~/config/routes/todo';
import { authRoutes } from '~/config/routes/auth';

export default {
    ...todoRoutes,
    ...authRoutes,
};
