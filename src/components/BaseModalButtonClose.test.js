import { render } from '@testing-library/vue';
import BaseModalButtonClose from './BaseModalButtonClose.vue';

it('renders', () => {
    const { html } = render(BaseModalButtonClose);
    expect(html()).toMatchInlineSnapshot(`
"<button class=\\"p-2 focus:outline-none\\" data-testid=\\"base-modal-button-close\\"><svg class=\\"w-6 h-6\\" fill=\\"currentColor\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\" data-testid=\\"base-icon\\">
    <path fill-rule=\\"evenodd\\" d=\\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\\" clip-rule=\\"evenodd\\"></path>
  </svg></button>"
`);
})