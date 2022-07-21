<template>
  <div class="ball">
    <div class="top">
      <div class="inner"></div>
    </div>
    <div class="center"></div>
    <div class="bottom">
      <div class="inner"></div>
    </div>
    <div class="circles">
      <div class="circleOutter">
        <div class="circleInner"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.square {
  width: 250px;
  height: 250px;
  background-color: #b6e5ff;
  background-image: linear-gradient(
    #e9f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #e8f7ff,
    #b6e5ff
  );
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ball {
  width: 250px;
  height: 250px;
  cursor: pointer;
}

.ball .top {
  margin: auto;
  width: 170px;
  height: 80px;
  position: relative;
  top: 20px;
  background-color: #ae0e3f;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border-color: #242540;
  border-width: 5px;
  border-style: solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ball .top .inner {
  margin: auto;
  width: 150px;
  height: 75px;
  position: relative;
  top: 5px;
  left: -9px;
  background-color: #d80c43;
  border-top-left-radius: 160px;
  border-top-right-radius: 150px;
}

.ball .center {
  margin: auto;
  width: 165px;
  height: 8px;
  position: relative;
  top: 20px;
  background-color: #242540;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ball .bottom {
  margin: auto;
  width: 170px;
  height: 80px;
  position: relative;
  top: 20px;
  background-color: #c3c6cc;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  border-color: #242540;
  border-width: 5px;
  border-style: solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ball .bottom .inner {
  margin: auto;
  width: 150px;
  height: 75px;
  position: relative;
  top: 0px;
  left: -9px;
  background-color: #f6f6f6;
  border-bottom-left-radius: 160px;
  border-bottom-right-radius: 150px;
}

.ball .circles .circleOutter {
  margin: auto;
  width: 40px;
  height: 40px;
  position: relative;
  top: -103px;
  background-color: #f6f6f6;
  border-radius: 150px;
  border-color: #242540;
  border-width: 10px;
  border-style: solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ball .circles .circleOutter .circleInner {
  margin: auto;
  position: relative;
  top: 8px;
  width: 15px;
  height: 15px;
  background-color: #f6f6f6;
  border-radius: 150px;
  border-color: #242540;
  border-width: 5px;
  border-style: solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
