import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { NavLink } from '.';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLink />', () => {
  it('should render the links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render the links', () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should break with media querie', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getByText(/link6/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteSmall,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLink links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
