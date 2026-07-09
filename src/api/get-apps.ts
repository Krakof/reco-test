import {useQuery} from "@tanstack/react-query";

const URL = 'https://recotest.pythonanywhere.com/'

type Params = {
    appName: string;
    category: string;
    pageNumber: number;
    pageSize: number;
}

export type AppType = {
    appId: string;
    appName: string;
    appSources: string[];
    category: string;
}

type Response = {
    appRows: AppType[]
    totalCount: number
} | {
    error: string;
}

const getApps = async ({appName, category, pageNumber, pageSize}: Params): Promise<Response | void> => {
    // try {
        const response = await fetch(`${URL}api/v1/app-service/get-apps`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({appName, category, pageNumber, pageSize}),
        });
        // if (!response.ok) {
        //     throw new Error(`Response status: ${response.status}`);
        // }

        return response.json()
    // } catch (e) {
    //     console.error(e);
    // }
}

const fake = {
    appName: '',
    category: '',
    pageNumber: 1,
    pageSize: 25
}

export const useGetAppsQuery = () =>
    useQuery({
        queryKey: ['apps'],
        queryFn: () => getApps(fake)
    })