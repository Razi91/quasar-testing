import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';

import TranslationEntry from './TranslationEntry.vue'
import { mount, shallowMount } from '@vue/test-utils';
import {
QBtn
} from 'quasar'
installQuasarPlugin({
components: {QBtn}
});

describe('TranslationEntry', () => {
    it('mount', () => {
        const wrapper = mount(TranslationEntry, {
        });
        expect(wrapper).toBeTruthy();
    })
    it('shallowMount', () => {
        const wrapper = shallowMount(TranslationEntry, {
        });
        expect(wrapper).toBeTruthy();
    })
})
