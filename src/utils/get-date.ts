const DATES = {
  getLastMonth: () => {
    const now = new Date();
    const lastMonth = new Date(now);
    lastMonth.setMonth(now.getMonth() - 1);
    return lastMonth;
  },
  getCurrentMonth: () => {
    const now = new Date();
    const lastMonth = new Date(now);
    lastMonth.setMonth(now.getMonth());
    return lastMonth;
  },

  getLastYear: () => {
    const now = new Date();
    return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  },
  getCurrentYear: () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  },

  getTomorrow: () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  },
  getYesterday: () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d;
  },

  getToday: () => {
    const d = new Date();
    return d;
  },
};

export default DATES;
