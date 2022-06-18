import { authService } from './_servicies';


const todoApi = {
    auth: {
        login: `${authService}/login`,
        signup: `${authService}/signup`,
    },
};

export default todoApi;
