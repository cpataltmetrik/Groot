import { AxiosResponse } from 'axios'
import {
    apiEnvironmentVariables, axios
} from "../pageObjects/commonImportStatements.page"

let response


class AxiosHelper {
   public async axiosWrapper(configuration, statusCode) {
        try {
          console.log(configuration)
          response = await axios(configuration)
          console.log("Response in wrapper: "+JSON.stringify(response.data))
          if (statusCode !=="undefined" ) {
            console.log("Status code in if:"+response.status)
            expect(response.status).toBe(statusCode)
            
          }
        } catch (e) {
          response = e
        }
        return response
      }

 public buildHeader(token) {
      if (token != '') {
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
      }
 }
}
export default new AxiosHelper();