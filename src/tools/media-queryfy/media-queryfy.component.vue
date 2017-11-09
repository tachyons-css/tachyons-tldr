<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import SkinCss from './skin-css.component';

export default {
  name: 'skin-generator',
  components: { SkinCss },
  computed: {
    ...mapState('tools', ['colour']),
    ...mapState('tools', ['mq']),
    ...mapGetters('tools', ['mqfy']),
  },
  methods: {
    ...mapMutations('tools', ['updateMq']),
    updateName(name) {
      this.updateMq({ type: 'name', value: name });
    },
    updateRules(e) {
      this.updateMq({ type: 'rules', value: e.target.value });
    },
    updateSm(sm) {
      this.updateMq({ type: 'sm', value: sm });
    },
    updateLg(lg) {
      this.updateMq({ type: 'lg', value: lg });
    },
  },
};
</script>

<template>
  <div>
    <h2 class="f5 mb5">Media Query-fy</h2>
    <div class="flex flex-column flex-row-l items-stretch">

      <div class="w-100 w-34-l mr3-l mb4 mb0-l">
        <div class="pl2 bw2 bl flex flex-column b--black-10 mb4">
          <field-label for="classname" class="db f6 ttu tracked">Class Name</field-label>
          <text-field
            class="pv2 f1 code w-100"
            name="classname"
            type="text"
            :value="mq.name"
            @change="updateName" />
        </div>

        <div class="pl2 bw2 bl flex flex-column b--black-10 mb4">
          <field-label for="rules" class="db f6 ttu tracked">Rules</field-label>
          <textarea
            class="pv2 f4 code w-100 bn mt2 h4"
            name="rules"
            @change="updateRules">{{ mq.rules }}</textarea>
        </div>

        <div class="pl2 bw2 bl flex flex-column b--black-10 mb4">
          <field-label for="small-breakpoint" class="db f6 ttu tracked">
            Small Breakpoint
          </field-label>
          <text-field
            class="pv2 f1 code w-100"
            name="small-breakpoint"
            type="text"
            :value="mq.sm"
            @change="updateSm" />
        </div>

        <div class="pl2 bw2 bl flex flex-column b--black-10">
          <field-label for="large-breakpoint" class="db f6 ttu tracked">
            Large Breakpoint
          </field-label>
          <text-field
            class="pv2 f1 code w-100"
            name="large-breakpoint"
            type="text"
            :value="mq.lg"
            @change="updateLg" />
        </div>
      </div>

      <skin-css :css-string="mqfy" />

    </div>
  </div>
</template>
