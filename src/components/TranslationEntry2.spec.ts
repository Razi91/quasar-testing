import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';

import TranslationEntry from './TranslationEntry2.vue'
import { mount, shallowMount } from '@vue/test-utils';
/**
 * @jest-environment jsdom
 */

installQuasarPlugin();

describe('TranslationEntry2', () => {
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
