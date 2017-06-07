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
const SharePostsComment= resolve => {
  require.ensure(['parts/share/posts/postscomment.vue'], require => {
    resolve(require('parts/share/posts/postscomment.vue'));
  }, 'sharepostscomment');
};
// const ShareListtabs= resolve => {
//   require.ensure(['components/base/listtabs.vue'], require => {
//     resolve(require('components/base/listtabs.vue'));
//   }, 'sharelisttabs');
// };
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
const ShareResourcesMain= resolve => {
  require.ensure(['parts/share/resources/resourcesmain.vue'], require => {
    resolve(require('parts/share/resources/resourcesmain.vue'));
  }, 'shareresourcesmain');
};
const ShareReNewBuild= resolve => {
  require.ensure(['parts/share/resources/newbuild.vue'], require => {
    resolve(require('parts/share/resources/newbuild.vue'));
  }, 'shareresourcesnewbuild');
};
const ShareReBuildFile= resolve => {
  require.ensure(['parts/share/resources/buildfile.vue'], require => {
    resolve(require('parts/share/resources/buildfile.vue'));
  }, 'shareresourcesbuildfile');
};
const ShareReBuildBlog= resolve => {
  require.ensure(['parts/share/resources/buildblog.vue'], require => {
    resolve(require('parts/share/resources/buildblog.vue'));
  }, 'shareresourcesbuildblog');
};
const ShareReBuildNote= resolve => {
  require.ensure(['parts/share/resources/buildnote.vue'], require => {
    resolve(require('parts/share/resources/buildnote.vue'));
  }, 'shareresourcesbuildnote');
};
const ShareAdmin= resolve => {
    require.ensure(['parts/share/admin/admin.vue'], require => {
        resolve(require('parts/share/admin/admin.vue'));
    }, 'shareadmin');
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
const AdminPage= resolve => {
  require.ensure(['parts/share/admin/adpage.vue'], require => {
    resolve(require('parts/share/admin/adpage.vue'));
  }, 'adminpage');
};
const AdLogin= resolve => {
  require.ensure(['parts/share/admin/adlogin.vue'], require => {
    resolve(require('parts/share/admin/adlogin.vue'));
  }, 'adminlogin');
};
const AdminPost= resolve => {
  require.ensure(['parts/share/admin/adpost.vue'], require => {
    resolve(require('parts/share/admin/adpost.vue'));
  }, 'adminpost');
};
const AdminNote= resolve => {
  require.ensure(['parts/share/admin/adnote.vue'], require => {
    resolve(require('parts/share/admin/adnote.vue'));
  }, 'adminpost');
};
const SharePostsReach= resolve => {
  require.ensure(['parts/share/posts/postsearch.vue'], require => {
    resolve(require('parts/share/posts/postsearch.vue'));
  }, 'sharepostsearch');
};
const ShareResearch= resolve => {
  require.ensure(['parts/share/resources/resourcessearch.vue'], require => {
    resolve(require('parts/share/resources/resourcessearch.vue'));
  }, 'shareresourcessearch');
};
const AdSearch= resolve => {
  require.ensure(['parts/share/admin/adsearch.vue'], require => {
    resolve(require('parts/share/admin/adsearch.vue'));
  }, 'adminsearch');
};

export default {
    ShareIndex,
    SharePersonal,
    ShareAdmin,
    SharePosts,
    SharePostsSend,
    SharePostsMain,
    ShareResources,
    Login,
    ShareLoginForm,
    ShareLoginForgetpw,
    SharePostsComment,
    ShareResourcesMain,
    ShareReNewBuild,
    ShareReBuildFile,
    ShareReBuildBlog,
    ShareReBuildNote,
    AdminPage,
    AdLogin,
    AdminPost,
    AdminNote,
    SharePostsReach,
    ShareResearch,
    AdSearch,
    // ShareListtabs,

};
