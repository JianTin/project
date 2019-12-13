<template>
  <div>
    <ul id="footer" ref='list'>
      <li class="active" @click="goTo('/home',$event)">
        <div class="iconfont  icon-home"></div>
        <p>首页</p>
      </li>
      <li @click="goTo('/member',$event)">
        <div class="iconfont  icon-VIP"></div>
        <p>会员</p>
      </li>
      <li @click="goTo('/books',$event)">
        <div class="iconfont  icon-shujia"></div>
        <p>书架</p>
      </li>
      <li @click="goTo('/personal',$event)">
        <div class="iconfont  icon-wodedangxuan-copy-copy"></div>
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo(path, event) {
        // 如果是当前路径那么不进行跳转
        if (this.$route.path !== path) {
          // 获取 ul下的 每个li
          const list = Array.from(this.$refs.list.children);
          // 去除掉 li的 每个 active
          list.forEach((item) => {
            item.classList.remove("active");
          });
          // 判断是点击了谁， 给li 赋值 active
          switch (event.target.nodeName) {
            case "DIV":
              event.target.parentNode.classList.add("active");
              break;
            case "LI":
              event.target.classList.add("active");
              break;
            case "P":
              event.target.parentNode.classList.add("active");
          }
          // 进行页面的跳转
          this.$router.replace(path);
        }
      }
    }
  };
</script>

<style lang="stylus" scoped>
  #footer
    position fixed
    bottom 0
    height 100px
    width 100%
    border 1px solid #eeee
    display flex
    li
      width 25%
      height 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      font-size 14px
      color #ccc
      &.active
        color black
      div
        font-size 16px
</style>
