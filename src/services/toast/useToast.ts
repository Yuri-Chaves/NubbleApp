import { ToastService } from './toastTypes';
// useContext
// import { useToastContext } from './useToastContext';
// zustend
import { useToastServiceZustand, useToastZustand } from './useToastZustand';

export function useToast(): ToastService['toast'] {
  // const { toast } = useToastContext();
  // return toast
  return useToastZustand();
}

export function useToastService(): Pick<
  ToastService,
  'hideToast' | 'showToast'
> {
  // const { showToast, hideToast } = useToastContext();
  // return { hideToast, showToast };
  return useToastServiceZustand();
}
