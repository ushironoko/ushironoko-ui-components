import { ComponentPublicInstance } from 'vue';
import {
  mount,
  shallowMount,
  VueWrapper,
  MountingOptions,
} from '@vue/test-utils';

type ExtendWrapper<T = Record<string, unknown>> = VueWrapper<
  ComponentPublicInstance & { [key: string]: unknown } & T
>;

export const useRenderComposition = <
  T extends Record<string, unknown>,
  P extends Record<'props', unknown>
>(
  compositionCb: (props: P) => T,
  options: MountingOptions<P> = {},
  shallow = false
) => {
  const component = {
    setup(props: { [key: string]: unknown }): { composition: T } {
      return {
        composition: compositionCb(props as P),
      };
    },
    template: '<div />',
  };

  const wrapper = (shallow
    ? shallowMount(component, options)
    : mount(component, options)) as ExtendWrapper<{
      composition: T;
  }>;

  return {
    wrapper,
    composition: wrapper.vm.composition,
  };
};
