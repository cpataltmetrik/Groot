import AxiosHelper from "../helper/axios-wrapper";

const postMethodConfig = (dataObject, url, header) => ({
    url,
    method: "post",
    headers: header,
    data: dataObject,
});

const getMethodConfig = (queryParameters, url, header) => ({
    url,
    method: "get",
    headers: header,
    params: queryParameters,
});

const putMethodConfig = (dataObject, url, header) => ({
    url,
    method: "put",
    headers: header,
    data: dataObject,
});

const patchMethodConfig = (dataObject, url, header) => ({
    url,
    method: "patch",
    headers: header,
    data: dataObject,
});
const deleteMethodConfig = (dataObject, url, header) => ({
    url,
    method: "delete",
    headers: header,
    data: dataObject,
});

class APICalls {
    public async getMethodCall(
        url,
        queryParameters = {},
        token = '',
        statusCode
    ) {
        return await AxiosHelper.axiosWrapper(
            getMethodConfig(queryParameters, url, AxiosHelper.buildHeader(token)),
            statusCode
        );
    }

    public async postMethodCall(url, dataObject = {}, token, statusCode) {
        AxiosHelper.axiosWrapper(
            postMethodConfig(dataObject, url, AxiosHelper.buildHeader(token)),
            statusCode
        );
    }

    public async patchMethodCall(url, dataObject = {}, token = "", statusCode) {
        AxiosHelper.axiosWrapper(
            patchMethodConfig(dataObject, url, AxiosHelper.buildHeader(token)),
            statusCode
        );
    }
    public async putMethodCall(url, dataObject = {}, token = "", statusCode) {
        AxiosHelper.axiosWrapper(
            putMethodConfig(dataObject, url, AxiosHelper.buildHeader(token)),
            statusCode
        );
    }
    public async deletMethodCall(url, dataObject = {}, token = "", statusCode) {
        AxiosHelper.axiosWrapper(
            deleteMethodConfig(dataObject, url, AxiosHelper.buildHeader(token)),
            statusCode
        );
    }
}

export default new APICalls();