// YourComponent.stories.js

import Footer from './footer.svelte';

//👇This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Footer',
  component: Footer,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args: any) => ({
    Component: Footer,
    props: args,
  }),
  args: {
    primary: true,
    label: 'Footer',
  },
};