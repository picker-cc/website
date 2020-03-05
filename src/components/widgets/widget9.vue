
<template>
  <div :class="{'active': focusSelect}" class="component9">
    <header>
      <input v-model="selectValue" placeholder="Select" @blur="handleBur" @click="handleClick" readonly type="text" name="" id="select">
      <i class='bx bx-chevron-down'></i>
    </header>

    <ul
      :class="{'active': focusSelect}"
    >
      <li @click="handleClickOption('Bruno Hoffman')">
        Bruno Hoffman
      </li>
      <li @click="handleClickOption('Chad kerley')">
        Chad kerley
      </li>
      <li @click="handleClickOption('Summer rose')">
        Summer rose
      </li>
    </ul>
  </div>
</template>
