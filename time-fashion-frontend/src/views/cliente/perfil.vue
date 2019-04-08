<template>
  <v-app>
    <v-layout
      column
      justify-center
    >
      <v-expansion-panel popout >
        <v-expansion-panel-content
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <template v-slot:header>
            <v-layout
              align-center
              row
              spacer
            >
              <v-flex xs4 sm2 md1>
                <v-avatar 
                size="100px">
                  <img
                    v-if="message.avatar"
                    src="@/assets/hombres.png"
                    alt="Avatar"
                  >
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-flex>
              
              <v-flex sm5 md3 hidden-xs-only>
                <strong v-html="message.name"></strong>
                <span
                  v-if="message.total"
                  class="grey--text"
                >
                  &nbsp;({{ message.total }})
                </span>
              </v-flex>

              <v-flex no-wrap xs5 sm3>
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-flex>

              <v-flex
                v-if="message.excerpt"
                class="grey--text"
                ellipsis
                hidden-sm-and-down
              >
                &mdash;
                {{ message.excerpt }}
              </v-flex>
            </v-layout>
          </template>
          <v-card>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify.js!',
          excerpt: 'Thank you for joining our community...'
        },
      ],
      lorem: '.'
    }),
    methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'cliente-layout')}
  }
</script>
<style>
</style>