import {useState} from "react";
import {handleError} from "../helpers/errorHandle";

export const useFetching = (callback: ()=>void) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const isFetching= async ():Promise<void>  =>{
        try {
            setIsLoading(true)
           await callback()

        } catch (e){
            const message = handleError(e as Error)
            setError(message)
        }
        finally {
            setIsLoading(false)
        }
    }
return [isLoading, error, isFetching] as const;
}