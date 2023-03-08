'use strict';

/**
 * 控制台输出 document.lastModified 信息以帮助识别是否成功应用部署
 * The console outputs document.lastModified information to help identify whether the deployment was successfully applied
 * @param {string} systemName 应用名称
 */
module.exports = (systemName = '') => {
  const print = console;
  if (print && print.log) {
    print.log(
      `%c${systemName} Document LastModified:`,
      'color: #fff;backfround-color:green;border-radius:3px;font-size:4px;padding:2px 5px',
      document.lastModified
    );
  }
};
