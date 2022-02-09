import { MutationHook } from "@common/types/hooks"
import { useHook, useMutationHook } from "@common/utils/use-hook"

export type UseRemoveItem<T extends MutationHook = MutationHook<any>> = ReturnType<
  T["useHook"]
>

const useRemoveItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useRemoveItem
  })
  return useMutationHook({ ...hook })()
}

export default useRemoveItem
