<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { TextField, FieldLabel } from 'components';
import SkinCss from './skin-css.component';

export default {
  name: 'skin-generator',
  components: { TextField, FieldLabel, SkinCss },
  computed: {
    ...mapState('tools', ['colour']),
    ...mapGetters('tools', ['skin']),
  },
  methods: {
    ...mapMutations('tools', ['updateName', 'updateValue']),
  },
};
</script>

<template>
  <div>
    <h2 class="f5 mb5">Skin Generator</h2>
    <div class="flex flex-column flex-row-ns items-stretch">

      <div class="w-34 mr3-ns mb4 mb0-ns">
        <div class="pl2 bw2 bl mb4 flex flex-column " :style="{ borderColor: colour.value }">
          <field-label for="colour-value" class="db f6 ttu tracked">COLOUR</field-label>
          <text-field
            class="pv2 f1 code"
            name="colour-value"
            placeholder="colour value"
            type="text"
            :value="colour.value"
            @change="updateValue" />
        </div>

        <div class="pl2 bw2 bl b--black-10 flex flex-column">
          <field-label for="colour-name" class="db f6 ttu tracked">Name</field-label>
          <text-field
            class="pv2 f1 code"
            name="colour-name"
            placeholder="colour name"
            type="text"
            :value="colour.name"
            @change="updateName" />
        </div>
      </div>

      <skin-css :css-string="skin" />

    </div>
  </div>
</template>
