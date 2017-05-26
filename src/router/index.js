//路由定义
const ShareIndex= resolve => {
    require.ensure(['parts/share/index/index.vue'], require => {
        resolve(require('parts/share/index/index.vue'));
    }, 'shareindex');
};
const SharePersonal= resolve => {
    require.ensure(['parts/share/personal/personal.vue'], require => {
        resolve(require('parts/share/personal/personal.vue'));
    }, 'sharepersonal');
};
const SharePosts= resolve => {
  require.ensure(['parts/share/posts/posts.vue'], require => {
    resolve(require('parts/share/posts/posts.vue'));
  }, 'shareposts');
};
const SharePostsSend= resolve => {
  require.ensure(['parts/share/posts/postsend.vue'], require => {
    resolve(require('parts/share/posts/postsend.vue'));
  }, 'sharepostsend');
};
const SharePostsMain= resolve => {
  require.ensure(['parts/share/posts/postsmain.vue'], require => {
    resolve(require('parts/share/posts/postsmain.vue'));
  }, 'sharepostsmain');
};
const ShareResources= resolve => {
  require.ensure(['parts/share/resources/resources.vue'], require => {
    resolve(require('parts/share/resources/resources.vue'));
  }, 'shareresources');
};
const ShareHome= resolve => {
    require.ensure(['parts/share/home/home.vue'], require => {
        resolve(require('parts/share/home/home.vue'));
    }, 'sharehome');
};
const Login= resolve => {
  require.ensure(['parts/share/login/login.vue'], require => {
    resolve(require('parts/share/login/login.vue'));
  }, 'sharelogin');
};
const ShareLoginForgetpw= resolve => {
  require.ensure(['parts/share/login/loginforgetpw.vue'], require => {
    resolve(require('parts/share/login/loginforgetpw.vue'));
  }, 'shareloginforgetpw');
};
const ShareLoginForm= resolve => {
  require.ensure(['parts/share/login/loginform.vue'], require => {
    resolve(require('parts/share/login/loginform.vue'));
  }, 'shareloginform');
};
/*const FullPage= resolve => {
  require.ensure(['parts/student/home/fullpage.vue'], require => {
    resolve(require('parts/student/home/fullpage.vue'));
  }, 'studentfullpage');
};
const Login= resolve => {
  require.ensure(['parts/student/login/login.vue'], require => {
    resolve(require('parts/student/login/login.vue'));
  }, 'studentlogin');
};
const StudentProblems= resolve => {
  require.ensure(['parts/student/problems/problems.vue'], require => {
    resolve(require('parts/student/problems/problems.vue'));
  }, 'Studentproblems');
};
const Studentshow= resolve => {
  require.ensure(['parts/student/show/show.vue'], require => {
    resolve(require('parts/student/show/show.vue'));
  }, 'Studentshow');
};
const StudenttodoList= resolve => {
  require.ensure(['parts/student/todolist/todolist.vue'], require => {
    resolve(require('parts/student/todolist/todolist.vue'));
  }, 'Studenttodolist');
};*/
export default {
    ShareIndex,
    SharePersonal,
    ShareHome,
    SharePosts,
    SharePostsSend,
    SharePostsMain,
    ShareResources,
    Login,
    ShareLoginForm,
    ShareLoginForgetpw
  // StudentProblems,
  //Studentshow,
  //StudenttodoList
};
