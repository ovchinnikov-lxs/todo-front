export default function({ store, redirect }) {
    const auth = store.state.auth;

    if (auth.loggedIn) {
        redirect('/');
    }
}
