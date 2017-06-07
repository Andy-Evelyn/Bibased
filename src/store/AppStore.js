import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
const globalModule = {
  state: {
    info: "",
    logID: "",
    infoDialog: false,
    userInfo: {
      nickName: "",
      account: "",
    }
  },
  getters: {
    getInfo: (state, getters) => {
      return state.info;
    },
    getlogID: (state, getters) => {
      return state.logID;
    },
    infoDialog: (state, getters) => {
      return state.infoDialog;
    },
    getNickName: (state, getters) => {
      return state.userInfo.nickName;
    },
    getAccount: (state, getters) => {
      return state.userInfo.account;
    },
    getUserInfo: (state, getters) => {
      return state.userInfo;
    },
  },
  mutations: {
    showInfoDialog(state, info, logID="") {
      state.info = info;
      state.logID = logID;
      state.infoDialog = true;
    },
    hideInfoDialog(state) {
      state.info = "";
      state.logID = "";
      state.infoDialog = false;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    scrollTop(state){
      (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      })();
    }
  },
  actions: {
    showInfoDialog({
      commit
    }, info) {
      commit('showInfoDialog', info)
    },
    hideInfoDialog({
      commit
    }) {
      commit('hideInfoDialog')
    },
    setUserInfo({
      commit
    }, userInfo) {
      commit('setUserInfo', userInfo)
    },
    scrollTop({
      commit
    }) {
      commit('scrollTop')
    }
  }
}
export default new Vuex.Store({
  state: {
    userName: ''
  },
  actions: {
    SetUserName({
      commit
    }, userName) {
      commit('SetUserName', userName)
    },
  },
  getters: {
    getUserName: (state, getters) => {
      return state.userName;
    },
  },
  mutations: {
    SetUserName(state, userName) {
      state.userName = userName;
    },
  },
  modules: {
    globalModule,
  },
  //   strict: debug,
  //   plugins: debug ? [createLogger()] : []
})
