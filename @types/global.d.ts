type apiResGetApps = {
  count: string;
  list: {
    appKey: string;
    appName: string;
    appShortName: string;
    appStatus: string;
    appGroup?: string;
    appAuthor: {
      name: string;
      code: string;
    };
    appMemo?: string;
    appColor: string;
    appIcon: string;
    appQrcode: string;
    appFavorite?: string;
    appUrl: string;
  }[];
};

type apiResGetRecords = {
  countTotal: string;
  count: string;
  fields: {
    fieldCode?: string;
    fieldKey: string;
    fieldName: string;
    fieldType: string;
    fieldKind: string;
    fieldOptions?: string[] | { [key: string]: string; [key: string]: string }[];
  }[];
  records: {
    [key: string]: string | { [key: string]: string; [key: string]: string };
  }[];
};

type worksData = {
  appKey: string;
  appName: string;
  appShortName: string;
  appGroup: string;
  appMemo: string;
  appColor: string;
  appIcon: string;
  count: string;
  fields: {
    fieldCode?: string;
    fieldKey: string;
    fieldName: string;
    fieldType: string;
    fieldKind: string;
  }[];
  records: {
    recordId: string;
    recordTitle: string;
    registAccount: {
      name: string;
      code: string;
    };
    registDate: string;
    updateAccount: {
      name: string;
      code: string;
    };
    updateDate: string;
    [key: string]: string;
  }[];
};
