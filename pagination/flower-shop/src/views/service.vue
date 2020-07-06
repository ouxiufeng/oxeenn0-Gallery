<template>
  <div class="container">
    <section class="connection">
      <h2 class="title">聯絡我們</h2>
      <!-- TODO 姓名, 性別, 聯絡電話, Email, 需求, 詳細內容, 驗證碼 -->
      <form
        class="service-form"
        action="#"
        method="get"
        @submit.prevent="send()"
        autocomplete="off"
      >
        <div class="row">
          <label class="f-title" for="name">姓名</label>
          <input
            class="f-content"
            type="text"
            name="name"
            id="name"
            spellcheck="false"
            required
            v-focus
          />
        </div>
        <div class="row">
          <p class="f-title">性別</p>
          <div class="gender-group">
            <input class="gender-input" type="radio" name="gender" id="male" checked />
            <label class="gender-text" for="male">男性</label>
            <input class="gender-input" type="radio" name="gender" id="female" />
            <label class="gender-text" for="female">女性</label>
          </div>
        </div>
        <div class="row">
          <label class="f-title" for="contact">聯絡電話</label>
          <input
            class="f-content"
            type="tel"
            name="number"
            id="contact"
            spellcheck="false"
            required
          />
        </div>
        <div class="row">
          <label class="f-title" for="email">Email</label>
          <input class="f-content" type="email" name="email" id="email" spellcheck="false" required />
        </div>
        <div class="row">
          <label class="f-title" for="issue">需求</label>
          <select class="f-content" name="issue" id="issue" required>
            <option value>請選擇您的服務</option>
            <option value="wedding">婚禮佈置</option>
            <option value="gardening">園藝咨詢</option>
            <option value="farming">農耕專家</option>
            <option value="opinion">提供意見</option>
            <option value="other">其他服務</option>
          </select>
        </div>
        <div class="row">
          <label class="f-title" for="text">詳細內容</label>
          <textarea class="f-content" name="text" id="text" cols="60" rows="7" spellcheck="false"></textarea>
        </div>
        <div class="row">
          <button class="submit-btn">發送</button>
        </div>
      </form>
    </section>
    <section class="map">
      <h2 class="title">店家位置</h2>
      <div class="google-map">
        <GmapMap
          class="google-map-item"
          :center="{ lat:22.635027, lng:120.335638 }"
          :zoom="12"
          map-type-id="terrain"
          :style="mapStyle"
        >
          <GmapMarker
            :position="{ lat:22.635027, lng:120.335638 }"
            :clickable="true"
            :draggable="true"
          />
        </GmapMap>
      </div>
    </section>
  </div>
</template>

<style src="../assets/service/styles/service.css" scoped></style>

<script>
export default {
  computed: {
    mapStyle() {
      return {
        width: 700 + "px",
        height: 450 + "px",
        marginLeft: 50 + "px"
      };
    }
  },
  methods: {
    send() {
      alert("聯絡已發送。");
      this.$router.push({ name: "index" })
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>