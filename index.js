(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s=document.getElementById("burger-btn");s.addEventListener("click",n=>{n.preventDefault();var r=document.getElementById("mobile-menu-backdrop");r.classList.add("is-open")});const c=document.querySelector("form");c.addEventListener("submit",n=>{n.preventDefault();const r=document.getElementById("user-name").value.trim(),i=document.getElementById("user-email").value.trim(),o=document.getElementById("user-tel").value.trim(),e=document.getElementById("user-comment").value.trim();alert(r&&i&&o&&e?`Congratulations ${r}! We have received your order: "${e}". A confirmation email will be sent to ${i} shortly. Our manager will call you at ${o} within the next hour.`:"Please fill out all fields.")});
//# sourceMappingURL=index.js.map
