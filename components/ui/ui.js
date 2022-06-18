import Vue from 'vue';

//
// SCSS
//
import '~/components/ui/UiInput/UiInput.scss';
import '~/components/ui/UiButton/UiButton.scss';
import '~/components/ui/UiLink/UiLink.scss';
import '~/components/ui/UiPlate/UiPlate.scss';
import '~/components/ui/UiIcon/UiIcon.scss';

//
// Import Components
//
import UiInput from '~/components/ui/UiInput/UiInput';
import UiButton from '~/components/ui/UiButton/UiButton';
import UiLink from '~/components/ui/UiLink/UiLink';
import UiPlate from '~/components/ui/UiPlate/UiPlate';
import UiIcon from '~/components/ui/UiIcon/UiIcon';


const components = [
    UiInput,
    UiButton,
    UiLink,
    UiPlate,
    UiIcon,
];

//
// Install Engine
//
components.forEach(component => {
    Vue.component(component.name, component);
});
