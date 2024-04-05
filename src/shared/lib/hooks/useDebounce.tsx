/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react'

type CallBack = (...arg: any) => void

export default function useDebounce(callback: CallBack, delay: number): CallBack {
    const timer = useRef<ReturnType<typeof setInterval> | null>(null)

    const debouncedCallback = useCallback(
        (...arg: any) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }

            timer.current = setTimeout(() => {
                callback(...arg)
            }, delay)
        },
        [callback, delay]
    )

    return debouncedCallback
}
