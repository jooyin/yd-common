import { forEach, hasOneOf, objEqual } from './tools'
import signutil from './signutil'

export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}

/**
 * localStorage操作
 */
export const localSave = (key, value) => {
  localStorage.setItem(key, value)
}

export const localRead = (key) => {
  return localStorage.getItem(key) || ''
}

export const localRemove = (key) => {
  localStorage.removeItem(key)
}

/**
 * sessionStorage操作
 */
export const sessionSave = (key, value) => {
  sessionStorage.setItem(key, value)
}

export const sessionRead = (key) => {
  return sessionStorage.getItem(key) || ''
}

export const sessionRemove = (key) => {
  sessionStorage.removeItem(key)
}

/**
 * @param {Array} routeMetched 当前路由metched
 * @returns {Array}
 */
export const showTitle = (item, vm) => {
  let { title, __titleIsFunction__ } = item.meta
  if (!title) return
  return title
}
