export const sprintf = (...args: any[]) => {
    return args.shift().replace(/%s/g, () => {
        return args.shift();
    });
};

export const merge = (mergeA: any, mergeB: any) => ({...mergeA, ...mergeB});

export const paramEncode = (paramValue: any) => {
    if (Array.isArray(paramValue)) {
        paramValue = "[" + paramValue.map((val: any) => {
            return encodeURIComponent(val);
        }).join(",") + "]";
    } else {
        paramValue = encodeURIComponent(paramValue);
    }
    return paramValue;
};

export const encode = (params: any): string => {
    const str = [];
    for (const paramName in params) {
        if (params.hasOwnProperty(paramName)) {
            str.push(
                `${encodeURIComponent(paramName)}=${paramEncode(
                    params[paramName]
                )}`
            );
        }
    }
    return str.join("&");
};
