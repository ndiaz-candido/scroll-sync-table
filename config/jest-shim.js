/**
 * This is a workaround to avoid this Warning running tests:
 *
 * Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills.
 */
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
