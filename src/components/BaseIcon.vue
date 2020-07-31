<template>
  <div class="icon-wrapper">
    <div class="icon-wrapper" v-html="svg"></div>
    <slot />
  </div>
</template>

<script>
import feather from 'feather-icons'
export default {
  props: {
    name: String, // the name of the symbol we want to use
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: 'icon',
        width: this.width, // new prop
        height: this.height // new prop
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
