document.write('<script src="/scripts/navbar.js"></script>');
document.write('<script src="/scripts/sidebar.js"></script>');
document.write('<script src="/scripts/bigtitle.js"></script>');

window.onload = () => {
  const title = document.getElementsByClassName("big-title")[0];
  //glitchedText(title);

  const sidebarMenus = Array.from(
    document.getElementsByClassName("sidebar-menu-item")
  );
  sidebarMenus.forEach((element, index) => {
    element.onclick = () => toggleSidebarOff();
  });
};
