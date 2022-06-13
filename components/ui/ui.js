import Vue from 'vue';

//
// SCSS
//
import '~/components/ui/UiInput/UiInput.scss';
import '~/components/ui/UiButton/UiButton.scss';

//
// Import Components
//
import UiInput from '~/components/ui/UiInput/UiInput';
import UiButton from '~/components/ui/UiButton/UiButton';


const components = [
    UiInput,
    UiButton,
];

//
// Install Engine
//
components.forEach(component => {
    Vue.component(component.name, component);
});
