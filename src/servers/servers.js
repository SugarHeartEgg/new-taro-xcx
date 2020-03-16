/* eslint-disable import/prefer-default-export */
import $api from "./http"

export const getSearch = (postData) => {
  console.log("这是请求文件", postData);
  return $api.get('search', postData)
}
