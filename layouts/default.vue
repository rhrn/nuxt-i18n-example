<template>
  <div>
    <header>
      <nav>
        <nuxt-link :to="localePath('index')">
          {{ $t('home') }}
        </nuxt-link>
        |
        <nuxt-link :to="localePath('about')">
          {{ $t('about') }}
        </nuxt-link>
        |
        <nuxt-link
          v-for="(locale, index) in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="index"
          :exact="true"
          :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      </nav>
    </header>
    <nuxt/>
  </div>
</template>
