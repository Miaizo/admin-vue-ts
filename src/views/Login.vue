<template>
  <div class="container">
    <div class="layout-login" @keyup="enterSubmit">
      <h3 class="title">系统登陆</h3>
      <el-form
        ref="ruleForm"
        label-position="right"
        label-width="80px"
        :model="form"
        :rules="rules"
      >
        <el-form-item class="input-name" prop="name">
          <el-input
            v-model="form.name"
            placeholder="请输入用户名"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item class="input-name" prop="pwd">
          <el-input
            v-model="form.pwd"
            placeholder="请输入密码"
            :prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item class="input-name">
          <el-button type="primary" class="w-full" @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>

        <div class="flex justify-between">
          <div class="text-gray-300">
            <p class="leading-6 text-sm">
              <span class="w-24 inline-block">账号: admin</span> 密码: admin
            </p>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useLayoutStore } from '@/store/modules/layout'
import { validate } from '@/type/utils/formExtend'
export default defineComponent({
  name: 'Login',
  setup() {
    const { login } = useLayoutStore()
    const form = reactive({
      name: 'admin',
      pwd: 'admin',
    })
    const ruleForm = ref(null)
    const enterSubmit = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSubmit()
      }
    }
    const onSubmit = async () => {
      let { name, pwd } = form
      if (!(await validate(ruleForm))) return
      await login({ username: name, password: pwd })
      ElNotification({
        title: '欢迎',
        message: '欢迎回来',
        type: 'success',
      })
    }
    const rules = reactive({
      name: [
        {
          validator: (
            rule: any,
            value: any,
            callback: (arg0?: Error | undefined) => void
          ) => {
            if (!value) {
              return callback(new Error('用户名不能为空'))
            }
            callback()
          },
          trigger: 'blur',
        },
      ],
      pwd: [
        {
          validator: (
            rule: any,
            value: any,
            callback: (arg0?: Error | undefined) => void
          ) => {
            if (!value) {
              return callback(new Error('密码不能为空'))
            }
            callback()
          },
          trigger: 'blur',
        },
      ],
    })
    return {
      User,
      Lock,
      form,
      rules,
      ruleForm,
      enterSubmit,
      onSubmit,
    }
  },
})
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: rgba(31, 41, 55);
}
.layout-login {
  padding-top: 200px;
  width: 400px;
  margin: 0 auto;
}
::v-deep(.el-input__inner) {
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #ddd;
}
.title {
  color: #fff;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}
.input-name {
  margin-left: -5rem;
}
.w-full {
  width: 100%;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-gray-300 {
  color: #fff;
}
</style>
