<template>
  <div class="component13">
    <header>
      <cx-input v-model="input3" placeholder="location"></cx-input>
      <!-- <input placeholder="Location" type="text" name="" id="location"> -->
      <button>
        <i class='bx bx-chevron-right'></i>
      </button>
    </header>

    <ul>
      <li>
        <!-- <input checked type="checkbox" name="" id="checkbox1">
        <span class="check">
          <i class='bx bx-check'></i>
        </span>

        <label for="">
          Spain
        </label> -->
        <cx-checkbox>
          Spain
        </cx-checkbox>
      </li>
      <li>
        <!-- <input type="checkbox" name="" id="checkbox2">
        <span class="check">
          <i class='bx bx-check'></i>
        </span>

        <label for="">
          Germany
        </label> -->
        <cx-checkbox>
          Germany
        </cx-checkbox>
      </li>
      <li>
        <!-- <input type="checkbox" name="" id="checkbox3">
        <span class="check">
          <i class='bx bx-check'></i>
        </span>

        <label for="">
          Italy
        </label> -->
        <cx-checkbox>
          Italy
        </cx-checkbox>
      </li>
      <li>
        <!-- <input type="checkbox" name="" id="checkbox4">
        <span class="check">
          <i class='bx bx-check'></i>
        </span>

        <label for="">
          Japan
        </label> -->
        <cx-checkbox>
          Japan
        </cx-checkbox>
      </li>
    </ul>

    <cx-button block >
      Lets Go!
    </cx-button>
  </div>
</template>
