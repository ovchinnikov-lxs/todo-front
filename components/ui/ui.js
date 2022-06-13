import Vue from 'vue';

//
// SCSS
//
import '~/components/ui/UiInput/UiInput.scss';
import '~/components/ui/UiButton/UiButton.scss';
import '~/components/ui/UiLink/UiLink.scss';

//
// Import Components
//
import UiInput from '~/components/ui/UiInput/UiInput';
import UiButton from '~/components/ui/UiButton/UiButton';
import UiLink from '~/components/ui/UiLink/UiLink';


const components = [
    UiInput,
    UiButton,
    UiLink,
];

//
// Install Engine
//
components.forEach(component => {
    Vue.component(component.name, component);
});
