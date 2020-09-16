/*
 * @Author: Neil.yao
 * @Date: 2020-09-15 21:44:41
 * @LastEditTime: 2020-09-16 09:07:57
 * @Description: 
 * @FilePath: /vue-admin-template/src/utils/validate.js
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
