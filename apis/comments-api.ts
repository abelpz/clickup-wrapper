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
 * CommentsApi - axios parameter creator
 * @export
 */
export const CommentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Chat View Comment
         * @param {string} body 
         * @param {string} viewId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChatViewComment: async (body: string, viewId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createChatViewComment.');
            }
            // verify required parameter 'viewId' is not null or undefined
            if (viewId === null || viewId === undefined) {
                throw new RequiredError('viewId','Required parameter viewId was null or undefined when calling createChatViewComment.');
            }
            const localVarPath = `/api/v2/view/{view_id}/comment`
                .replace(`{${"view_id"}}`, encodeURIComponent(String(viewId)));
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
         * @summary Create List Comment
         * @param {string} body 
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createListComment: async (body: string, listId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createListComment.');
            }
            // verify required parameter 'listId' is not null or undefined
            if (listId === null || listId === undefined) {
                throw new RequiredError('listId','Required parameter listId was null or undefined when calling createListComment.');
            }
            const localVarPath = `/api/v2/list/{list_id}/comment`
                .replace(`{${"list_id"}}`, encodeURIComponent(String(listId)));
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
         * @summary Create Task Comment
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTaskComment: async (body: string, taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createTaskComment.');
            }
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling createTaskComment.');
            }
            const localVarPath = `/api/v2/task/{task_id}/comment`
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
         * Please paste comment_id from original task comment created for continuity
         * @summary Delete Comment
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteComment: async (commentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'commentId' is not null or undefined
            if (commentId === null || commentId === undefined) {
                throw new RequiredError('commentId','Required parameter commentId was null or undefined when calling deleteComment.');
            }
            const localVarPath = `/api/v2/comment/{comment_id}`
                .replace(`{${"comment_id"}}`, encodeURIComponent(String(commentId)));
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
         * @summary Get Chat View Comments
         * @param {string} viewId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChatViewComments: async (viewId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'viewId' is not null or undefined
            if (viewId === null || viewId === undefined) {
                throw new RequiredError('viewId','Required parameter viewId was null or undefined when calling getChatViewComments.');
            }
            const localVarPath = `/api/v2/view/{view_id}/comment`
                .replace(`{${"view_id"}}`, encodeURIComponent(String(viewId)));
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
        /**
         * 
         * @summary Get List Comments
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListComments: async (listId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            if (listId === null || listId === undefined) {
                throw new RequiredError('listId','Required parameter listId was null or undefined when calling getListComments.');
            }
            const localVarPath = `/api/v2/list/{list_id}/comment`
                .replace(`{${"list_id"}}`, encodeURIComponent(String(listId)));
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
        /**
         * 
         * @summary Get Task Comments
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskComments: async (taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling getTaskComments.');
            }
            const localVarPath = `/api/v2/task/{task_id}/comment`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId)));
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
        /**
         * Please paste comment_id from original task comment created for continuity
         * @summary Update Comment
         * @param {string} body Please paste comment_id from original task comment created for continuity
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateComment: async (body: string, commentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateComment.');
            }
            // verify required parameter 'commentId' is not null or undefined
            if (commentId === null || commentId === undefined) {
                throw new RequiredError('commentId','Required parameter commentId was null or undefined when calling updateComment.');
            }
            const localVarPath = `/api/v2/comment/{comment_id}`
                .replace(`{${"comment_id"}}`, encodeURIComponent(String(commentId)));
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
 * CommentsApi - functional programming interface
 * @export
 */
export const CommentsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Chat View Comment
         * @param {string} body 
         * @param {string} viewId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createChatViewComment(body: string, viewId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommentsApiAxiosParamCreator(configuration).createChatViewComment(body, viewId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create List Comment
         * @param {string} body 
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createListComment(body: string, listId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommentsApiAxiosParamCreator(configuration).createListComment(body, listId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create Task Comment
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTaskComment(body: string, taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommentsApiAxiosParamCreator(configuration).createTaskComment(body, taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Please paste comment_id from original task comment created for continuity
         * @summary Delete Comment
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteComment(commentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommentsApiAxiosParamCreator(configuration).deleteComment(commentId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Chat View Comments
         * @param {string} viewId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChatViewComments(viewId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommentsApiAxiosParamCreator(configuration).getChatViewComments(viewId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get List Comments
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getListComments(listId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommentsApiAxiosParamCreator(configuration).getListComments(listId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Task Comments
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTaskComments(taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommentsApiAxiosParamCreator(configuration).getTaskComments(taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Please paste comment_id from original task comment created for continuity
         * @summary Update Comment
         * @param {string} body Please paste comment_id from original task comment created for continuity
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateComment(body: string, commentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CommentsApiAxiosParamCreator(configuration).updateComment(body, commentId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CommentsApi - factory interface
 * @export
 */
export const CommentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create Chat View Comment
         * @param {string} body 
         * @param {string} viewId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createChatViewComment(body: string, viewId: string, options?: any): AxiosPromise<void> {
            return CommentsApiFp(configuration).createChatViewComment(body, viewId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create List Comment
         * @param {string} body 
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createListComment(body: string, listId: string, options?: any): AxiosPromise<void> {
            return CommentsApiFp(configuration).createListComment(body, listId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Task Comment
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTaskComment(body: string, taskId: string, options?: any): AxiosPromise<void> {
            return CommentsApiFp(configuration).createTaskComment(body, taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * Please paste comment_id from original task comment created for continuity
         * @summary Delete Comment
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteComment(commentId: string, options?: any): AxiosPromise<void> {
            return CommentsApiFp(configuration).deleteComment(commentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Chat View Comments
         * @param {string} viewId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChatViewComments(viewId: string, options?: any): AxiosPromise<void> {
            return CommentsApiFp(configuration).getChatViewComments(viewId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get List Comments
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListComments(listId: string, options?: any): AxiosPromise<void> {
            return CommentsApiFp(configuration).getListComments(listId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Task Comments
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskComments(taskId: string, options?: any): AxiosPromise<void> {
            return CommentsApiFp(configuration).getTaskComments(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * Please paste comment_id from original task comment created for continuity
         * @summary Update Comment
         * @param {string} body Please paste comment_id from original task comment created for continuity
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateComment(body: string, commentId: string, options?: any): AxiosPromise<void> {
            return CommentsApiFp(configuration).updateComment(body, commentId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CommentsApi - object-oriented interface
 * @export
 * @class CommentsApi
 * @extends {BaseAPI}
 */
export class CommentsApi extends BaseAPI {
    /**
     * 
     * @summary Create Chat View Comment
     * @param {string} body 
     * @param {string} viewId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public createChatViewComment(body: string, viewId: string, options?: any) {
        return CommentsApiFp(this.configuration).createChatViewComment(body, viewId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create List Comment
     * @param {string} body 
     * @param {string} listId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public createListComment(body: string, listId: string, options?: any) {
        return CommentsApiFp(this.configuration).createListComment(body, listId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create Task Comment
     * @param {string} body 
     * @param {string} taskId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public createTaskComment(body: string, taskId: string, options?: any) {
        return CommentsApiFp(this.configuration).createTaskComment(body, taskId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Please paste comment_id from original task comment created for continuity
     * @summary Delete Comment
     * @param {string} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public deleteComment(commentId: string, options?: any) {
        return CommentsApiFp(this.configuration).deleteComment(commentId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get Chat View Comments
     * @param {string} viewId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public getChatViewComments(viewId: string, options?: any) {
        return CommentsApiFp(this.configuration).getChatViewComments(viewId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get List Comments
     * @param {string} listId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public getListComments(listId: string, options?: any) {
        return CommentsApiFp(this.configuration).getListComments(listId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get Task Comments
     * @param {string} taskId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public getTaskComments(taskId: string, options?: any) {
        return CommentsApiFp(this.configuration).getTaskComments(taskId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Please paste comment_id from original task comment created for continuity
     * @summary Update Comment
     * @param {string} body Please paste comment_id from original task comment created for continuity
     * @param {string} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public updateComment(body: string, commentId: string, options?: any) {
        return CommentsApiFp(this.configuration).updateComment(body, commentId, options).then((request) => request(this.axios, this.basePath));
    }
}