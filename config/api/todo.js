import { todoService } from '~/config/api/_servicies';


const todoApi = {
    todo: {
        list: `${todoService}/todo`,
        detail: id => `${todoService}/todo/${id}`,
    },
};

export default todoApi;
