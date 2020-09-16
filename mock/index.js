/*
 * @Author: Neil.yao
 * @Date: 2020-09-15 22:38:30
 * @LastEditTime: 2020-09-15 23:16:00
 * @Description: 
 * @FilePath: /vue-admin-template/mock/index.js
 */
import Mock from 'mockjs'
import data from './data.js'


Mock.mock(/vue-admin-template\/user\/login/, data.login)
Mock.mock(/vue-admin-template\/user\/info/, data.userInfo)
Mock.mock(/vue-admin-template\/user\/logout/, data.logout)
Mock.mock(/vue-admin-template\/table\/list/, data.tabData)


export default Mock