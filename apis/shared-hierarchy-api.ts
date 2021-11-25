/* tslint:disable */
/* eslint-disable */
/**
 * clickup client
 * You can follow along at [https://clickup20.docs.apiary.io/#introduction/oauth2](https://clickup20.docs.apiary.io/#introduction/oauth2).  You'll need your personal token for this, just change the authorization header to include it.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * SharedHierarchyApi - axios parameter creator
 * @export
 */
export const SharedHierarchyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Shared Hierarchy
         * @param {number} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSharedHierarchy: async (teamId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new RequiredError('teamId','Required parameter teamId was null or undefined when calling getSharedHierarchy.');
            }
            const localVarPath = `/api/v2/team/{team_id}/shared`
                .replace(`{${"team_id"}}`, encodeURIComponent(String(teamId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SharedHierarchyApi - functional programming interface
 * @export
 */
export const SharedHierarchyApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Shared Hierarchy
         * @param {number} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSharedHierarchy(teamId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SharedHierarchyApiAxiosParamCreator(configuration).getSharedHierarchy(teamId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SharedHierarchyApi - factory interface
 * @export
 */
export const SharedHierarchyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get Shared Hierarchy
         * @param {number} teamId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSharedHierarchy(teamId: number, options?: any): AxiosPromise<void> {
            return SharedHierarchyApiFp(configuration).getSharedHierarchy(teamId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SharedHierarchyApi - object-oriented interface
 * @export
 * @class SharedHierarchyApi
 * @extends {BaseAPI}
 */
export class SharedHierarchyApi extends BaseAPI {
    /**
     * 
     * @summary Get Shared Hierarchy
     * @param {number} teamId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedHierarchyApi
     */
    public getSharedHierarchy(teamId: number, options?: any) {
        return SharedHierarchyApiFp(this.configuration).getSharedHierarchy(teamId, options).then((request) => request(this.axios, this.basePath));
    }
}