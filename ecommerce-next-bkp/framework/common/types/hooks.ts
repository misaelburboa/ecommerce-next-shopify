import { SWRResponse } from "swr"
import { ApiFetcher, ApiFetcherOptions } from "./api"

export interface ApiHooks {
  cart: {
    useAddItem: MutationHook
    useCart: SWRHook
    useRemoveItem: MutationHook
    useUpdateItem: MutationHook
  }
}

export type MutationHookContext<I, O> = {
  fetch: (input: I) => Promise<O>
}

export type SWRHookContext<I, O> = {
  useData: (input: I) => Promise<O>
}

export type HookFetcherContext<I, O> = {
  input: I
  fetch: ApiFetcher<O>
  options: ApiFetcherOptions
}

export type HookFetcherOptions = {
  query: string
}

export type HookFetcherFn<I, O, D> = (
  context: HookFetcherContext<I, O>
) => Promise<D>

export type HookDescriptor = {
  fetcherInput: any
  fetcherOutput: any
  data: any
}

export type MutationHook<T extends HookDescriptor = any> = {
  fetcherOptions: HookFetcherOptions
  fetcher: HookFetcherFn<T["fetcherInput"], T["fetcherOutput"], T["data"]>
  useHook(
    context: MutationHookContext<T["fetcherInput"], T["data"]>
  ): () => (input: T["fetcherInput"]) => Promise<T["data"]>
}

export type UseDataContext = {
  swrOptions: any
}

export type UseData<D> = (context: UseDataContext) => D

export type SWRHookResponse<D> = SWRResponse<D, any> & { isEmpty: boolean }

export type SWRHook<T extends HookDescriptor = any> = {
  fetcherOptions: HookFetcherOptions
  fetcher: HookFetcherFn<T["fetcherInput"], T["fetcherOutput"], T["data"]>
  useHook(context: {
    useData: UseData<SWRHookResponse<T["data"]>>
  }): () => SWRHookResponse<T["data"]>
}

export type Hook = MutationHook | SWRHook
