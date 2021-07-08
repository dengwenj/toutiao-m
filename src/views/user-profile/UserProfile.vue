<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->
    <input type="file" hidden ref="file" />

    <van-cell title="头像" is-link center @click="$refs.file.click()">
      <van-image width="35" height="35" fit="cover" round :src="user.photo" />
    </van-cell>
    <van-cell title="昵称" is-link :value="user.name" @click="name = !name" />
    <van-cell
      title="性别"
      is-link
      :value="user.gender === 0 ? '男' : '女'"
      @click="isGender = !isGender"
    />
    <van-cell
      title="生日"
      is-link
      :value="user.birthday"
      @click="isBirthdayShow = !isBirthdayShow"
    />

    <!-- 修改昵称 -->
    <!-- 
       :nicheng="user.name"
      @update-name="user.name = $event" 
    -->
    <!-- 
       传递给子组件的数据纪要使用又要修改，这种情况可以使用 v-model 简写
       :value = "user.name"
       @input = "user.name = $event"
    -->
    <!-- 
       如果有多个数据需要保持同步，使用 .sync 修饰符 
       :gender.sync = "user.gender"
       :gender = "user.gender"
       @update:gender = "user.gender"

       子组件中就是这样
       props:{gender:{type:Number}}
       this.$emit('update:gender',0)  update:gender必须这样写
     -->
    <update-name :name="name" @cross="name = !name" v-model="user.name" />
    <!-- /修改昵称 -->

    <!-- 修改性别 -->
    <update-gender
      :isGender="isGender"
      @cancel="isGender = $event"
      v-model="user.gender"
    />
    <!-- /修改性别 -->

    <!-- 修改生日 -->
    <van-popup v-model="isBirthdayShow" position="bottom">
      <update-birthday
        v-if="isBirthdayShow"
        v-model="user.birthday"
        @close="isBirthdayShow = $event"
      />
    </van-popup>
    <!-- /修改生日 -->
  </div>
</template>

<script>
// 网络请求
import { userProfile } from 'api/user'

import UpdateName from './compschild/UpdateName'
import UpdateGender from './compschild/UpdateGender'
import UpdateBirthday from './compschild/UpdateBirthday'

export default {
  name: '',
  components: {
    UpdateName,
    UpdateGender,
    UpdateBirthday,
  },
  props: {},
  data() {
    return {
      user: {}, // 用户资料
      name: false, // 是否展示用户昵称
      isGender: false, // 是否展示修改性别
      isBirthdayShow: false,
    }
  },
  computed: {},
  watch: {},
  created() {
    // 发送请求
    this._userProfile()
  },
  mounted() {},
  methods: {
    async _userProfile() {
      const { data } = await userProfile()
      this.user = data.data
    },
  },
}
</script>

<style scoped lang="less"></style>