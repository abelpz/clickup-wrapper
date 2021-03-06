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
 * ChecklistsApi - axios parameter creator
 * @export
 */
export const ChecklistsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Checklist
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChecklist: async (body: string, taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createChecklist.');
            }
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling createChecklist.');
            }
            const localVarPath = `/api/v2/task/{task_id}/checklist`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Checklist Item
         * @param {string} body 
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChecklistItem: async (body: string, checklistId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createChecklistItem.');
            }
            // verify required parameter 'checklistId' is not null or undefined
            if (checklistId === null || checklistId === undefined) {
                throw new RequiredError('checklistId','Required parameter checklistId was null or undefined when calling createChecklistItem.');
            }
            const localVarPath = `/api/v2/checklist/{checklist_id}/checklist_item`
                .replace(`{${"checklist_id"}}`, encodeURIComponent(String(checklistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Checklist
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChecklist: async (checklistId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'checklistId' is not null or undefined
            if (checklistId === null || checklistId === undefined) {
                throw new RequiredError('checklistId','Required parameter checklistId was null or undefined when calling deleteChecklist.');
            }
            const localVarPath = `/api/v2/checklist/{checklist_id}`
                .replace(`{${"checklist_id"}}`, encodeURIComponent(String(checklistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * 
         * @summary Delete Checklist Item
         * @param {string} checklistId 
         * @param {string} checklistItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChecklistItem: async (checklistId: string, checklistItemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'checklistId' is not null or undefined
            if (checklistId === null || checklistId === undefined) {
                throw new RequiredError('checklistId','Required parameter checklistId was null or undefined when calling deleteChecklistItem.');
            }
            // verify required parameter 'checklistItemId' is not null or undefined
            if (checklistItemId === null || checklistItemId === undefined) {
                throw new RequiredError('checklistItemId','Required parameter checklistItemId was null or undefined when calling deleteChecklistItem.');
            }
            const localVarPath = `/api/v2/checklist/{checklist_id}/checklist_item/{checklist_item_id}`
                .replace(`{${"checklist_id"}}`, encodeURIComponent(String(checklistId)))
                .replace(`{${"checklist_item_id"}}`, encodeURIComponent(String(checklistItemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * 
         * @summary Edit Checklist
         * @param {string} body 
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editChecklist: async (body: string, checklistId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling editChecklist.');
            }
            // verify required parameter 'checklistId' is not null or undefined
            if (checklistId === null || checklistId === undefined) {
                throw new RequiredError('checklistId','Required parameter checklistId was null or undefined when calling editChecklist.');
            }
            const localVarPath = `/api/v2/checklist/{checklist_id}`
                .replace(`{${"checklist_id"}}`, encodeURIComponent(String(checklistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Edit Checklist Item
         * @param {string} body 
         * @param {string} checklistId 
         * @param {string} checklistItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editChecklistItem: async (body: string, checklistId: string, checklistItemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling editChecklistItem.');
            }
            // verify required parameter 'checklistId' is not null or undefined
            if (checklistId === null || checklistId === undefined) {
                throw new RequiredError('checklistId','Required parameter checklistId was null or undefined when calling editChecklistItem.');
            }
            // verify required parameter 'checklistItemId' is not null or undefined
            if (checklistItemId === null || checklistItemId === undefined) {
                throw new RequiredError('checklistItemId','Required parameter checklistItemId was null or undefined when calling editChecklistItem.');
            }
            const localVarPath = `/api/v2/checklist/{checklist_id}/checklist_item/{checklist_item_id}`
                .replace(`{${"checklist_id"}}`, encodeURIComponent(String(checklistId)))
                .replace(`{${"checklist_item_id"}}`, encodeURIComponent(String(checklistItemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChecklistsApi - functional programming interface
 * @export
 */
export const ChecklistsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Checklist
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createChecklist(body: string, taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ChecklistsApiAxiosParamCreator(configuration).createChecklist(body, taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create Checklist Item
         * @param {string} body 
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createChecklistItem(body: string, checklistId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ChecklistsApiAxiosParamCreator(configuration).createChecklistItem(body, checklistId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete Checklist
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteChecklist(checklistId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ChecklistsApiAxiosParamCreator(configuration).deleteChecklist(checklistId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete Checklist Item
         * @param {string} checklistId 
         * @param {string} checklistItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteChecklistItem(checklistId: string, checklistItemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ChecklistsApiAxiosParamCreator(configuration).deleteChecklistItem(checklistId, checklistItemId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Edit Checklist
         * @param {string} body 
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editChecklist(body: string, checklistId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ChecklistsApiAxiosParamCreator(configuration).editChecklist(body, checklistId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Edit Checklist Item
         * @param {string} body 
         * @param {string} checklistId 
         * @param {string} checklistItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editChecklistItem(body: string, checklistId: string, checklistItemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ChecklistsApiAxiosParamCreator(configuration).editChecklistItem(body, checklistId, checklistItemId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ChecklistsApi - factory interface
 * @export
 */
export const ChecklistsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create Checklist
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChecklist(body: string, taskId: string, options?: any): AxiosPromise<void> {
            return ChecklistsApiFp(configuration).createChecklist(body, taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Checklist Item
         * @param {string} body 
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChecklistItem(body: string, checklistId: string, options?: any): AxiosPromise<void> {
            return ChecklistsApiFp(configuration).createChecklistItem(body, checklistId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Checklist
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChecklist(checklistId: string, options?: any): AxiosPromise<void> {
            return ChecklistsApiFp(configuration).deleteChecklist(checklistId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Checklist Item
         * @param {string} checklistId 
         * @param {string} checklistItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteChecklistItem(checklistId: string, checklistItemId: string, options?: any): AxiosPromise<void> {
            return ChecklistsApiFp(configuration).deleteChecklistItem(checklistId, checklistItemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Edit Checklist
         * @param {string} body 
         * @param {string} checklistId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editChecklist(body: string, checklistId: string, options?: any): AxiosPromise<void> {
            return ChecklistsApiFp(configuration).editChecklist(body, checklistId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Edit Checklist Item
         * @param {string} body 
         * @param {string} checklistId 
         * @param {string} checklistItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editChecklistItem(body: string, checklistId: string, checklistItemId: string, options?: any): AxiosPromise<void> {
            return ChecklistsApiFp(configuration).editChecklistItem(body, checklistId, checklistItemId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChecklistsApi - object-oriented interface
 * @export
 * @class ChecklistsApi
 * @extends {BaseAPI}
 */
export class ChecklistsApi extends BaseAPI {
    /**
     * 
     * @summary Create Checklist
     * @param {string} body 
     * @param {string} taskId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChecklistsApi
     */
    public createChecklist(body: string, taskId: string, options?: any) {
        return ChecklistsApiFp(this.configuration).createChecklist(body, taskId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create Checklist Item
     * @param {string} body 
     * @param {string} checklistId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChecklistsApi
     */
    public createChecklistItem(body: string, checklistId: string, options?: any) {
        return ChecklistsApiFp(this.configuration).createChecklistItem(body, checklistId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete Checklist
     * @param {string} checklistId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChecklistsApi
     */
    public deleteChecklist(checklistId: string, options?: any) {
        return ChecklistsApiFp(this.configuration).deleteChecklist(checklistId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete Checklist Item
     * @param {string} checklistId 
     * @param {string} checklistItemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChecklistsApi
     */
    public deleteChecklistItem(checklistId: string, checklistItemId: string, options?: any) {
        return ChecklistsApiFp(this.configuration).deleteChecklistItem(checklistId, checklistItemId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Edit Checklist
     * @param {string} body 
     * @param {string} checklistId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChecklistsApi
     */
    public editChecklist(body: string, checklistId: string, options?: any) {
        return ChecklistsApiFp(this.configuration).editChecklist(body, checklistId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Edit Checklist Item
     * @param {string} body 
     * @param {string} checklistId 
     * @param {string} checklistItemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChecklistsApi
     */
    public editChecklistItem(body: string, checklistId: string, checklistItemId: string, options?: any) {
        return ChecklistsApiFp(this.configuration).editChecklistItem(body, checklistId, checklistItemId, options).then((request) => request(this.axios, this.basePath));
    }
}
