<template>
  <q-item>
    <q-item-section aside>
      <QBtn icon='arrow_left'/>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {useVModel} from '@vueuse/core'

const entry = () => ({
    langs: {
        pl: 'Wpis',
        en: 'Entry',
    },
});

export default defineComponent({
    name: 'TranslationEntry',
    props:{
        modelValue: {
            type: Object as PropType<any>,
            default: () => entry()
        }
    },
    setup (props, {emit}) {
        const entry = useVModel(props, 'modelValue', emit);
        return {
            entry
        }
    },
});
</script>
