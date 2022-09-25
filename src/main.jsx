import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
// import "./assets/dashboard/plugins/custom/fullcalendar/fullcalendar.bundle.css"
// import "./assets/dashboard/plugins/custom/datatables/datatables.bundle.css"
// import "./assets/dashboard/plugins/global/plugins.bundle.css"
// import "./assets/dashboard/css/style.bundle.css"
import postscribe from 'postscribe';

if (document.documentElement) { const defaultThemeMode = "system"; const name = document.body.getAttribute("data-kt-name"); let themeMode = localStorage.getItem("kt_" + (name !== null ? name + "_" : "") + "theme_mode_value"); if (themeMode === null) { if (defaultThemeMode === "system") { themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } else { themeMode = defaultThemeMode; } } document.documentElement.setAttribute("data-theme", themeMode); }
var hostUrl = "assets/";

// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/xy.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/percent.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/radar.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/themes/Animated.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/map.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js" defer></script>');
// postscribe('#body', '<script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/plugins/global/plugins.bundle.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/js/scripts.bundle.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/plugins/custom/fullcalendar/fullcalendar.bundle.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/plugins/custom/datatables/datatables.bundle.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/js/widgets.bundle.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/js/custom/widgets.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/js/custom/apps/chat/chat.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/js/custom/utilities/modals/upgrade-plan.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/js/custom/utilities/modals/create-app.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/js/custom/utilities/modals/new-target.js" defer></script>');
// postscribe('#body', '<script src="./src/assets/dashboard/js/custom/utilities/modals/users-search.js" defer></script>');


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
