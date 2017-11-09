<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import SkinCss from './skin-css.component';

export default {
  name: 'skin-generator',
  components: { SkinCss },
  computed: {
    ...mapState('tools', ['skin']),
    ...mapGetters('tools', ['skinCss']),
  },
  methods: {
    ...mapMutations('tools', ['updateSkin']),
    updateName(name) {
      this.updateSkin({ type: 'name', value: name });
    },
    updateColour(colour) {
      this.updateSkin({ type: 'colour', value: colour });
    },
  },
};
</script>

<template>
  <div>
    <h2 class="f5 mb5">Skin Generator</h2>
    <div class="flex flex-column flex-row-l items-stretch">

      <div class="w-100 w-34-l mr3-l mb4 mb0-l">
        <div class="pl2 bw2 bl mb4 flex flex-column " :style="{ borderColor: skin.colour }">
          <field-label for="skin-colour" class="db f6 ttu tracked">COLOUR</field-label>
          <text-field
            class="pv2 f1 code"
            name="skin-colour"
            placeholder="skin colour"
            type="text"
            :value="skin.colour"
            @change="updateColour" />
        </div>

        <div class="pl2 bw2 bl b--black-10 flex flex-column">
          <field-label for="skin-name" class="db f6 ttu tracked">Name</field-label>
          <text-field
            class="pv2 f1 code"
            name="skin-name"
            placeholder="skin name"
            type="text"
            :value="skin.name"
            @change="updateName" />
        </div>
      </div>

      <skin-css :css-string="skinCss" />

    </div>
  </div>
</template>
