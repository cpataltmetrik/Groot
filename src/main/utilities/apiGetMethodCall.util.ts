import {
    apiEnvironmentVariables, axios
} from "../pageObjects/commonImportStatements.page"

export default class ApiGetMethodCall {

    /**
     * To implement api get call request
     * @param apiUrl {string} and params {object}
     * @returns response <any>
     */
    public async apiGetMethod(apiUrl: string, params: object): Promise<any> {

        const response: any = await axios.get(
            apiUrl,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiEnvironmentVariables.bearerToken}`
                },
                params
            }
        )

        return response
    }
}

/*
module.exports = new apiGetMethodCall()
export default new apiGetMethodCall()
*/