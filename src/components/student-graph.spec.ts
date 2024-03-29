import { mount } from '@vue/test-utils';
import StudentGraph from './student-graph.vue';

describe('StudentGraph', () => {
  it('renders properly', () => {
    const wrapper = mount(StudentGraph, {});
    expect(wrapper.text()).toContain('Welcome to StudentGraph');
  });
});
