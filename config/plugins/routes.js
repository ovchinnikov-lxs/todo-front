import routes from '~/config/routes';

export default (ctx, inject) => {
    ctx.$routes = routes;
    inject('routes', routes);
};
