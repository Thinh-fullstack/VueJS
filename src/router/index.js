import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import User from '@/components/User.vue';
import Profile from '@/components/Profile.vue';
import Admin from '@/components/Admin.vue';
import AdminDashboard from '@/components/AdminDashboard.vue';
import AdminSettings from '@/components/AdminSettings.vue';
import Login from '@/components/Login.vue';

// Định nghĩa các route
const routes = [
  // 1. Dynamic Routing (Định tuyến động)
  // Đường dẫn này sử dụng tham số động ":id", có thể lấy giá trị từ URL (ví dụ: /user/123)
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    props: true, // Truyền tham số động "id" dưới dạng props vào component User
  },

  // 2. Nested Routes (Định tuyến lồng nhau)
  // Đường dẫn cha "/admin" chứa các đường dẫn con "/admin/dashboard" và "/admin/settings"
  {
    path: '/admin',
    component: Admin, // Component cha
    children: [
      {
        path: 'dashboard', // Đường dẫn con (tự động nối vào "/admin")
        component: AdminDashboard,
      },
      {
        path: 'settings', // Đường dẫn con (tự động nối vào "/admin")
        component: AdminSettings,
      },
    ],
  },

  // 3. Programmatic Navigation (Điều hướng bằng lập trình)
  // Đường dẫn này sẽ được điều hướng thông qua code, sử dụng các hàm như this.$router.push()
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },

  // 4. Route Aliases (Bí danh cho đường dẫn)
  // Đường dẫn "/home" có thể truy cập bằng bí danh "/main"
  {
    path: '/home',
    alias: '/main', // Bí danh giúp bạn có thể dùng nhiều URL để dẫn đến cùng một trang
    component: Home,
  },

  // 5. Named Routes (Đường dẫn có tên)
  // Đường dẫn này có tên là "Login", cho phép điều hướng bằng tên thay vì URL (this.$router.push({ name: 'Login' }))
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  // 6. Route Guards (Bảo vệ đường dẫn)
  // Đường dẫn này chỉ cho phép truy cập khi người dùng đã đăng nhập (isAuthenticated = true)
  // Nếu không, sẽ điều hướng người dùng đến trang "/login"
  {
    path: '/protected',
    name: 'Protected',
    component: () => import('../components/Protected.vue'),
    beforeEnter: (to, from, next) => {
      const isAuthenticated = false; // Giả lập trạng thái đăng nhập (thay đổi thành true để thử nghiệm)
      if (isAuthenticated) {
        next(); // Cho phép truy cập
      } else {
        alert('Bạn cần đăng nhập để truy cập trang này!');
        next('/login'); // Điều hướng đến trang đăng nhập
      }
    },
  },
];

// Tạo router với lịch sử dạng web history (URL thân thiện)
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
