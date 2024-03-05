class Utility {
  static getTimeToday() {
    const now = new Date();
    return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
  }
  static getDay() {
    const date = new Date();
    // 获取当前日期是星期几，0 表示星期日，6 表示星期六
    const day = date.getDay();
    // 将 0 转换为星期日，6 转换为星期六
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][day];
    return weekday;
  }
}
export const getToday = Utility.getTimeToday();
export const getDay = Utility.getDay();


