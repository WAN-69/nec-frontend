import Vue from "vue";
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize,
} from "vee-validate";
import id from "vee-validate/dist/locale/id.json";
import * as rules from "vee-validate/dist/rules";
// import { required, email, min } from "vee-validate/dist/rules";

// install rules and localization
Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});

localize("id", id);

// const dictionary = {
//     en: {
//         messages: {
//             required: () => 'Field ini wajib diisi',
//             email: () => 'Emailnya ga valid'
//         },
//     },
// };

// // Install required rule.
// extend("required", required);

// // Install email rule.
// extend("email", email);

// // Install min rule.
// extend("min", min);

// localize(dictionary);

// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
