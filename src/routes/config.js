/**功能菜单相关路由 */
const menu = [
  {
    key: "/app/dashboard/index",
    title: "首页",
    icon: "mobile",
    component: "Dashboard"
  },
  { key: "/app/hello", title: "测试", icon: "mobile", component: "ReduxHello" }
];
/**非功能菜单相关路由 */
const others = [];

export default { menu, others };
