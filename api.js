// attendance_mobile/api.js
const BASE = "http://192.168.29.155:5000";   // ← change if your PC‑IP changes

/* -------------- Auth -------------- */
export const loginByPin = (pin) =>
  fetch(`${BASE}/login_pin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pin }),
  }).then((r) => r.json());

/* -------------- Punch (now sends lat/lng) -------------- */
export const punchActionMobile = (pin, type, lat, lng) =>
  fetch(`${BASE}/mobile/punch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pin, type, lat, lng }),   // ← NEW
  }).then((r) => r.json());

/* -------------- History -------------- */
export const getHistory = (emp_id) =>
  fetch(`${BASE}/mobile/history/${emp_id}`).then((r) => r.json());

/* -------------- Logout -------------- */
export const logout = () =>
  fetch(`${BASE}/logout`, { credentials: "include" }).catch(() => {});
