import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={`<h1>Hello</h1>`} />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="sc-dkrFOg jXYwcf"
        >
          <section
            class="sc-gswNZR gbNLi"
          >
            <div
              class="sc-bcXHqe jrQupI"
            >
              <h1>
                Hello
              </h1>
            </div>
          </section>
        </footer>
      </div>
    `);
  });
});
