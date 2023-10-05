import "server-only";

const getProjectDictionary = async (projectName: string, locale: string) => {
  // Sử dụng dynamic import và template literals để xác định file từ điển cần tải
  return await import(`./dictionaries/${projectName}/${locale}.json`).then(
    (module) => module.default
  );
};

export const getDictionary = async (projectName: string, locale: string) => {
  try {
    return {
      ...(await getProjectDictionary("common", locale)),
      ...(projectName ? await getProjectDictionary(projectName, locale) : {}),
    };
  } catch (error) {
    // return default home dictionary
    return getProjectDictionary("common", "en");
  }
};
