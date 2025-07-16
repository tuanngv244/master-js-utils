const filteredParams = <T extends object = any>(params?: T) => {
  return params
    ? Object.fromEntries(
        Object.entries(params).filter(
          ([_, value]) => value !== undefined && value !== "" && value !== null
        )
      )
    : {};
};

const filteredParamsSerializer = (params: Record<string, any>) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, values]) => {
    if (Array.isArray(values)) {
      values.forEach((value) => searchParams.append(key, value));
    } else {
      searchParams.append(key, values as string);
    }
  });
  return searchParams.toString();
};

export default {
  filteredParams,
  filteredParamsSerializer,
};
