import { todoService } from '~/config/api/_servicies';


const todoApi = {
    todo: {
        list: `${todoService}`,
        detail: id => `${todoService}/${id}`,
    },
};

export default todoApi;
