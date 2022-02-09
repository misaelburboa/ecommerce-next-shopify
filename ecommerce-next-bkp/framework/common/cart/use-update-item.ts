import { MutationHook } from "@common/types/hooks"
import { useHook, useMutationHook } from "@common/utils/use-hook"

export type UseUpdateItem<T extends MutationHook = MutationHook<any>> = ReturnType<
  T["useHook"]
>

const useUpdateItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useUpdateItem
  })
  return useMutationHook({ ...hook })()
}

export default useUpdateItem
