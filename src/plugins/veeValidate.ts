import Vue from 'vue';
import {
  ValidationProvider, configure, localize, extend,
} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN.json';
import {
  required, max, email,
} from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);

// 共通で変更したいoptionがあれば
configure({
  bails: false,
});

// 必要なruleを追加していく
extend('required', { ...required });
extend('max', { ...max });
extend('email', { ...email });

// 一括でもrulesをextendできる
// import * as rules from 'vee-validate/dist/rules';
// for (let rule in rules) {
//   extend(rule, rules[rule]);
// }

localize('zh_CN', zh_CN);
