<template>
  <nav class="nav-container">
    <div class="nav-mark"></div>
    <div class="nav-main">
      <ul class="nav-list">
        <li :class="{'cur': curindex === index}" v-for="(item, index) in navList" :key="index" :data-id="item.id"><a @click="linkTo(item.id, index)">{{item.name}}</a></li>
      </ul>
      <div class="backtop" @click="backTop()">
        <a></a>
      </div>
    </div>
  </nav>
</template>

