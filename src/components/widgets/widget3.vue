<template>
  <div class="component3">
    <div
      :class="{'active': switch1}"
      @click="switch1 = !switch1"
      class="con-switch">
      <span class="circle" />
      <p>
        {{ switch1? 'on' : 'off' }}
      </p>
    </div>
    <div
      :class="{'active': switch2}"
      @click="switch2 = !switch2"
      class="con-switch">
      <span class="circle" />
      <p>
        {{ switch2? 'on' : 'off' }}
      </p>
    </div>
  </div>
</template>
