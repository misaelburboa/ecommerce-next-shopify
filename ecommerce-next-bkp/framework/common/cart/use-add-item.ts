import { MutationHook } from "@common/types/hooks"
import { useHook, useMutationHook } from "@common/utils/use-hook"

export type UseAddItem<T extends MutationHook = MutationHook<any>> = ReturnType<
  T["useHook"]
>

const useAddItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useAddItem
  })
  return useMutationHook({ ...hook })()
}

export default useAddItem
