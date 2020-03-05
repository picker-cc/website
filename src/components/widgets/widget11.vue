<template>
  <div :class="{'active': focusDrop}" class="component11">
    <header>
      <input placeholder="Dropdown" @blur="handleBurDrop" @click="handleClickDrop" readonly type="text" name="" id="">
      <i class='bx bx-chevron-down'></i>
    </header>

    <div class="liquid">

    </div>

    <ul
      :class="{'active': focusDrop}"
    >
      <li>
        😉
      </li>
      <li>
        😺
      </li>
      <li>
        😽
      </li>
      <li>
        😎
      </li>
      <li>
        😂
      </li>
    </ul>
  </div>
</template>
